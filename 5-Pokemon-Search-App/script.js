const pokeEndpoint = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon'

const getPokemon = async (idOrName) => {
    try {
        const response = await fetch(`${pokeEndpoint}/${idOrName}`)
        if (!response.ok) {
            throw new Error(`Error: Pokémon ${idOrName} no encontrado.`);
        }
        const pokeData = await response.json()
        const {
            id,
            name,
            height,
            weight,
            sprites: { front_default},
            stats,
            types
        } = pokeData

        const statsValues = stats.map(({base_stat}) => base_stat)
        const typesData = types.map(({type: {name}}) => name)

        pokemon = new Pokemon(id, name, height, weight, front_default, statsValues, typesData)
        console.log(pokemon)

        
    } catch (error) {
        console.log(error)
    }
    
}

class Pokemon {
    constructor(id, name, height, weight, spriteUrl, stats, types) {
        this.id = id
        this.name = name
        this.height = height
        this.weight = weight
        this.stats = {
            hp: stats[0],
            attack: stats[1],
            defense: stats[2],
            spAttack: stats[3],
            spDefense: stats[4],
            speed: stats[5],
        }
        this.spriteUrl = spriteUrl
        this.types = types
    }
}

getPokemon('1')
getPokemon('eternatus')