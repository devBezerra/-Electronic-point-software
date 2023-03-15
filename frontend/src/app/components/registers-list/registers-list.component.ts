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
    private router: Router
  ) {}

  registers!: Register[];
  register!: Register;

  ngOnInit() {
    this.getAllRegisters();
  }

  getAllRegisters() {
    this.registerService
      .getAllRegisters()
      .subscribe((registers) => (this.registers = registers));
  }

  createHandler(register: Register) {
    this.registerService.create(register).subscribe();
    this.router
      .navigateByUrl('/registers', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/registers']);
      });
    this.ngOnInit()
  }
}
