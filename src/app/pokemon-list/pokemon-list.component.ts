import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonResponse } from '../models/pokemon-response';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  public pokemons: Array<Pokemon>;
  private BASE_URL: string;

  constructor(private http: HttpClient) {
    this.BASE_URL = "https://pokeapi.co/api/v2"
    this.pokemons = []
  }

  ngOnInit(): void {
    this.http.get<PokemonResponse>(this.BASE_URL + '/pokemon' ).subscribe((response: PokemonResponse) => {
     response.results.forEach((pokemon: Pokemon) => {
       const pokemonId = this.getPokemonId(pokemon);
       pokemon.url = pokemonId;
     });
     this.pokemons = response.results;
    });
  }

  private getPokemonId(pokemon: Pokemon): string {
    const characters: string[] =  pokemon.url.split('/');
    return characters[characters.length - 2];
  }
}
