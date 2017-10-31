import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';


import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterSingleComponent } from './character-single/character-single.component';
import { CharacterService } from './character.service';
import {Helper} from './utilities/helper';
import { CharcterComicComponent } from './charcter-comic/charcter-comic.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicSingleComponent } from './comic-single/comic-single.component';
import { ComicCreatorComponent } from './comic-creator/comic-creator.component';
 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    CharacterListComponent,
    CharacterSingleComponent,
    CharcterComicComponent,
    ComicListComponent,
    ComicSingleComponent,
    ComicCreatorComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService, CharacterService,  Helper],
  bootstrap: [AppComponent],
})
export class AppModule { }
