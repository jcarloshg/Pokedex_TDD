import {useEffect, useRef, useState} from 'react';
import {pokemon_api} from '../services/pokemon_api/pokemon_api';
import {
	Pokemon,
	PokemonPaginationResponse,
	Result,
} from '../models/pokemon.interfaces';

export const usePagination = () => {
	const nextUrlPage = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);

	const loadPokemons = async () => {
		const pokemonsRes = await pokemon_api.get<PokemonPaginationResponse>(
			nextUrlPage.current,
		);
		nextUrlPage.current = pokemonsRes.data.next;
		const newPokemons = mapPokemonList(pokemonsRes.data.results);
		setPokemons([...pokemons, ...newPokemons]);
	};

	// this a adapter
	const mapPokemonList = (pokemonsRawData: Result[]): Pokemon[] => {
		const newPokemonList: Pokemon[] = pokemonsRawData.map(
			(pokemonRawData) => {
				// url_example = https://pokeapi.co/api/v2/pokemon/80/
				const urlParts = pokemonRawData.url.split('/');
				const id = urlParts[urlParts.length - 2];
				const name = pokemonRawData.name;
				const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

				// prettier-ignore
				const pokemonParsed: Pokemon = {
					id:         id,
					name:       name,
					picture:    picture,
				};

				return pokemonParsed;
			},
		);

		return newPokemonList;
	};

	useEffect(() => {
		loadPokemons();
	}, []);

	return {pokemons, loadPokemons};
};
