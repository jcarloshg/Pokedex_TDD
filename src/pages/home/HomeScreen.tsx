import React from 'react';
import {ActivityIndicator, FlatList, Image} from 'react-native';
import {PokemonCard} from '../../components/PokemonCard/PokemonCard';
import {Title} from '../../components/components';
import {usePagination} from '../../hooks/usePagination';
import {styles} from './styles.home';

export const HomeScreen = () => {
	const {pokemons, loadPokemons} = usePagination();

	console.log(`numero de pokemones: ${pokemons.length}`);

	return (
		<>
			<Image
				source={require('../../assets/pokebola.png')}
				style={styles.pokeBall}
			/>

			<FlatList
				data={pokemons}
				keyExtractor={(pokemon) => pokemon.id}
				numColumns={2}
				ListHeaderComponent={<Title label="Pokedex" />}
				renderItem={({item}) => <PokemonCard pokemon={item} />}
				onEndReached={() => loadPokemons()}
				onEndReachedThreshold={0.4}
				ListFooterComponent={
					<ActivityIndicator
						// eslint-disable-next-line react-native/no-inline-styles
						style={{height: 50}}
						size={20}
						color="green"
					/>
				}
			/>
		</>
	);
};
