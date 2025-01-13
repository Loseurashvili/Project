import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { WorkerService } from 'src/app/services/worker.service';


@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  scheduleForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private workerService: WorkerService, private userService: UserService) {
    this.scheduleForm = this.fb.group({
      date: ['', Validators.required],
      shift: ['', Validators.required],
    });
  }
  decodeJwt() {
    let jwt = localStorage.getItem("token");
    let payload = jwt?.split(".")[1] ?? "";

    return JSON.parse(atob(payload));
  }
  onSubmit() {
    if (this.scheduleForm.valid) {
      const selectedDate = this.scheduleForm.get('date')?.value;
      const shift = this.scheduleForm.get('shift')?.value;
      const userId = this.decodeJwt()["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      console.log(userId);

      let startTime!: string;
      let endTime!: string;

      if (shift === 'Morning') {
        startTime = `${selectedDate}T08:00:00Z`;
        endTime = `${selectedDate}T12:00:00Z`;
      } else if (shift === 'Evening') {
        startTime = `${selectedDate}T16:00:00Z`;
        endTime = `${selectedDate}T20:00:00Z`;
      }

      const scheduleRequest = {
        startTime: startTime,
        endTime: endTime,
        userId: parseInt(userId || '0'),
      };

      this.workerService.requestSchedule(scheduleRequest).subscribe({
        next: (response) => {
          alert('Schedule Added Successfully!');
          console.log(response);
        },
        error: (error) => {
          alert('Error adding schedule. Please try again.');
          console.error(error);
        }
      }
      );
    } else {
      alert('Please fill out the form correctly.');
    }
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  goToAdmin() {
    this.router.navigate(['/admin']);
  }
  logOut() {
    this.userService.logOut();
  }
  login(): void {
    this.router.navigate(['/worker']);
  }
}
