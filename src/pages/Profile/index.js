import React from 'react';
import type {Node} from 'react';
import {
    View,
    Text
} from 'react-native';

const Profile = (props): Node => {
    return (
        <View style={{flex: 1, backgroundColor: '#16a085', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile Page</Text>
        </View>
    );
}

export default Profile;