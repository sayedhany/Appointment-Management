import { Injectable, signal } from '@angular/core';
import { Appointment, AppointmentList } from '../api';

@Injectable({
  providedIn: 'root',
})
export class DataApiService {
  appointment = signal<Appointment[]>(AppointmentList);
  constructor() {}
  deleteById(id: number) {
    const newValue = this.appointment().filter(
      (appointment) => appointment.id !== id
    );
    this.appointment.set(newValue);
    return this.appointment();
  }
  getData() {
    return this.appointment;
  }
}
