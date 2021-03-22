import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: string[];

  constructor(private marvelService: MarvelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    this.movies = this.marvelService.getHeroesMovies(parseInt(heroId));
  }

}
