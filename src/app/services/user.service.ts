import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore,

  ) { }

  public register () {

    //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]



  }

  public login ( user: User ): Observable<any> {
    return this.http.post ( 
      environment.urlFirebaseLogin + `/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`
      , user.getUser()
       );
  }

  public logout ( user: User ) {
  }

  public getData ( userId:string ): Observable<any> {

    //return this.firestore.doc<any>('users/marianolop22@yahoo.com.ar').snapshotChanges();

    return this.firestore.collection("users").doc(userId).snapshotChanges();

  }




}
