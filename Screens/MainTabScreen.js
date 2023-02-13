import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainScreen from './MainScreen'
import HomeScreen from './HomeScreen'

const HomeStack = createNativeStackNavigator();
const Settingstack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


const MainTabScreen = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={ HomeScreen } />
                <Tab.Screen name="Settings" component={ SettingsScreen } />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainTabScreen