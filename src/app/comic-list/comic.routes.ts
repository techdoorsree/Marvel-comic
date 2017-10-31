import { ComicListComponent } from 'app/comic-list/comic-list.component';
import { ComicSingleComponent } from 'app/comic-single/comic-single.component';
import {Routes} from '@angular/router';
import { ComicCreatorComponent } from 'app/comic-creator/comic-creator.component';
export const comicRoutes: Routes = [
    {path: 'comics', component: ComicListComponent},
    {path: 'comic/:id', component: ComicSingleComponent},
    {path: 'comic/:id/creators', component:ComicCreatorComponent}
];