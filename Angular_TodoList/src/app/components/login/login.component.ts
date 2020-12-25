import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'src/app/services/social-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user;
  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      if (user) {
        this.user = user.providerData;
      }
      else this.user = null;
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  loginFB(){
    this.authService.loginFB();
  }
}
