import React from 'react';
import {Text, View} from 'react-native';
import {Pokemon} from '../../models/pokemon.interfaces';

interface Props {
	pokemon: Pokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
	return (
		<View>
			<Text>{pokemon.name}</Text>
		</View>
	);
};
