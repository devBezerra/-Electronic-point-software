import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Register } from 'src/app/interfaces/Register';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valid-register',
  templateUrl: './valid-register.component.html',
  styleUrls: ['./valid-register.component.css'],
})
export class ValidRegisterComponent {
  register!: Register;
  validRegisterForm!: FormGroup;
  id!: string;

  constructor(
    private registerService: RegisterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.id = id;
    this.registerService
      .getRegisterById(id)
      .subscribe((register) => (this.register = register));

    this.validRegisterForm = new FormGroup({
      valid: new FormControl(true),
    });
  }

  validate() {
    this.updateValidHandler(this.id, this.validRegisterForm.value);
  }

  invalidate() {
    this.validRegisterForm.value.valid = false;
    this.updateValidHandler(this.id, this.validRegisterForm.value);
  }

  updateValidHandler(id: string, value: any) {
    this.registerService.updateValid(id, value).subscribe();
    this.router
    .navigateByUrl('/registers', { skipLocationChange: true })
    .then(() => {
      this.router.navigate(['/registers']);
    });
  }
}
