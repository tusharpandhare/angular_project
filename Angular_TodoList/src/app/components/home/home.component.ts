import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'src/app/services/social-auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
user;
  constructor(private authService:SocialAuthService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      if (user) {
        this.user = user.providerData;
      }
      else this.user = null;
    });
  }

}
