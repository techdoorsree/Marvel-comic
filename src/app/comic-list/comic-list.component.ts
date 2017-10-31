import { Component, OnInit } from '@angular/core';
import {ComicService} from 'app/comic.service';
@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css'],
  providers: [ComicService]
})
export class ComicListComponent implements OnInit {
  public  comics;
  constructor(private comicService: ComicService) {
  }

  ngOnInit() {
    this.comicService.getComics().subscribe(data => this.comics = data.data.results);
}
}
