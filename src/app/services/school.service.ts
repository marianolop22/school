import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { School } from '../models/school.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  public school: School = new School();

  constructor(
    private db: AngularFirestore,
    private http: HttpClient
  ) { }


  setSchool ( schoolId: string ) {

    if ( localStorage.getItem ( 'school') ) {
      this.school.set ( JSON.parse ( localStorage.getItem ('school') ) );
    } else {

      this.db.collection("schools").doc(schoolId).valueChanges()
        .subscribe(
          (response:any) => {
            this.school.set (response);
            this.school.schoolId = schoolId;
            localStorage.setItem ('school', JSON.stringify(this.school));
            console.log (response);
          }
        );
    }    

  }

  async getIdSchool () {
    let response = await this.http.get('config.json').toPromise();
    console.log ( 'a ver ', response );
    return response;
  }




}
