import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';

const Profile = (props) => {
    return (
        <View style={{flex: 1, backgroundColor: '#c0392b', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile Page</Text>
        </View>
    );
}

Profile.navigationOptions = ({navigation}) => ({
    headerLeft: <Text style={styles.profileName}>طیبه صفدری دوست</Text>,
    headerRight: <View style={styles.headerRightStyle}>
        <Ionicons name="md-filing" size={30} color="#333" onPress={() => navigation.navigate('Archive')}/>
        <Ionicons name="md-person-add" size={30} color="#333"/>
        <Ionicons name="md-more" size={30} color="#333"/>
    </View>
});

const styles = EStyleSheet.create({
    profileName: {
        '@media ios': {
            fontFamily: 'IRANSansMobile',
            fontWeight: 'bold'
        },
        '@media android': {
            fontFamily: 'IRANSansMobile_Bold'
        },
        fontSize: 16,
        marginLeft: 10,
        color: '$colorDark'
    },
    headerRightStyle: {
        flexDirection: 'row',
        marginRight: 10,
        width: 85,
        justifyContent: 'space-between'
    }
});

export default Profile;