import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Tips } from './pages/tips/tips';
import { Reciclaje } from './pages/reciclaje/reciclaje';
import { Noticias } from './pages/noticias/noticias';
import { Asistente } from './pages/asistente/asistente';
import { TipDetalle } from './pages/tip-detalle/tip-detalle';
import { NoticiaDetalle } from './pages/noticia-detalle/noticia-detalle';
import { Registro } from './pages/registro/registro';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tips', component: Tips },
  { path: 'tips/:id', component: TipDetalle },
  { path: 'reciclaje', component: Reciclaje },
  { path: 'noticias', component: Noticias },
  { path: 'noticias/:id', component: NoticiaDetalle },
  { path: 'asistente', component: Asistente },
  { path: 'registro', component: Registro },
  { path: '**', redirectTo: '' }
];
