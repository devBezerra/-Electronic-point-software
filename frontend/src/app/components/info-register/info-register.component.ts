import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Register } from 'src/app/interfaces/Register';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-info-register',
  templateUrl: './info-register.component.html',
  styleUrls: ['./info-register.component.css'],
})
export class InfoRegisterComponent {
  register!: Register;

  constructor(
    private registerService: RegisterService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getRegisterById(id);
  }

  getRegisterById(id: string) {
    this.registerService
      .getRegisterById(id)
      .subscribe((register) => (this.register = register));
  }
}
