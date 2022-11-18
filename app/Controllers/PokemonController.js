import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonService } from "../Services/PokemonService.js";
import { sandboxService } from "../Services/SandboxService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPokemon() {
    console.log('drawing')
    let pokemon = appState.pokemon
    let template = ''
    pokemon.forEach(p => template += Pokemon.ListTemplate(p))
    setHTML('pokemon', template)
}

function _drawActive() {
    let active = appState.activePokemon
    setHTML('active', active.ActiveTemplate)
}

export class PokemonController {
    constructor() {
        // NOTE this is everything that I want to happen as soon as the page 
        this.getPokemon()
        console.log('poke controller');
        appState.on('pokemon', _drawPokemon)
        appState.on('activePokemon', _drawActive)
    }

    async getPokemon() {
        try {
            await pokemonService.getPokemon()
        } catch (error) {

        }
    }

    async getPokemonByName(name) {
        try {
            console.log(name)
            await pokemonService.getPokemonByName(name)
        } catch (error) {

        }
    }

    async savePokemon() {
        try {
            console.log('saving poke');
            await sandboxService.savePokemon();
        } catch (error) {

        }
    }
}