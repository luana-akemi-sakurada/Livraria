import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrl: './sobre-nos.component.css'
})
export class SobreNosComponent {
  constructor(private router: Router) { }

  voltarParaPaginaHome(): void {
    this.router.navigate(['/home']);
  }
}
