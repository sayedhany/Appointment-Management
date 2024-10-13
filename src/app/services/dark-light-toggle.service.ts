import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkLightToggleService {
  constructor() {}
  toggleDarkMode() {
    if (document.body.hasAttribute('data-theme')) {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  }
}
