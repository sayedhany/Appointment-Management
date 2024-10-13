import { Component, Inject, inject, OnInit } from '@angular/core';
import { Appointment, AppointmentList } from '../../api';
import { DialogModule } from 'primeng/dialog';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
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
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  appointments: Appointment[] = [];
  appointmentToCancel: number | null = null;
  // constructor() {}
  ngOnInit(): void {
    this.appointments = AppointmentList;
  }
  confirm1(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000,
        });
      },
    });
  }
}
