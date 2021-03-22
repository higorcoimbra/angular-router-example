import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from '../../models/marvel.model';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  heroesList: Hero[];

  form: FormGroup = new FormGroup({
    searchTerm: new FormControl('')
  });

  constructor(private marvelService: MarvelService, private router: Router) { }

  ngOnInit(): void {
  }

  searchHero(searchTerm: string): void {
    this.heroesList = this.marvelService.searchHero(searchTerm);
  }

  redirectToMovies(heroName: string) {
    this.router.navigate([`movies/${heroName}`]);
  }
  
  redirectToComicBooks(heroName: string) {
    this.router.navigate([`comicBooks/${heroName}`]);
  }
}
