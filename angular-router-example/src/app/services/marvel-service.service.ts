import { Injectable } from '@angular/core';
import { Marvel } from '../models/marvel.model';

/*
  Esse serviço está todo mockado (não chama uma API real) só para exemplificar o roteamento
*/
@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {

  constructor() { }

  getHeroes() : Marvel[] {
    return this.heroesMock;
  }
  
  getVillains() : Marvel[] {
    return this.villainsMock;
  }

  private heroesMock = [
    {
      name: 'Iron Man',
      age: 45
    },
    {
      name: 'Black Widow',
      age: 35
    },
    {
      name: 'Spider Man',
      age: 17
    },
    {
      name: 'Thor',
      age: 30
    },
    {
      name: 'Black Panther',
      age: 40
    },
  ];

  private villainsMock = [
    {
      name: 'Thanos',
      age: 123
    },
    {
      name: 'Ultron',
      age: 2
    },
    {
      name: 'Baron Zemo',
      age: 33
    },
    {
      name: 'Dr Fantastic',
      age: 350
    },
  ];
}
