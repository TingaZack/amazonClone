import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

const ImageCarousel = ({ images }: { images: [string] }) => {

    const width = useWindowDimensions().width;
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <View style={styles.root}>
            <FlatList
                data={images}
                showsHorizontalScrollIndicator={false}
                snapToInterval={width - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                renderItem={({ item }) =>
                    <Image
                        style={[styles.image, { width: width - 40 }]}
                        source={{ uri: item }} />}
                horizontal
                viewabilityConfig={{
                    viewAreaCoveragePercentageThreshold: 50,
                }}
                // onViewableItemsChanged={({viewableItems}) => {
                //     console.log(viewableItems);
                    
                // }}
            />

            <View style={styles.dots} >
                {images.map((image, index) => {
                    console.log('index: ' + index + '-', image);
                    return <View style={[
                        styles.dot,
                        { backgroundColor: index == activeIndex ? '#c9c9c9' : '#ededed' },
                    ]} />
                })}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {

    },
    image: {
        height: 250,
        resizeMode: 'contain',
        margin: 10,
    },
    dots: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#c9c9c9',
        borderColor: '#c9c9c9',
        marginHorizontal: 5
        // elevation: 2,
        // zIndex: 100
    }
})

export default ImageCarousel;