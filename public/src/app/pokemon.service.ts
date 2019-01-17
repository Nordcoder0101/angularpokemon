import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient) { 
    this.getPokemon()
    this.getPokemonWithSameAbility()
  }
  getPokemon(){
    let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/1/')
    tempObservable.subscribe((data) => {
      console.log('my pokemons ability', data.abilities[0].ability.name);
    })
  }
  getPokemonWithSameAbility(){
    let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/1/')
    tempObservable.subscribe((data)=>{
      let anotherObservable = this._http.get(data.abilities[0].ability.url)
      anotherObservable.subscribe((data) =>{
        console.log(data.pokemon.length + " different pokemon have this abilty")
      })
    })
  }
}
