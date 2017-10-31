import {Routes} from '@angular/router';

import { CharacterListComponent } from 'app/character-list/character-list.component';
import { CharacterSingleComponent } from 'app/character-single/character-single.component';
import { CharcterComicComponent } from 'app/charcter-comic/charcter-comic.component';

export const characterRoutes: Routes = [
    {path: 'characters', component: CharacterListComponent},
    {path: 'character/:id', component: CharacterSingleComponent},
    {path: 'character/:id/comics', component: CharcterComicComponent,
    
}
];
