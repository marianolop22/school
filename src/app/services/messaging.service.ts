import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";

//import * as firebase from 'firebase/app';

import * as firebase from 'firebase';

//import firebase from '@firebase/app';

import { take } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  messaging = firebase.messaging();
  currentMessage = new BehaviorSubject (null);

  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth
  ) { }



  private updateToken ( token ) {

    this.afAuth.authState.pipe(take(1))
    .subscribe (
      user => {
        if (!user) return;

        const data = { [user.uid]:token };
        this.db.doc('fcmTokens/').update(data);
      }
    );
  }

  public getPermission () {
    this.messaging.requestPermission()
      .then (
        ()=> {
          console.log ('nos dieron permiso');
          return this.messaging.getToken()
        }
      )
      .then (
        token => {
          console.log (token);
          this.updateToken(token);
        }
      )
      .catch (
        err => {
          console.log ('no fue posible conseguir token ', err);
        }
      )
  }

  public receiveMessage () {
    this.messaging.onMessage (
      payload => {
        console.log ("recibimos mensaje", payload);
        this.currentMessage.next (payload);
      }
    )
  }

}
