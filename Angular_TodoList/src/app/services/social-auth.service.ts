import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class SocialAuthService {
  puser;
  currentUser$;
  constructor(private afAuth: AngularFireAuth, private route:Router) { 
   this.afAuth.authState.subscribe(user=>{
     if(user){
     console.log(user.toJSON());
     this.puser = user.providerData;
      this.route.navigate(['/create'])
     }
     else{
       this.route.navigate(['/']);
     }
   })
  }

  login(){
    this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider);
  }

  get currentUser(){
    return this.afAuth.authState;
  }

  get user(){
   return this.puser;
  }


  logout(){
    this.afAuth.signOut();
  }


  loginFB(){
    this.afAuth.signInWithRedirect(new firebase.default.auth.FacebookAuthProvider());
  }
}

