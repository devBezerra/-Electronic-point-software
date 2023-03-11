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
        Validators.minLength(14),
        Validators.maxLength(14),
      ]),
      contact: new FormControl(''),
      acquirements: this.buildAcquirements(),
      valid: new FormControl(false),
    });
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

  getRegisterById(id: string) {
    this.registerService
      .getRegisterById(id)
      .subscribe((register) => (this.register = register));
  }

  submit() {
    let valueSubmit: Register = Object.assign({}, this.registerForm.value)

    valueSubmit = Object.assign(valueSubmit, {
      acquirements: valueSubmit.acquirements
        .map((v: any, i: any) => v ? this.acquirements[i] : null)
        .filter((v: any) => v !== null)
    });

    this.registerForm.value.acquirements = valueSubmit.acquirements
    
    console.log(this.registerForm.value.acquirements)

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