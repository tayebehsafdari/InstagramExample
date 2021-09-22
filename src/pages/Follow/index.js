import React from 'react';
import type {Node} from 'react';
import {
    View,
    Text
} from 'react-native';

const Follow = (props): Node => {
    return (
        <View style={{flex: 1, backgroundColor: '#16a085', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Follow Page</Text>
        </View>
    );
}

export default Follow;