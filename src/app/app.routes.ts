import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import {characterRoutes} from './character-list/character.routes';
import {comicRoutes} from './comic-list/comic.routes';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent,  
  },
  ...comicRoutes,
  ...characterRoutes ,
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
