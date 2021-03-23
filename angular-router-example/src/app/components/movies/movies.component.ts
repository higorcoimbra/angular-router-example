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
  /*
    aqui no construtor desse componente vc vai precisar do serviço base, no seu caso o UserService
    e desse ActivatedRoute, pra você conseguir resgatar o parâmetro da rota (como expliquei no app-routing)

    Lembrando que a lógica aqui é a MESMA para a página de quadrinhos (comic-books.component), só dei ctrl c, ctrl v mesmo
    então nem precisa olhar o outro código.
  */
  constructor(private marvelService: MarvelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // dessa maneira aqui que você resgata o id que você passou de uma rota para outra
    const heroId = this.route.snapshot.paramMap.get('id');
    /* 
      esse serviço aqui está tudo mockado ok? não chama nenhuma API real, foi só para exemplificar como você pode chamar 
      usando um parametro da URL. Esse parseInt foi para transformar a string em numero, se não precisar no seu caso, ignore.
    */
    this.movies = this.marvelService.getHeroesMovies(parseInt(heroId));
  }

}
