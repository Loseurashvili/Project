import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from 'src/app/services/schedule.service';
import { UserService } from 'src/app/services/user.service';  
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedules: any[] = [];
  selectedDate: string = '';
  selectedShift: string = 'morning'; 

  constructor(private scheduleService: ScheduleService,
    private userService: UserService, 
    private router: Router
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  logOut(){
    this.userService.logOut();
  }
  schedule(){ 
    this.router.navigate(['/register']);
  }
}
