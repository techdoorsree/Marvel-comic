import { Component, OnInit } from '@angular/core';
import {ComicService} from 'app/comic.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comic-creator',
  templateUrl: './comic-creator.component.html',
  styleUrls: ['./comic-creator.component.css'],
  providers: [ComicService]
})
export class ComicCreatorComponent implements OnInit {
  private sub: any;
  public comic: string[];
  constructor(private comicService: ComicService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

        const id = params['id'];

        this.comicService. getCharacterByComic(id).subscribe(data => this.comic = data.data.results);
    });
}
}
