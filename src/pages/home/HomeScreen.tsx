import React from 'react';
import {Image} from 'react-native';
import {Title} from '../../components/components';

import {styles} from './styles.home';

export const HomeScreen = () => {
	return (
		<>
			<Image
				source={require('../../assets/pokebola.png')}
				style={styles.pokeBall}
			/>
			<Title label="Pokedex" />
		</>
	);
};
