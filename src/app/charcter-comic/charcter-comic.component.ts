import { Component, OnInit } from '@angular/core';
import {CharacterService} from 'app/character.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-charcter-comic',
  templateUrl: './charcter-comic.component.html',
  styleUrls: ['./charcter-comic.component.css'],
  providers: [CharacterService]
})
export class CharcterComicComponent implements OnInit {

  private sub: any;
  public character: string[];

  constructor(private characterService: CharacterService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

        const id = params['id'];
       
        this.characterService.getCharacterByComic(id).subscribe(data => this.character = data.data.results);
    });
}
}
