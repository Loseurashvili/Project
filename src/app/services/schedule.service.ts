import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  saveSchedule(selectedDate: string, selectedShift: string) {
    throw new Error('Method not implemented.');
  }
  getSchedules() {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'https://localhost:44330/api/add-schedule-request';

  constructor(private http: HttpClient) {}

  getApprovedSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/approved`);
  }

  createScheduleRequest(scheduleRequest: { date: string; shift: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, scheduleRequest);
  }

  approveSchedule(requestId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/approve`, { requestId });
  }

  declineSchedule(requestId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/decline`, { requestId });
  }

  deleteSchedule(scheduleId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${scheduleId}`);
  }
}
