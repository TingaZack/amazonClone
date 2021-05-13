import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

interface ProductItemProps {
    item: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
        oldPrice?: number;
    }
}
const ProductItem = ({ item }: ProductItemProps) => {

    return (
        <View style={styles.root} key={item.id}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                <View style={styles.ratingsContainer}>
                    {[0, 0, 0, 0, 0].map((el, i) => {
                        return <FontAwesome
                        key={Math.random()}
                            style={styles.star}
                            name={ i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                            size={18} color={'#e47911'} />
                    })}

                    {/* <FontAwesome style={styles.star} name='star' size={18} color={'#e47911'} />
                    <FontAwesome style={styles.star} name='star' size={18} color={'#e47911'} />
                    <FontAwesome style={styles.star} name='star-half-empty' size={18} color={'#e47911'} />
                    <FontAwesome style={styles.star} name='star-o' size={18} color={'#e47911'} /> */}
                    <Text>{item.ratings}</Text>
                </View>
                <Text style={styles.price}>
                    from ZAR{item.price}
                    {item.oldPrice && <Text style={styles.oldPrice}>ZAR{item.oldPrice}</Text>}
                </Text>
            </View>
        </View>
    )
};

export default ProductItem;