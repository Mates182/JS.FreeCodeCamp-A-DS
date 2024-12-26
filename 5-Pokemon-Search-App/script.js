const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-button')
const pokemonName = document.getElementById('pokemon-name')
const pokemonId = document.getElementById('pokemon-id')
const weightTxt = document.getElementById('weight')
const heightTxt = document.getElementById('height')
const hpTxt = document.getElementById('hp')
const attackTxt = document.getElementById('attack')
const defenseTxt = document.getElementById('defense')
const specialAttackTxt = document.getElementById('special-attack')
const specialDefenseTxt = document.getElementById('special-defense')
const speedTxt = document.getElementById('speed')
const typesDiv = document.getElementById('types')
const pokeImage = document.getElementById('poke-image')
const statBars = document.querySelectorAll('.stat-bar-fill')

const pokeEndpoint = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon'

const getPokemon = async (idOrName) => {
    try {
        clearData()
        const response = await fetch(`${pokeEndpoint}/${idOrName.toLowerCase()}`)
        if (!response.ok) {
            statBars.forEach(statBar => {
                statBar.style.width = '0%'
            })
            throw new Error('Pokémon not found')
        }
        const pokeData = await response.json()
        const {
            id,
            name,
            height,
            weight,
            sprites: { front_default },
            stats,
            types
        } = pokeData

        const statsValues = stats.map(({ base_stat }) => base_stat)
        const typesData = types.map(({ type: { name } }) => name)

        const pokemon = new Pokemon(id, name.toUpperCase(), height, weight, front_default, statsValues, typesData)
        setPokemonData(pokemon)

    } catch (error) {
        alert(error.message)
        statBars.forEach(statBar => {
            statBar.style.width = '0%'
        })
    }

}

const setPokemonData = (pokemon) => {
    pokeImage.innerHTML = `<img src="${pokemon.spriteUrl}" alt="${pokemon.name} Sprite" id="sprite">`
    pokemonName.textContent = pokemon.name
    pokemonId.textContent = `#${pokemon.id}`
    weightTxt.textContent = `Weight: ${pokemon.weight}`
    heightTxt.textContent = `Height: ${pokemon.height}`
    hpTxt.textContent = pokemon.stats.hp
    attackTxt.textContent = pokemon.stats.attack
    defenseTxt.textContent = pokemon.stats.defense
    specialAttackTxt.textContent = pokemon.stats.spAttack
    specialDefenseTxt.textContent = pokemon.stats.spDefense
    speedTxt.textContent = pokemon.stats.speed
    typesDiv.innerHTML = ''
    let i = 0
    Object.entries(pokemon.stats).forEach(([key, value]) => {
        statBars[i].style.width = (parseFloat(value) / 180 * 100) + '%'
        i++
    });

    pokemon.types.forEach(type => {
        typesDiv.innerHTML += `<p class="type-${type}">${type.toUpperCase()}</p>`
    })

}

const clearData = () => {
    pokeImage.innerHTML = ''
    pokemonName.textContent = ''
    pokemonId.textContent = ''
    weightTxt.textContent = ''
    heightTxt.textContent = ''
    hpTxt.textContent = ''
    attackTxt.textContent = ''
    defenseTxt.textContent = ''
    specialAttackTxt.textContent = ''
    specialDefenseTxt.textContent = ''
    speedTxt.textContent = ''
    typesDiv.innerHTML = ''
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

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const pokemonIdOrName = searchInput.value
    getPokemon(pokemonIdOrName)

})

searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        e.preventDefault()
        const pokemonIdOrName = searchInput.value
        getPokemon(pokemonIdOrName)
    }
})