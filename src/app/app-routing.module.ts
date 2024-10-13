import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';

const routes: Routes = [
  { path: '', component: AppointmentListComponent },
  { path: 'appointment/:id', component: AppointmentDetailsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
