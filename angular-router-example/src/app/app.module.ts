import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { VillainsComponent } from './components/villains/villains.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeroesComponent,
    VillainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
