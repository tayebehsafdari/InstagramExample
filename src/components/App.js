import React from 'react';
import type {Node} from 'react';
import {Text, I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import OriginalStyle from './../assets/css';

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
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name === 'Camera') {
                            iconName = focused ? '' : ''
                        } else if (route.name === 'Follow') {
                            iconName = focused ? '' : ''
                        } else if (route.name === 'HomeUser') {
                            iconName = focused ? '' : ''
                        } else if (route.name === 'Profile') {
                            iconName = focused ? '' : ''
                        } else if (route.name === 'Search') {
                            iconName = focused ? '' : ''
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: '',
                    tabBarInactiveTintColor: ''
                })}
            >
                <Tab.Screen name="Camera" component={Camera}/>
                <Tab.Screen name="Follow" component={Follow}/>
                <Tab.Screen name="HomeUser" component={HomeUser}/>
                <Tab.Screen name="Profile" component={Profile}/>
                <Tab.Screen name="Search" component={Search}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;