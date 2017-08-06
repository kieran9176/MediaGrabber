/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import FetchButton from './fetchButton.js';
import Loading from './loading.js';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allPics: [],
            loading: true
        };
        this.fetchPics = this.fetchPics.bind(this);
    }

    fetchPics () {
        fetch('https://unsplash.it/list')
            .then(response => response.json())
            .then(jsonData => {
                this.setState({allPics: jsonData, loading: false})
            })
            .catch(error => console.log(error));
    }

    componentDidMount () {
        this.fetchPics();
    }

    render() {

        if (!this.state.loading) {
            return (
                <View style={styles.container}>
                    <FetchButton allPics={this.state.allPics}/>
                </View>
            );
        } else {
            return (
                <Loading/>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


