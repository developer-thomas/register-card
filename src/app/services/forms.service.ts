import { EventEmitter, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private formBuilder: FormBuilder) { }
  public formEmiter: EventEmitter<any> = new EventEmitter()
  

  public cardForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    cardNumber: ['', [Validators.required, Validators.maxLength(16), Validators.pattern('^[0-9]+$')]],
    mes: ['', [Validators.required, Validators.maxLength(3)] ],
    ano:['', [Validators.required, Validators.maxLength(2)] ],
    cvc: ['', [Validators.required, Validators.maxLength(3)] ],
  })
  
 
  formValues() {
    return this.formEmiter.emit(this.cardForm)
  }
  
  
}
