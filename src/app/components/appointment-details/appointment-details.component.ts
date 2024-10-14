import { Component, Inject, OnInit } from '@angular/core';
import { Appointment } from '../../api';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DataApiService } from 'src/app/services/data-api.service';
@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  standalone: true,
  imports: [RouterLink, ButtonModule, ToastModule, ConfirmDialogModule],
  styleUrl: './appointment-details.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class AppointmentDetailsComponent implements OnInit {
  appointment!: Appointment;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private dataApiSrv: DataApiService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.appointment = params;
    });
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
        this.dataApiSrv.deleteById(+this.appointment.id);
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmed',
          detail: 'Appointment canceled successfully.',
        });
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
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
