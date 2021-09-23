import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tab1 = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Tab1 Page</Text>
        </View>
    );
}

const Tab2 = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Tab2 Page</Text>
        </View>
    );
}

const Tab3 = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Tab3 Page</Text>
        </View>
    );
}

const Tab4 = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Tab4 Page</Text>
        </View>
    );
}

const ProfileTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={() => ({
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: 'rgba(0, 0, 0, 1)',
                    tabBarInactiveTintColor: 'rgba(0, 0, 0, .3)',
                    swipeEnabled: false,
                    animationEnabled: false
                })}
            >
                <Tab.Screen
                    name="Tab1"
                    component={Tab1}
                    options={{
                        tabBarIcon: ({color}) => <Ionicons name="md-apps" size={30} color={color}/>
                    }}
                />
                <Tab.Screen
                    name="Tab2"
                    component={Tab2}
                    options={{
                        tabBarIcon: ({color}) => <Ionicons name="md-list" size={30} color={color}/>
                    }}
                />
                <Tab.Screen
                    name="Tab3"
                    component={Tab3}
                    options={{
                        tabBarIcon: ({color}) => <Ionicons name="md-pricetags" size={30} color={color}/>
                    }}
                />
                <Tab.Screen
                    name="Tab4"
                    component={Tab4}
                    options={{
                        tabBarIcon: ({color}) => <Ionicons name="md-bookmark" size={30} color={color}/>
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default ProfileTab;