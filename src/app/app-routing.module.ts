import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { DashboardAdiminComponent } from './dashboard-adimin/dashboard-adimin.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ExplorarComponent } from './explorar/explorar.component';

const routes: Routes = [
  {path:'', component:NavbarComponent, children:[
     {path:'', component:FooterComponent, children:[
      {path: 'perfil', component:PerfilComponent},
      {path: 'home',   component:HomeComponent},
      {path: 'sobre',  component: SobreNosComponent },
      {path: 'adm', component: DashboardAdiminComponent},
      {path: 'login', component:LoginComponent},
      {path: 'cadastro', component:CadastroComponent},
      {path: 'explorar', component:ExplorarComponent}
    ]}
  ]}
];


@NgModule({
  imports: [[RouterModule.forRoot(routes)]],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
