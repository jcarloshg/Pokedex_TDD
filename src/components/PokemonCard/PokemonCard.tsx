import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Pokemon} from '../../models/pokemon.interfaces';

const windowHeight = Dimensions.get('window').height;

interface Props {
	pokemon: Pokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
	return (
		<View
			// eslint-disable-next-line react-native/no-inline-styles
			style={{
				margin: 10,
				width: windowHeight * 0.4,
				height: 120,
				borderWidth: 1,
				borderColor: 'red',
				borderRadius: 15,
				backgroundColor: 'grey',
				padding: 5,
			}}>
			<Text style={{...styles.name}}>{pokemon.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	name: {color: 'white', fontSize: 18},
});

export default styles;
