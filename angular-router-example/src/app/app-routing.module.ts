import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { MainComponent } from "./components/main/main.component";
import { VillainsComponent } from "./components/villains/villains.component";

const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'heroes', component: HeroesComponent },
    { path: 'villains', component: VillainsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
