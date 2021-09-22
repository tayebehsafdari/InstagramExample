import React from 'react';
import type {Node} from 'react';
import {Image, I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './../assets/css';

import Camera from "../pages/Camera";
import Follow from "../pages/Follow";
import HomeUser from "../pages/HomeUser";
import Profile from "../pages/Profile";
import Search from "../pages/Search";

I18nManager.forceRTL(true);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App: ()  =>Node = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={}
            >
                <Tab.Screen
                    name="Camera"
                    component={Camera}
                    options={{
                        tabBarIcon: <Ionicons name="" size="" color=""/>
                    }}
                />
                <Tab.Screen
                    name="Follow"
                    component={Follow}
                    options={{
                        tabBarIcon: <Ionicons name="" size="" color=""/>
                    }}
                />
                <Tab.Screen
                    name="HomeUser"
                    component={HomeUser}
                    options={{
                        tabBarIcon: <Ionicons name="" size="" color=""/>
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
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
                        tabBarIcon: <Ionicons name="" size="" color=""/>
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;