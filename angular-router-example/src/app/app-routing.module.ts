import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComicBooksComponent } from "./components/comic-books/comic-books.component";
import { MainComponent } from "./components/main/main.component";
import { MoviesComponent } from "./components/movies/movies.component";

const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'movies', component: MoviesComponent },
    { path: 'comicBooks', component: ComicBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
