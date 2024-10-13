import { Component, OnInit, Renderer2 } from '@angular/core';
import { DarkLightToggleService } from './services/dark-light-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Appointment-Management';
  constructor(
    private renderer: Renderer2,
    private darkLightSwitchSrv: DarkLightToggleService
  ) {}
  ngOnInit(): void {
    this.handleToggle();
  }
  handleToggle() {
    const toggle = document.getElementById('toggle');
    const moon = document.getElementById('light-icon');
    const switchEl = document.getElementById('switch');

    if (toggle && moon && switchEl) {
      this.renderer.listen(toggle, 'click', () => {
        switchEl.classList.toggle('trans');
        switchEl.classList.toggle('switch-dark');
        moon.classList.toggle('pi-sun');
        moon.classList.toggle('pi-moon');
      });
    }
  }
  switchDarkLightMode() {
    this.darkLightSwitchSrv.toggleDarkMode();
  }
}
