import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:NavbarComponent, children:[
    {path:'', component:FooterComponent, children:[
      {path:'perfil', component:PerfilComponent}
    ]}
  ]},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
