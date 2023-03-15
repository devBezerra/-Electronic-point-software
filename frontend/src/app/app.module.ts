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

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { InfoRegisterComponent } from './components/info-register/info-register.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    RegistersListComponent,
    RegisterComponent,
    NewRegisterComponent,
    ValidRegisterComponent,
    InfoRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
