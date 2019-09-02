import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


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


  public getMyComms (): Observable<any> {

    let reff: CollectionReference = 'comms';

    reff.where ( 'school', '==', 'V9uV3ZkLoQ4DzojgkiBL');

    // let query: QueryFn =  response => {
    //   console.log ( response);
    //   //return 'hola';
    // };

    this.db.collection( reff );
    

    return this.db.collection("comms").valueChanges();
    
 }






}
