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
        let commsObservable = commsList.map(
          (comm:any) => {
            return this.db.collection(`users`).doc(`${comm.from}`).snapshotChanges();
          }
        );
    
        return commsObservable.length === 0 ?
          of(commsList) :
          combineLatest(...commsObservable, (...users) => {
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
