import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() userData: any;
  router: any;
  constructor() {}

  signUp(data:any): void {
    this.router.navigate(['/Reg']);
  }
}
