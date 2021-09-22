import React from 'react';
import type {Node} from 'react';
import {
    View,
    Text
} from 'react-native';

const Settings = (props): Node => {
    return (
        <View style={{flex: 1, backgroundColor: '#c0392b', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings Page</Text>
        </View>
    );
}

export default Settings;