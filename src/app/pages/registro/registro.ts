import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  nombre = '';
  correo = '';
  contrasena = '';

  constructor(private router: Router) {}

  registrarse() {
    alert(`¡Bienvenid@ ${this.nombre}! Tu cuenta ha sido creada.`);
    this.router.navigate(['/']);
  }

  regresar() {
    this.router.navigate(['/']);
  }
}
