import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { DashboardAdiminComponent } from './dashboard-adimin/dashboard-adimin.component';

import { CriarLivroComponent } from './criar-livro/criar-livro.component';
import { environment } from '../environment/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { PaginaDeContatoComponent } from './pagina-de-contato/pagina-de-contato.component';
import { EditarDeletarLivrosComponent } from './editar-deletar-livros/editar-deletar-livros.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    PerfilComponent,
    SobreNosComponent,
    PerfilComponent,
    DashboardAdiminComponent,
    CriarLivroComponent,
    LoginComponent,
    CadastroComponent,
    ExplorarComponent,
    PaginaDeContatoComponent,
    EditarDeletarLivrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
