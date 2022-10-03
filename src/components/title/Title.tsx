/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Title = ({label = '[NOT_LABEL]'}) => {
	const {top} = useSafeAreaInsets();

	return (
		<Text
			style={{
				fontSize: 35,
				fontWeight: 'bold',
				margin: 15,
				height: 75,
				textAlignVertical: 'center',
				top: top + 20,

				// borderColor: 'red', // TODO <- drop this
				// borderWidth: 1, // TODO <- drop this
			}}>
			{label}
		</Text>
	);
};
