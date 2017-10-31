import { Component, OnInit } from '@angular/core';
import {CharacterService} from 'app/character.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-character-single',
  templateUrl: './character-single.component.html',
  styleUrls: ['./character-single.component.css'],
  providers: [CharacterService]
})
export class CharacterSingleComponent implements OnInit {
  private sub: any;
  public character: string[];

  constructor(private characterService: CharacterService, private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {

          const id = params['id'];

          this.characterService.getCharacterById(id).subscribe(data => this.character = data.data.results[0]);
      });
  }
}

