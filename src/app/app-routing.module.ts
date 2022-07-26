import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAdmComponent } from './views/cadastro-adm/cadastro-adm.component';
import { CadastroHospitalComponent } from './views/cadastro-hospital/cadastro-hospital.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'cadastro-adm',component:CadastroAdmComponent},
  {path:'cadastro-hospital',component:CadastroHospitalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
