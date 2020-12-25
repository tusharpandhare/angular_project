import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { AngularFirestore } from '@angular/fire/firestore';
import { task } from '../Model/task';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  taskCollection: AngularFirestoreCollection;
  taskDoc: AngularFirestoreDocument;
  tempData: task;
  // updatedname;
  // updatedcategory;
  // updateddescription;

  constructor(private db: AngularFirestore) { }

  createList(task : task) {
    const id = this.db.createId();
    task.id = id;
    this.db.collection('todo').doc(id).set(task);
  }

  getTask() {
    return this.db.collection('todo');
  }

  deleteData(task: task) {

    this.taskDoc = this.db.doc(`todo/${task.id}`);
    this.taskDoc.delete();
  }

  // ///
  // updateData(task: task) {
  //   this.taskDoc = this.db.doc(`tasks/${task.id}`);
  //   this.updatedname = task.name;
  //   this.updatedcategory = task.category;
  //   this.updateddescription = task.description
  // }

  //   updateOnSubmit(tempData:task) {
  //   this.taskDoc = this.db.doc(`tasks/${tempData.id}`);
  //   let update:task = {name: this.updatedname, category: this.updatedcategory, description: this.updateddescription,id: this.tempData.id};
  //   this.taskDoc.update(update);
    
   
  // }
}
