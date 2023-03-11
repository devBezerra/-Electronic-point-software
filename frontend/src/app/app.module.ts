import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistersListComponent } from './components/registers-list/registers-list.component';
import { RegisterComponent } from './components/register/register.component';
import { NewRegisterComponent } from './components/new-register/new-register.component';
import { ValidRegisterComponent } from './components/valid-register/valid-register.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistersListComponent,
    RegisterComponent,
    NewRegisterComponent,
    ValidRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
