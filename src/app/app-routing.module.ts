import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { DashboardAdiminComponent } from './dashboard-adimin/dashboard-adimin.component';
import { CriarLivroComponent } from './criar-livro/criar-livro.component';

const routes: Routes = [
  {path:'', component:NavbarComponent, children:[
    {path:'', component:FooterComponent, children:[      
      {path: '',   component:HomeComponent},
      {path: 'perfil', component:PerfilComponent},
      {path: 'sobre',  component: SobreNosComponent },
      {path: 'adm', component: DashboardAdiminComponent},
      {path: 'criar_livro', component: CriarLivroComponent},
    ]}
  ]}
];


@NgModule({
  imports: [[RouterModule.forRoot(routes)]],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
