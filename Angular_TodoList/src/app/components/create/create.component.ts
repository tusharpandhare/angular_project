import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/Model/task';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SocialAuthService } from 'src/app/services/social-auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  user;

  constructor(private authService:SocialAuthService, private dbService:FirebaseService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user=>{
      this.user = user.providerData;
      console.log(user.toJSON);
    })
  }

  createList(task:task){
    task.uid = this.user[0].uid;
    console.log(task);
    this.dbService.createList(task);
  }
}
