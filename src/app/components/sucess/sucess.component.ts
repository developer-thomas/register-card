import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.scss'],
})
export class SucessComponent {
  constructor(private router: Router, private formsService: FormsService) {}

  backAndReset() {
    this.formsService.cardForm.reset();
    this.router.navigate(['']);
  }
}
