import React, { Component } from 'react';
import Index from '../MediaGrabber/app/Components/index';
import { AppRegistry } from 'react-native';

export default class MediaGrabber extends Component {
    render() {
        return (
            <Index />
        );
    }
}

AppRegistry.registerComponent('MediaGrabber', () => MediaGrabber);
