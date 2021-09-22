import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from "./Profile";
import Settings from "./Settings";

const Stack = createNativeStackNavigator();
const ProfileStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{}}
            >
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    // options:{{title: 'مجله آموزشی طیبه صفدری دوست'}}
                    options={{
                        headerTitle: <Text style={OriginalStyle.headerTitleStyle}>طیبه صفدری دوست</Text>
                    }}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ProfileStack;