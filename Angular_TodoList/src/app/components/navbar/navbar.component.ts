import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'src/app/services/social-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user;
  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      if (user) {
        this.user = user.toJSON();
        console.log(user);
      }
      else this.user = null;
    });
  }

  logout() {
    this.authService.logout();
  }

}
