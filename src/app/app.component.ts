import { Component } from '@angular/core';
import {PokedexService} from './pokedex.service';
import { HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
