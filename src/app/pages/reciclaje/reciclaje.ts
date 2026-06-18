import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reciclaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reciclaje.html',
  styleUrl: './reciclaje.css',
})
export class Reciclaje {

  verCentros(material: string) {
    let urlMapa = '';

    // Usamos el formato oficial de búsqueda de Google Maps (search/?api=1&query=...)
    switch (material) {
      case 'plasticos':
        urlMapa = 'https://www.google.com/maps/search/?api=1&query=centros+de+reciclaje+plastico+pet+HDPE+Leon+Guanajuato';
        break;
      case 'papel-carton':
        urlMapa = 'https://www.google.com/maps/search/?api=1&query=reciclaje+de+papel+y+carton+Leon+Guanajuato';
        break;
      case 'vidrio':
        urlMapa = 'https://www.google.com/maps/search/?api=1&query=centros+de+acopio+de+vidrio+Leon+Guanajuato';
        break;
      case 'electronicos':
        urlMapa = 'https://www.google.com/maps/search/?api=1&query=reciclaje+de+residuos+electronicos+ewaste+Leon+Guanajuato';
        break;
    }

    if (urlMapa) {
      // Abre la búsqueda de Google Maps directamente en una pestaña nueva
      window.open(urlMapa, '_blank', 'noopener');
    }
  }
}
