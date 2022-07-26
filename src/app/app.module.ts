import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroAdmComponent } from './views/cadastro-adm/cadastro-adm.component';
import { CadastroHospitalComponent } from './views/cadastro-hospital/cadastro-hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroAdmComponent,
    CadastroHospitalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
