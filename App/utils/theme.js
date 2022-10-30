import { DefaultTheme } from 'react-native-paper';
import { fonts } from '.';
import { colors } from '.';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import merge from 'deepmerge';
import { Platform } from 'react-native';

export const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        ...colors
    },
    fonts: { ...fonts },
    shadow: {
        shadowColor: "#00000099",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: Platform.OS === 'ios' ? 10.65 : 6,
        elevation: Platform.OS === 'ios' ? 8 : 5,
    }
}

export default merge(NavigationDefaultTheme, theme);