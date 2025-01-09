import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { WorkerComponent } from './components/worker/worker.component';
import { WorkerGuard } from './Guards/worker.guard';
import { WorkerDeGuard } from './Guards/worker-de.guard';
import { ScheduleComponent } from './components/schedule/schedule.component';


const routes: Routes = [

  {path: 'register', component: RegisterComponent},
  {path: 'schedule', component: ScheduleComponent, canActivate:[WorkerGuard], canDeactivate:[WorkerDeGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'worker', component: WorkerComponent, canActivate:[WorkerGuard], canDeactivate:[WorkerDeGuard]},
  {path: '', redirectTo: '/login', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
