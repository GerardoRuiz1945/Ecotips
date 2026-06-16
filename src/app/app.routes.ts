import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Tips } from './pages/tips/tips';
import { Reciclaje } from './pages/reciclaje/reciclaje';
import { Noticias } from './pages/noticias/noticias';
import { Asistente } from './pages/asistente/asistente';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tips', component: Tips },
  { path: 'reciclaje', component: Reciclaje },
  { path: 'noticias', component: Noticias },
  { path: 'asistente', component: Asistente },
  { path: '**', redirectTo: '' }
];
