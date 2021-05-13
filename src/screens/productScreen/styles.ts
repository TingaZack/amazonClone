import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'white',
    },
    title: {
        // color: darkgrey
    },
    oldPrice: {
        fontSize: 18,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    decription: {
        marginVertical: 10,
        lineHeight: 20,
    },
    image: {
        width: '100%',
        height: 300,
    }
});

export default styles;