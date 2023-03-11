import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { RegistersListComponent } from './components/registers-list/registers-list.component';
import { ValidRegisterComponent } from './components/valid-register/valid-register.component';

const routes: Routes = [
  {path: '', component: RegistersListComponent},
  {path: 'registers', component: RegistersListComponent},
  {path: 'registers/:id', component: RegisterComponent},
  {path: 'registers/:id/valid', component: ValidRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
