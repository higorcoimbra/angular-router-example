import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-comic-books',
  templateUrl: './comic-books.component.html',
  styleUrls: ['./comic-books.component.css']
})
export class ComicBooksComponent implements OnInit {

  comicBooks: string[];

  constructor(private marvelService: MarvelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    this.comicBooks = this.marvelService.getHeroesComicBooks(parseInt(heroId));
  }

}
