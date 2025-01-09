import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  router: any;
  constructor(private userService: UserService){}

  logOut(){
    this.userService.logOut();
  }
  adminPage(){ 
    this.router.navigate(['/register']);
  }
}
