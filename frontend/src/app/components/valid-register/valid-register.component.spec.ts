import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidRegisterComponent } from './valid-register.component';

describe('ValidRegisterComponent', () => {
  let component: ValidRegisterComponent;
  let fixture: ComponentFixture<ValidRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
