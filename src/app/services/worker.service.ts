import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private apiUrl = 'https://localhost:44330/api/Worker/add-schedule-request';
  constructor(private http: HttpClient) { }
  requestSchedule(scheduleRequest: any) {
    return this.http.post(this.apiUrl, scheduleRequest);
  }


}
