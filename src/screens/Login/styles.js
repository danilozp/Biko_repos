import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    buttonRight: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    buttonLeft: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    },
    keyboard: {
        flexGrow: 0.5, 
        width: '100%', 
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    image: {
        width: 200,
        height: 200, 
        borderRadius: 100
    }
});

export default styles