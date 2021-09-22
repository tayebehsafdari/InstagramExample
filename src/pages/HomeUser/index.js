import React from 'react';
import type {Node} from 'react';
import {
    View,
    Text
} from 'react-native';

const HomeUser = (props): Node => {
    return (
        <View style={{flex: 1, backgroundColor: '#16a085', justifyContent: 'center', alignItems: 'center'}}>
            <Text>HomeUser Page</Text>
        </View>
    );
}

export default HomeUser;