import { Component, OnInit } from '@angular/core';
import {ComicService} from 'app/comic.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-comic-single',
  templateUrl: './comic-single.component.html',
  styleUrls: ['./comic-single.component.css'],
  providers: [ComicService]
})
export class ComicSingleComponent implements OnInit {
  public sub: any;
  public comic: string[];

  constructor(private comicService: ComicService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

        const id = params['id'];

        this.comicService.getComicById(id).subscribe(data => this.comic = data.data.results[0]);
    });
}

}
