import React, {useEffect, useRef, useState} from 'react';
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import ImageColors from 'react-native-image-colors';
import {Pokemon} from '../../models/pokemon.interfaces';
import {FadeInImage} from '../FadeInImage/FadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
	pokemon: Pokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
	const [bgColor, setbgColor] = useState('grey');
	const isMounted = useRef(true);

	useEffect(() => {
		ImageColors.getColors(pokemon.picture, {
			fallback: 'grey',
		}).then((colors) => {
			if (isMounted === false) {
				return;
			}

			if (colors.platform === 'android') {
				setbgColor(colors.dominant || 'grey');
			}
			if (colors.platform === 'ios') {
				setbgColor(colors.background || 'grey');
			}
		});

		return () => (isMounted.current = false);
	});

	return (
		<TouchableOpacity onPress={() => console.log('hola')}>
			<View
				style={{
					width: windowWidth * 0.425,
					backgroundColor: bgColor,
					...styles.card,
				}}>
				<Text style={{...styles.name}}>
					{pokemon.name}
					{'\n#' + pokemon.id}
				</Text>

				<View style={styles.pokeballContainer}>
					<Image
						source={require('../../assets/pokebola-blanca.png')}
						style={styles.pokeballImage}
					/>
				</View>

				<FadeInImage
					uri={pokemon.picture}
					style={styles.pokemonImage}
				/>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		height: 120,
		margin: 10,
		// borderWidth: 1,
		// borderColor: 'red',
		// backgroundColor: 'grey',
		borderRadius: 15,
		padding: 5,
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	name: {color: 'white', fontSize: 18, fontWeight: 'bold', left: 10},
	pokeballImage: {
		width: 100,
		height: 100,
	},
	pokeballContainer: {
		width: 100,
		height: 100,
		// backgroundColor: 'blue',
		position: 'absolute',
		bottom: -20,
		right: -20,
		opacity: 0.5,
	},
	pokemonImage: {
		width: 110,
		height: 110,
		position: 'absolute',
		bottom: -5,
		right: -5,
		// borderColor: 'red', // TODO <- drop this
		// borderWidth: 1, // TODO <- drop this
	},
});

export default styles;
