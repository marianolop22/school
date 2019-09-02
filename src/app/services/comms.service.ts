import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, QueryFn } from '@angular/fire/firestore';
import { Observable, combineLatest, of } from 'rxjs';
import { switchMap, map, mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommsService {

  commsList: Observable<Array<any>>;

  constructor(
    private db: AngularFirestore
  ) {

    //this.commsList = this.db.collection("comms").valueChanges();// .valueChanges();
  }

  public getCommsList (): Observable<any> {
     return this.db.collection('comms').valueChanges();
     
  }


 public getMyComms (): Observable<any>{
    return this.db.collection( 'comms' , ref => {
      return ref.where ( 'to', '==', 'marianolop22@yahoo.com.ar');
                
    } ).valueChanges().pipe(

      switchMap ( (commsList:any) => {

        let userObservables = commsList.map(
          (comm:any) => this.db.collection(`users`).doc(`${comm.from}`).snapshotChanges()
        );
    
        return userObservables.length === 0 ?
          of(commsList) :
          combineLatest(...userObservables, (...users) => {
            commsList.forEach((commsItem, index) => {
              commsList[index].user = users[index].payload.data();
            });
            return commsList;          
          });
      })
    );
 }

  public getUnreadComms () {


  
    return this.db.collection( 'comms' , ref => {
      return ref.where ( 'to', '==', 'marianolop22@yahoo.com.ar')
                .where ( 'read', '==', 0);
    } ).valueChanges();
               
  } 





}
