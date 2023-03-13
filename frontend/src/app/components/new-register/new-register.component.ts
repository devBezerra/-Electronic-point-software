import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Register } from 'src/app/interfaces/Register';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css'],
})
export class NewRegisterComponent {
  @Output() onSubmit = new EventEmitter<Register>();
  newRegisterForm!: FormGroup;

  ngOnInit() {
    this.newRegisterForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      email: new FormControl(''),
      cpf: new FormControl(''),
      contact: new FormControl(''),
      valid: new FormControl(false),
      acquirements: new FormControl([]),
    });
  }

  get name() {
    return this.newRegisterForm.get('name')!;
  }

  submit() {
    if (this.newRegisterForm.invalid) {
      return;
    }
    
    this.onSubmit.emit(this.newRegisterForm.value);
  }

}
