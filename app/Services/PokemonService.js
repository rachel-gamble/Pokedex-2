import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { PokeApi } from "./AxiosService.js"

class PokemonService {

    async getPokemon() {
        const res = await PokeApi.get()
        console.log(res.data);
        appState.pokemon = res.data.results
    }

    async getPokemonByName(name) {
        const res = await PokeApi.get(name)
        console.log(res.data);
        appState.activePokemon = new Pokemon(res.data)
        console.log('active poke', appState.activePokemon);
    }

}

export const pokemonService = new PokemonService()