import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './styles';

import product from '../../data/product';
import QuantitySelector from '../../components/quantitySelector';
import Button from '../../components/button';
import ImageCarousel from '../../components/imageCarousel';

const ProductScreen = () => {

    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);
    console.log(selectedOption);


    return (
        <View style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>

            <ImageCarousel images={product.images} />

            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)} >
                {product.options.map((option) =>
                    <Picker.Item label={option} value={option} />
                )}
            </Picker>

            <Text style={styles.price}>
                from ZAR{product.price}
                {product.oldPrice && <Text style={styles.oldPrice}>ZAR{product.oldPrice}</Text>}
            </Text>

            <Text style={styles.decription}>{product.description}</Text>

            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            <Button text={'Add To Cart'} onPress={() => {
                console.warn('Add to cart');
            }}></Button>
            <Button text={'Buy Now'} onPress={() => {
                console.warn('Buy now');
            }}></Button>
        </View>
    )
};
export default ProductScreen;