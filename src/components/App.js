import React from 'react';
import {Image, I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
    $colorDark: '#333'
});

import styles from './../assets/css';

import Camera from "../pages/Camera";
import Follow from "../pages/Follow";
import HomeUser from "../pages/HomeUser";
import ProfileStack from "../pages/Profile";
import Search from "../pages/Search";


I18nManager.forceRTL(true);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={() => ({
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: 'rgba(0, 0, 0, 1)',
                    tabBarInactiveTintColor: 'rgba(0, 0, 0, .3)'
                })}
            >
                <Tab.Screen
                    name="Camera"
                    component={Camera}
                    options={{
                        tabBarIcon: ({color}) => <Ionicons name="md-add-circle" size={30} color={color}/>
                    }}
                />
                <Tab.Screen
                    name="Follow"
                    component={Follow}
                    options={{
                        tabBarIcon: ({color}) => <Ionicons name="md-heart" size={30} color={color}/>
                    }}
                />
                <Tab.Screen
                    name="HomeUser"
                    component={HomeUser}
                    options={{
                        tabBarIcon: ({color}) => <Ionicons name="md-home" size={30} color={color}/>
                    }}
                />
                <Tab.Screen
                    name="ProfileStack"
                    component={ProfileStack}
                    options={{
                        tabBarIcon: <Image
                            source={require('./../assets/images/reactnative.png')}
                            style={styles.tabNavigatorProfileIcon}
                        />
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarIcon: ({color}) => <Ionicons name="md-search" size={30} color={color}/>
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;