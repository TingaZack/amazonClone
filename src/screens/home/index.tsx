import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductItem from '../../components/productItem';

import products from '../../data/products';

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <FlatList data={products} renderItem={({ item }) => <ProductItem item={item} />} />

            {/* <ProductItem />
           <ProductItem />
           <ProductItem /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10
    },
});
export default HomeScreen;