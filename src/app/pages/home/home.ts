import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  mostrarModal = false;
  constructor(private router: Router) {}
  irATips() { this.router.navigate(['/tips']); }
  irAAsistente() { this.router.navigate(['/asistente']); }
  irATip(id: string) { this.router.navigate(['/tips', id]); }
  irANoticia(id: string) { this.router.navigate(['/noticias', id]); }
  abrirModal() { this.mostrarModal = true; }
  cerrarModal() { this.mostrarModal = false; }
}
