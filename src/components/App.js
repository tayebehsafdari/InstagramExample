import React from 'react';
import type {Node} from 'react';
import {Text, I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "../pages/Home";
import Article from "../pages/Article";
import OriginalStyle from './../assets/css';

I18nManager.forceRTL(true);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App: ()  =>Node = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    // options:{{title: 'مجله آموزشی طیبه صفدری دوست'}}
                    options:{{
                    headerTitle: <Text style={OriginalStyle.headerTitleStyle}>مجله آموزشی طیبه صفدری دوست</Text>
                }}
                />
                <Stack.Screen
                    name="Article"
                    component={Article}
                />
            </Stack.Navigator>
            <Tab.Navigator>
                <Tab.Screen name={} component={}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;