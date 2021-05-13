import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
        padding: 10
    },
    root: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: 'white',
        width: '100%',
        margin: 5
    },
    image: {
        height: 150,
        flex: 2,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    star: {
        margin: 2
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    }
});
export default styles;