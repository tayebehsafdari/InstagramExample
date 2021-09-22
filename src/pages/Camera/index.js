import React from 'react';
import type {Node} from 'react';
import {
    View,
    Text
} from 'react-native';

const Camera = (props): Node => {
    return (
        <View style={{flex: 1, backgroundColor: '#16a085', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Camera Page</Text>
        </View>
    );
}

export default Camera;