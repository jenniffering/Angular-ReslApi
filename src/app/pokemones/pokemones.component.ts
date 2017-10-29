import { Component } from '@angular/core';
//Importamos el servicio 
import {PokedexService} from '../pokedex.service';
//Importamos la Clase
import { Pokemon } from '../pokemon';



@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent {
  /**Lista of pokemon objects that will be rendered */
 
  pokemon : Pokemon[]=[];

  isLoading:boolean=false;
  error:boolean=false;
  /**Inject the pokedex service */

  constructor(private pokedexService:PokedexService ) { }

  ngOnInit() {

    this.loadMore();
    }

    loadMore(){
      this.isLoading=true;

      this.pokedexService.getPokemon(this.pokemon.length,12)
      .then(pokemon =>{
        pokemon =pokemon.map(p =>{
          p.imageLoaded = false;
          return p;
        });
        this.pokemon= this.pokemon.concat(pokemon);
        this.isLoading=false;
        this.error=false;
      })
      .catch(()=>{
        this.error=true;
        this.isLoading=false;
      })

    }

}
