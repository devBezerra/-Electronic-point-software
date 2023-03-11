import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Register } from 'src/app/interfaces/Register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registers-list',
  templateUrl: './registers-list.component.html',
  styleUrls: ['./registers-list.component.css'],
})
export class RegistersListComponent {
  constructor(
    private registerService: RegisterService,
    private router: Router,
  ) {
    this.getAllRegisters();
  }

  registers!: Register[];
  register!: Register;

  ngOnInit() {
    this.registerService
      .getAllRegisters()
      .subscribe((registers) => (this.registers = registers));
  }

  getAllRegisters() {
    this.registerService
      .getAllRegisters()
      .subscribe((registers) => (this.registers = registers));
    console.log(this.registers);
  }

  createHandler(register: Register) {
    this.registerService.create(register).subscribe();
    window.location.reload()
  }
}
