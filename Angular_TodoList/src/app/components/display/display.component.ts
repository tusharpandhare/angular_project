import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { task } from 'src/app/Model/task';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SocialAuthService } from 'src/app/services/social-auth.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  taskDoc:AngularFirestoreDocument;
  taskCollection:AngularFirestoreCollection;
  user;
  tasks;
  searchName:string="";
  updateFlag = false;
  deleteFlag = false;
  tempData: task;
  updatedname;
  updatedcategory;
  updateddescription;
  updatedpriority;
 
  constructor(private dbService: FirebaseService, private auth:SocialAuthService, private db:AngularFirestore) { }

  ngOnInit(): void {
    this.auth.currentUser.subscribe(user=>{
      if(user) this.user = user.providerData;
    })

    this.dbService.getTask().valueChanges().subscribe(res=>{
      this.tasks = res.filter(val=>val['uid'] == this.user[0].uid);
    });
  }

  deleteTask(task: task) {
    this.dbService.deleteData(task);
  }

  // updateTask(task: task) {
  //   this.updateFlag = !this.updateFlag;
  //   this.tempData = task;
  //   this.dbService.updateData(this.tempData);

  // }

  // updateSubmit(task:task){
  //   this.dbService.updateOnSubmit(task);
  //   this.updateFlag = !this.updateFlag;
  // }

  updateTask(task:task) {
    this.deleteFlag = !this.deleteFlag;
    this.updateFlag = !this.updateFlag;
    this.tempData = task;
    this.updatedname=task.taskName;
    this.updatedcategory = task.category;
    this.updateddescription = task.description;
    this.updatedpriority = task.priority;
    
  }

  updateSubmit(){
    this.deleteFlag = !this.deleteFlag;
    this.updateFlag = !this.updateFlag;
    this.taskDoc = this.db.doc(`todo/${this.tempData.id}`);
    let update:task={taskName:this.updatedname,category:this.updatedcategory,description:this.updateddescription,priority:this.updatedpriority,id:this.tempData.id}
    this.taskDoc.update(update);
  }
 
}
