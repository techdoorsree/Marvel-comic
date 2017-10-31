import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '..//environments/environment.prod';

import {Helper} from './utilities/helper';
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ComicService {
  public marvelApiUrl;

      constructor(private http: Http, private helper: Helper) {
          this.marvelApiUrl = environment.marvelApiUrl;
      }
  
      public getComics() {
            return this.http.get(this.helper.api(this.marvelApiUrl + 'comics'))
              .map((res: Response) => res.json())
              .catch(this.handleError);
      }
       
      public getComicById(id) {
          return this.http.get(this.helper.api(this.marvelApiUrl + '/comics/' + id))
              .map((res: Response) => res.json())
              .catch(this.handleError);
      } 
      public getCharacterByComic(id) {
        return this.http.get(this.helper.api(this.marvelApiUrl + '/comics/' + id +'/creators'))
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

  
      private handleError(error: Response) {
          console.error(error);
          return Observable.throw(error.json().error || 'Server error');
      }
  

}
