import React from 'react';
import type {Node} from 'react';
import {
    View,
    Text
} from 'react-native';

const Search = (props): Node => {
    return (
        <View style={{flex: 1, backgroundColor: '#16a085', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Search Page</Text>
        </View>
    );
}

export default Search;