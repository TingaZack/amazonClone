import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const QuantitySelector = ({quantity, setQuantity}) => {

    const onMinus = () => {
        setQuantity(Math.max(0, quantity - 1));
    };
    const onPlus = () => {
        setQuantity(quantity + 1);
    };

    return (
        <View style={styles.root}>
            <Pressable style={styles.button} onPress={onMinus}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable style={styles.button} onPress={onPlus}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#e3e3e3',
        borderWidth: 1,
        width: 100,
        justifyContent: 'space-between',
    },
    button: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1d1d1'
        // borderColor: '#d1d1d1'
    },
    buttonText: {
        fontSize: 18,
    },
    quantity: {
        color: '#007eb9'
    }
})

export default QuantitySelector;