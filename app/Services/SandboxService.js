import { appState } from "../AppState.js";
import { SandboxApi } from "./AxiosService.js";

class SandboxService {

    async savePokemon() {
        console.log('saving poke from the service', appState.activePokemon);
        // NOTE in  a post request: first it is the endpoint for the api I want to 'save' to, next is the object that I want to save
        const res = await SandboxApi.post('api/rachel/pokemon', appState.activePokemon)
        console.log(res.data);
    }

}

export const sandboxService = new SandboxService()