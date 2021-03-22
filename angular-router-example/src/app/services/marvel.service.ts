import { Injectable } from '@angular/core';
import { Hero } from '../models/marvel.model';

/*
  Esse serviço está todo mockado (não chama uma API real) só para exemplificar o roteamento
*/
@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor() { }

  getHeroesMovies(name: string) : string[] {
    const hero = this.heroesMock.find(h => h.name === name);
    return hero && hero.movies;
  }

  getHeroesComicBooks(name: string) : string[] {
    const hero = this.heroesMock.find(h => h.name === name);
    return hero && hero.comicBooks;
  }

  searchHero(searchTerm: string): Hero[] {
    return this.heroesMock.filter(h => h.name.toLowerCase().includes(searchTerm.toLowerCase())).map((hero) => {
      return {
        name: hero.name,
        age: hero.age
      }
    });
  }

  private heroesMock = [
    {
      name: 'Iron Man',
      age: 45,
      movies: ['Avengers', 'Avengers 2', 'Avengers 3', 'Iron Man', 'Iron Man 2', 'Iron Man 3'],
      comicBooks: ['Iron Man 52 - 127', 'Avengers 01 - 250', 'East Coast Avengers 34']
    },
    {
      name: 'Black Widow',
      age: 35,
      movies: ['Avengers', 'Avengers 2', 'Avengers 3'],
      comicBooks: ['Black Widow 01 - 30','Avengers 01 - 250', 'East Coast Avengers 34']
    },
    {
      name: 'Spider Man',
      age: 17,
      movies: ['Avengers 3', 'Spider Man Far From Home', 'Spider Man Homecoming'],
      comicBooks: ['Spider Man 01 - 230', 'Avengers 50 - 204']
    },
    {
      name: 'Thor',
      age: 30,
      movies: ['Avengers', 'Avengers 2', 'Avengers 3', 'Thor', 'Thor 2', 'Thor Ragnarok'],
      comicBooks: ['Thor 01 - 150', 'Avengers 30 - 70']
    },
    {
      name: 'Black Panther',
      age: 40,
      movies: ['Avengers 3', 'Black Panther', 'Black Panther 2'],
      comicBooks: ['Black Panther 01 - 37', 'Avengers 03 - 50']
    },
  ];
}
