import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Login} from './app/views/Login';

import Orientation from 'react-native-orientation';
import AppRouter from "./app/routes/routes";


// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//     android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {

    componentWillMount() {
        Orientation.lockToLandscape();
    }



    render() {
        return (
            <AppRouter/>
        );
    }
}

