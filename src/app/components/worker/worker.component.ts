import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit{
  constructor(private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ){}



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  goToAdmin(){
    this.router.navigate(['/admin']);
  }
  canExit(){
    if(!this.workerForm.valid){
      return window.confirm('You have unsaved changes. wanna exit?');
    } else{
      return true;
    }
  }
  workerForm!: FormGroup;
  logOut(){
    this.userService.logOut();
  }
  login():void{
    this.router.navigate(['/worker']);
  }
}
