import { Component } from '@angular/core';
import {Validators , FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';
import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('form1') form1:any;
  userService!:UserService
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    userService:UserService,
    private router: Router,
  ){
    this.userService = userService;

  }
  ngAfterViewInit(){
    console.log(this.form1)
  }
ngOnInit():void{

  this.createForm();
}
  chemifunc = (response:any)=>{
    console.log(response)
  }
  createForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }
  responseHandler(response:any){
    console.log(response)

  }
  LogIn(){
    console.log()
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      const userData = this.loginForm.value;
      this.userService.logInUser(userData).subscribe(this.chemifunc);
      this.userService.logInUser(userData).subscribe({
        next:(response) => {
          console.log('logged in succesfully: ', response);
          const jwtToken = response;
          localStorage.setItem('token', jwtToken);
          const decodedToken = this.decodeToken(jwtToken);
          const role = decodedToken?.['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
          if(role==='1'){
            this.router.navigate(['/admin']);
          } else if (role ==='2'){
            this.router.navigate(['/schedule']);
          } else {
            console.log('Login Failed')
          }
          console.log(this.loginForm.value)
        },
        error:(error) =>{
          console.log('Login failed: ', error);
        }
      })
    }
  }

  goToRegister(){ 
    this.router.navigate(['/register']);
  }

  logOut(){
    this.userService.logOut();
  }

  private decodeToken(token: string): any{
    try{
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      console.error('Error decoding JWT token', e);
      return null;
    }
  }
}
