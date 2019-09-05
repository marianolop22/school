import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';
import { Credential } from '../models/credential.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User = new User();
  public credential: Credential = new Credential();

  constructor(
    private http: HttpClient,
    private db: AngularFirestore,

  ) { }

  public register () {

    //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  }

  public login ( user: User ): Observable<any> {
    return this.http.post ( 
      environment.urlFirebaseLogin + `/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`,
        { 
          email: user.email,
          password: user.password,
          returnSecureToken: environment.returnSecureToken
        }
    );
  }

  public logout ( user: User ) {
  }

  public setUser ( userId:string ) {

    if ( localStorage.getItem ('user') ) {
      this.user.set (JSON.parse ( localStorage.getItem ('user') ) );
    } else {

      this.db.collection("users").doc(userId).valueChanges()
        .subscribe(
          (response:any) => {
            this.user.set (response);
            this.user.email = userId;
            this.user.avatar = 'assets/marianolop22.png';
  
            localStorage.setItem ('user', JSON.stringify(this.user));
  
  
            console.log (this.user);
          }
        );
    }
  }

  public setSessionCredentials ( credentials: Credential ) {

    this.credential = credentials;
    localStorage.setItem ('credentials', JSON.stringify(credentials));

  }




}
