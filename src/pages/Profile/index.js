import React from 'react';
import type {Node} from 'react';
import {
    View,
    Text
} from 'react-native';

const Profile = (props): Node => {
    return (
        <View style={{flex: 1, backgroundColor: '#c0392b', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile Page</Text>
        </View>
    );
}

export default Profile;