import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  imports: [],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias {
  constructor(private router: Router) {}

  irANoticia(id: string) {
    this.router.navigate(['/noticias', id]);
  }
}
