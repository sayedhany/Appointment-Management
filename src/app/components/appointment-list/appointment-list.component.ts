import { Component, Inject, inject, OnInit, signal } from '@angular/core';
import { Appointment } from '../../api';
import { DialogModule } from 'primeng/dialog';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DataApiService } from 'src/app/services/data-api.service';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  standalone: true,
  imports: [
    DialogModule,
    RouterLink,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  styleUrl: './appointment-list.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class AppointmentListComponent implements OnInit {
  displayCancelDialog = false;
  clickedId: number | null = null;
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private data: DataApiService
  ) {}

  appointments = signal<Appointment[]>([]);
  appointmentToCancel!: number;
  // constructor() {}
  ngOnInit(): void {
    this.appointments.set(this.data.getData()());
  }
  confirm1(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to cancel this appointment?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Confirm',
      rejectLabel: 'Cancel',

      acceptButtonStyleClass: 'm-2',
      rejectButtonStyleClass: 'm-2 p-button-danger',
      accept: () => {
        console.log(this.clickedId);

        this.data.deleteById(this.clickedId as number);
        this.appointments.set(this.data.getData()());
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmed',
          detail: 'Appointment canceled successfully.',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Appointment not canceled',
          life: 3000,
        });
      },
    });
  }
}
