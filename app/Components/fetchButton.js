/**
 * Created by kieranderfus on 8/3/17.
 */

import React, { Component } from 'react';
import {Button, StyleSheet, View } from 'react-native';
import PictureViewer from './pictureViewer';

const RandManager = require('./Random.js');
const NUM_PICS = 10;

export default class FetchButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedPics: [],
            loading: true
        };

        this._onPressButton = this._onPressButton.bind(this);
    }

    _onPressButton(pics) {
        const indices = RandManager.uniqueRandomNumbers(NUM_PICS, 0, pics.length);
        return indices.map(index => {
            return pics[index];
        });
    };

    render() {

        if (this.props.allPics.length && !this.state.selectedPics.length) {
            return (
                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => this.setState({
                                selectedPics: this._onPressButton(this.props.allPics),
                                loading: false
                            })}
                            title="Fetch Pictures"
                        />
                    </View>
                </View>
            );
        } else if (this.state.selectedPics.length && !this.state.loading) {
            return (
                <PictureViewer selectedPics={this.state.selectedPics}/>
            )
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
    }
});