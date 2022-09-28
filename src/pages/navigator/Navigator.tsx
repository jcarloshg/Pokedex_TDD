import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../home/HomeScreen';
import {PokemonScreen} from '../pokemon/pokemon';
const Stack = createStackNavigator();

export const Navigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="HomeScreen"
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="PokemonScreen" component={PokemonScreen} />
		</Stack.Navigator>
	);
};
