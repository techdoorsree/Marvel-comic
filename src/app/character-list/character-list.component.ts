import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'app/character.service';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  providers: [CharacterService]
})
export class CharacterListComponent implements OnInit {
  public characters;
  
  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    this.characterService.getCharacters().subscribe(data => this.characters = data.data.results);
}
}

