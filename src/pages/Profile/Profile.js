import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';

const Profile = (props) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', height: 150, paddingTop: 10, backgroundColor: 'red'}}>
                <View style={styles._profileImage.container}>
                    <Image source={require('./../../assets/images/reactnativelogo.jpg')}
                           style={styles._profileImage.image}
                    />
                    <Ionicons
                        name="md-add-circle"
                        size={30}
                        color="#3498db"
                        style={styles._profileImage.icon}
                    />
                </View>
                <View style={styles._profileInfo.container}>
                    <View style={styles._profileInfo.info}>
                        <View style={{flex: .3333}}>
                            <Text style={styles._profileInfo.infoTextNumber}>129</Text>
                            <Text style={styles._profileInfo.infoText}>پست ها</Text>
                        </View>
                        <View style={{flex: .3333}}>
                            <Text style={styles._profileInfo.infoTextNumber}>129</Text>
                            <Text style={styles._profileInfo.infoText}>پست ها</Text>
                        </View>
                        <View style={{flex: .3333}}>
                            <Text style={styles._profileInfo.infoTextNumber}>129</Text>
                            <Text style={styles._profileInfo.infoText}>پست ها</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
                            <Text>ویرایش پروفایل</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View></View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    _profileImage: {
        container: {
            flex: .3,
            alignItems: 'center',
            marginTop: 15
        },
        image: {
            width: 80,
            height: 80,
            borderRadius: 40,
            borderColor: '#888',
            borderWidth: 2,
            margin: 5
        },
        icon: {
            bottom: 35,
            left: 30,
            borderRadius: 18,
            overflow: 'hidden'
        }
    },
    _profileInfo: {
        container: {
            flex: .7,
        },
        info: {
            flexDirection: 'row',
            flex: 4,
            justifyContent: 'space-between',
            margin: 15
        },
        infoTextNumber: {
            '@media ios': {
                fontFamily: 'IRANSansMobile',
                fontWeight: 'bold'
            },
            '@media android': {
                fontFamily: 'IRANSansMobile_Bold'
            },
        },
        infoText: {
            '@media ios': {
                fontFamily: 'IRANSansMobile',
                fontWeight: '300'
            },
            '@media android': {
                fontFamily: 'IRANSansMobile_Bold'
            },
        }
    },
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