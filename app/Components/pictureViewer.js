import React from 'react';
import { Button, StyleSheet, View, Text, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import NetworkImage from 'react-native-image-progress';
import ProgressCircle from 'react-native-progress/Circle';

const { width, height } = Dimensions.get('window');

export default function PictureViewer (props) {
    return (
        <Swiper dot={<View style={styles.swiperDot} />}
                activeDot={<View style={styles.swiperActiveDot} />}
                loop={false}
                onMomentumScrollEnd={this.onMomentumScrollEnd}>

            {props.selectedPics.map((wallpaper, index) => {
                const uri = `https://unsplash.it/${wallpaper.width}/${wallpaper.height}?image=${wallpaper.id}`;
                return (
                    <Text key={index}>
                        <NetworkImage
                            source={{ uri: uri }}
                            style={styles.wallpaperImage}
                            indicator={ProgressCircle}
                            indicatorProps={{
                                color: 'rgba(255, 255, 255)',
                                size: 60,
                                thickness: 7,
                            }}
                        >
                            <Text style={styles.label}>Photo by</Text>
                            <Text style={styles.labelAuthorName}>{wallpaper.author}</Text>
                        </NetworkImage>
                    </Text>
                );
            })}
        </Swiper>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    swiperDot: {
        backgroundColor:'#008b8b',
        width: 8,
        height: 8,
        borderRadius: 10,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    swiperActiveDot: {
        backgroundColor: '#008080',
        width: 13,
        height: 13,
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7,
    },
    wallpaperImage: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: '#000000',
    },
    label: {
        position: 'absolute',
        color: '#ffffff',
        fontSize: 13,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 2,
        paddingLeft: 5,
        top: 20,
        left: 20,
        width: width/2
    },
    labelAuthorName: {
        position: 'absolute',
        color: '#ffffff',
        fontSize: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 2,
        paddingLeft: 5,
        top: 41,
        left: 20,
        fontWeight: 'bold',
        width: width/2
    }
});
