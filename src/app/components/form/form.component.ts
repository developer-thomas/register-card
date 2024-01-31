import { Component, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/services/forms.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private formBuilder: FormBuilder, private formsService: FormsService) {}
  
  
  namePlaceholder:string = 'e.g. Jane Appleseed'
  numberPlaceholder: string = 'e.g. 1234 5678 9123 0000'
  public cardForm: FormGroup = this.formsService.cardForm;
 
  onSubmit():void {
    console.log(this.cardForm)
  }
}

  

