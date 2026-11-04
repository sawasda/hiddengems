import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import AddScreen from './screens/AddScreen';
import SettingScreen from './screens/SettingScreen';

import Ionicons from '@expo/vector-icons/Ionicons';

import { RootStackParamList, RootTabParamList } from './navigationTypes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => <Ionicons name={'home'} size={28} color={color} />
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ size, color }) => <Ionicons name={'star'} size={28} color={color} />
        }}
      />
      <Tab.Screen
        name="Add a Gem"
        component={AddScreen}
        options={{
          tabBarLabel: 'Add a Gem',
          tabBarIcon: ({ size, color }) => <Ionicons name={'add-circle'} size={28} color={color} />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ size, color }) => <Ionicons name={'person'} size={28} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />

      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Sign In"
          component={SignInScreen}
          options={{
            headerBackButtonDisplayMode: 'minimal'
          }}
        />

        <Stack.Screen
          name="Sign Up"
          component={SignUpScreen}
          options={{
            headerBackButtonDisplayMode: 'minimal'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}