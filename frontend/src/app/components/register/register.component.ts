import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Register } from 'src/app/interfaces/Register';
import { RegisterService } from 'src/app/services/register.service';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @Output() onSubmit = new EventEmitter<Register>();
  register?: Register;
  registerForm!: FormGroup;

  acquirements = [
    'Git',
    'React',
    'PHP',
    'NodeJs',
    'DevOps',
    'Banco de Dados',
    'TypeScript',
  ];

  constructor(
    private registerService: RegisterService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.registerService
      .getRegisterById(id)
      .subscribe((register) => (this.register = register));

    this.registerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
        Validators.email,
      ]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d{3}.\\d{3}.\\d{3}-\\d{2}$')
      ]),
      contact: new FormControl(''),
      acquirements: this.buildAcquirements(),
      valid: new FormControl(false),
    });
  }

  getRegisterById(id: string) {
    this.registerService
      .getRegisterById(id)
      .subscribe((register) => (this.register = register));
  }

  buildAcquirements() {
    const values = this.acquirements.map((value) => new FormControl(false));

    return this.formBuilder.array(values);
  }

  getAcquirementsControls() {
    return this.registerForm.get('acquirements')
      ? (<FormArray>this.registerForm.get('acquirements')).controls
      : null;
  }

  // getCPFControls() {
  //   return this.registerForm.get('cpf')
  //     ? (<FormArray>this.registerForm.get('cpf')).controls
  //     : null;
  // }

  // changeCPF(event: any) {
  //   console.log('Chegando')
  //   let value = event.target.value.replace(/\D/g, '')

  //   const text = []

  //   value.split('').forEach((char: any, index: any) => {
  //     switch(index) {
  //       case 3:
  //       case 6:
  //         text.push('.')
  //     }

  //     text.push(char)
  //   })

  // }


  submit() {
    let valueSubmit: Register = Object.assign({}, this.registerForm.value)

    valueSubmit = Object.assign(valueSubmit, {
      acquirements: valueSubmit.acquirements
        .map((v: any, i: any) => v ? this.acquirements[i] : null)
        .filter((v: any) => v !== null)
    });

    this.registerForm.value.acquirements = valueSubmit.acquirements

    if (this.registerForm.invalid) {
      return;
    }

    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    
    this.updateHandler(id, this.registerForm.value);
  }

  updateHandler(id: string, register: Register) {
    this.registerService.update(id, register).subscribe();
    window.location.reload()
  }
}
