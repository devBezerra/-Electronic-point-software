import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Register } from 'src/app/interfaces/Register';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-valid-register',
  templateUrl: './valid-register.component.html',
  styleUrls: ['./valid-register.component.css'],
})
export class ValidRegisterComponent {
  register!: Register;
  validRegisterForm!: FormGroup;

  constructor(
    private registerService: RegisterService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.registerService
      .getRegisterById(id)
      .subscribe((register) => (this.register = register));

    this.validRegisterForm = new FormGroup({
      valid: new FormControl(true),
    });

  }

  submit() {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));    
    this.updateValidHandler(id, this.validRegisterForm.value);
  }

  updateValidHandler(id: string, value: any) {
    this.registerService.updateValid(id, value).subscribe();
    window.location.replace('/registers')
  }
}
