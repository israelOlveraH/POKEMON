import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-pokemondetaile',
  templateUrl: './pokemondetaile.component.html',
  styleUrls: ['./pokemondetaile.component.css']
})
export class PokemondetaileComponent implements OnInit {

private BASE_URL:string;
public pokemon: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.BASE_URL = "https://pokeapi.co/api/v2";
    this.pokemon = {};
   }
  ngOnInit(): void {
    
    this.route.params.subscribe(paramsResponse => {
      const pokemonId: number = Number(paramsResponse.id);
      this.http.get(this.BASE_URL + '/pokemon/' + pokemonId).subscribe((valor:any)=>{
        console.log(valor);
        this.pokemon = valor;
      });


      // TODO: Hacer el request para obtener la información del pokemon
     

    });
  }

}
