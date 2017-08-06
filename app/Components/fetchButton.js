/**
 * Created by kieranderfus on 8/3/17.
 */

import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, Text, Dimensions } from 'react-native';
import Loading from './loading';
import Swiper from 'react-native-swiper';
import NetworkImage from 'react-native-image-progress';
import ProgressCircle from 'react-native-progress/Circle';

// import RenderPics from './renderPics';
const RandManager = require('./Random.js');
const NUM_PICS = 10;

const { width, height } = Dimensions.get('window');

export default class FetchButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedPics: [],
            loading: true
        };

        this._onPressButton = this._onPressButton.bind(this);
    }

   _onPressButton (pics, context) {
            const indices = RandManager.uniqueRandomNumbers(NUM_PICS, 0, pics.length);
            return indices.map(index => { return pics[index]; });
    };

    render() {

        if (this.props.allPics.length && !this.state.selectedPics.length) {
            return (
                    <View style={styles.container}>
                        <View style={styles.buttonContainer}>
                            <Button
                                onPress={() => this.setState({
                                    selectedPics: this._onPressButton(this.props.allPics, 'pic'),
                                    loading: false
                                })}
                                title="Fetch Pictures"
                            />
                        </View>
                    </View>
            );
        } else if (this.state.selectedPics.length && !this.state.loading) {
            return (
            <Swiper dot={<View style={styles.swiperDot} />}
                    activeDot={<View style={styles.swiperActiveDot} />}
                    loop={false}>
                    {/*onMomentumScrollEnd={this.onMomentumScrollEnd}>*/}

                {this.state.selectedPics.map((wallpaper, index) => {
                    const uri = `https://unsplash.it/${wallpaper.width}/${wallpaper.height}?image=${wallpaper.id}`;
                    console.log(uri);
                    return(
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
        } else {
            return (
                <View>
                    <Text>
                        Good news!
                    </Text>
                </View> )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 0
    },
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