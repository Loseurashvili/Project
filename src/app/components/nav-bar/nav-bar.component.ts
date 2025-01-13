import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private user: UserService) {

  }

  isLoggedIn() {
    return this.user.isLoggedIn();
  }

  logOut() {
    this.user.logOut();
  }
}
