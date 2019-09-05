import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { School } from '../models/school.model';


@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  public school: School = new School();

  constructor(
    private db: AngularFirestore
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




  V9uV3ZkLoQ4DzojgkiBL
}
