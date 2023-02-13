import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import MainScreen from './Screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import MessageScreen from './Screens/MessageScreen'
import SettingScreen from './Screens/SettingScreen'

const Tab = createBottomTabNavigator();

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={ HomeScreen }
          options={ { headerShown: false } } />
        <Stack.Screen
          name="Main"
          component={ MainScreen }
          options={ { headerShown: false } } />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={ ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Main') {
              iconName = focused ? 'ios-card' : 'ios-card-outline';
            } else if (route.name === 'Message') {
              iconName = focused ? 'ios-chatbox' : 'ios-chatbox-outline';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={ iconName } size={ size } color={ color } />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }) }
      >
        <Tab.Screen name="Home"
          component={ HomeScreen }
          options={ { headerShown: false } } />
        <Tab.Screen name="Main"
          component={ MainScreen }
          options={ { headerShown: false } } />
        <Tab.Screen name="Message"
          component={ MessageScreen }
          options={ { headerShown: false } } />
        <Tab.Screen name="Setting"
          component={ SettingScreen }
          options={ { headerShown: false } } />
      </Tab.Navigator>
    </NavigationContainer>
    // <MainScreen />

  );
}


