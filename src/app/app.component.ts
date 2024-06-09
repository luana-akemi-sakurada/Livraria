import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'livraria';

  setSession(key: string, value: string){
    localStorage.setItem(key, value)
  }
  getSession(key: string): any{
    return localStorage.getItem(key)
  }
}
