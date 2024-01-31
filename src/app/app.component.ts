import { Component } from '@angular/core';
import { FormsService } from './services/forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public formsService: FormsService){};
  formValues: string = this.formsService.cardForm.value.cvc;
  name: string = this.formsService.cardForm.value.name;


}
