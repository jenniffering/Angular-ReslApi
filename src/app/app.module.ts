import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {PokedexService} from './pokedex.service';
import { HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PokemonesComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  /**
   * Register the service as a Providers
   */
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
