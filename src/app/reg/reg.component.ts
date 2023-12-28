import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent {
  @Input() userrData: any;

  signUp(data:any): void {

  }

}

