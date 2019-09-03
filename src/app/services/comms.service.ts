import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, combineLatest, of, forkJoin } from 'rxjs';
import { switchMap, map, mergeMap, combineAll } from 'rxjs/operators';


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

  public getCommsListOld (): Observable<any> {
     return this.db.collection('comms').valueChanges({'idField':'id'}).pipe (

       map ( (response:any) => {

        console.log ('map', response);

       })
     );
  }


 public getCommsList ( userId: string, schoolId: string, studentId: string ): Observable<any>{
    return this.db.collection( 'comms' , ref => {
      return ref.where ( 'to', '==', userId).orderBy ( 'sent', 'desc' );
    } ).valueChanges({'idField':'id'}).pipe(

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

  public getUnreadComms ( userId: string ):Observable<any> {
    return this.db.collection( 'comms' , ref => {
      return ref.where ( 'to', '==', userId)
                .where ( 'read', '==', 0);
    } ).valueChanges();
               
  } 

  public markCommAsRead ( commId: string): Promise<any> {
    return this.db.doc(`comms/${commId}`).update({ read: new Date().getTime() });
  }

  public getStudentsAsociated ( userId:string, schoolId:string ) {

    return this.db.collection('users').doc(userId).valueChanges().pipe (
      switchMap ( (studentList:any) => {
        console.log (studentList);

        let studentsObservable = studentList.students.map(
          (student:any) => {
            return this.db.collection('students').doc(`${student}`).valueChanges();
          }
        );

        return studentList.students.length === 0 ?
        [] : 
        combineLatest(...studentsObservable, (...students) => {
          studentList.students.forEach((studentItem, index) => {
            students[index].id = studentItem;
          });
          return students;          
        });
      })
    );
      
  }
    
}
