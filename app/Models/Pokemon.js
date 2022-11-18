export class Pokemon {

    constructor(data) {
        this.name = data.name
        this.img = data.sprites.other.dream_world.front_default

    }

    static ListTemplate(pokemon) {
        return `     <div class="row">
        <div class="col-12" onclick="app.pokemonController.getPokemonByName('${pokemon.name}')">
        <p>${pokemon.name}</p>
        </div>
        </div>`
    }

    get ActiveTemplate() {
        return ` <img src="${this.img}" alt="">
        <p>${this.name}</p>
        <button onclick="app.pokemonController.savePokemon()">Catch Pokemon</button>`
    }

}