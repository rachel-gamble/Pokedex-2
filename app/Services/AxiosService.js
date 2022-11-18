export const PokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    timeout: 8000,
})

export const SandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/',
    timeout: 8000,
})