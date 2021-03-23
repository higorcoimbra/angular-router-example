import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComicBooksComponent } from "./components/comic-books/comic-books.component";
import { MainComponent } from "./components/main/main.component";
import { MoviesComponent } from "./components/movies/movies.component";

const routes: Routes = [
    /* 
      coloquei o path vazio, ou seja localhost:4200/ para ser redirecionado para esse MainComponent, nesse component que vou colocar
      a lógica de busca, lembra que o AppComponent só pode ficar com o router-outlet, e nada mais para conseguirmos trocar as páginas
    */
    { path: '', component: MainComponent},
    /*
      esse id na frente da rota ":id", é para que possamos passar um parametro pela rota, no caso desse projeto aqui eu estou passando o
      id do heroi de uma tela pra outra, sacou? para que eu consiga na outra tela pegar esse id e chamar meu serviço para resgatar os filmes
      dele
    */
    { path: 'movies/:id', component: MoviesComponent },
    /*
      mesma lógica aqui para resgatar os quadrinhos
    */
    { path: 'comicBooks/:id', component: ComicBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
