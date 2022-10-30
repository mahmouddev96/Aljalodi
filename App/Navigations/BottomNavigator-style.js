import { StyleSheet } from 'react-native';
import { colors } from '../utils';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#F5F7FE",

    },
    btnCircle: {
        width: 80,
        height: 60,
        // borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 6,
    }, btnCircleShowLinks: {
        width: 60,
        height: 60,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.light_grey,
        bottom: 8
    },
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        bottom: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imgCircle: {
        width: 40,
        height: 40,
    },
    img: {
        width: 40,
        height: 40,
    }
});