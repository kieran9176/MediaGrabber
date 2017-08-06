/**
 * Created by kieranderfus on 8/4/17.
 */
import React from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default function Loading () {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Loading ...
            </Text>
        </View>
    )
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
