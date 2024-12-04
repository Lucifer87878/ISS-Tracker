import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import InfoScreen from '../screens/InfoScreen';
import ApodScreen from '../screens/ApodScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent', 
        },
        headerTransparent: true, 
        headerTitleStyle: {
          color: '#C0392B',
        },
        headerTintColor: '#C0392B', 
        headerTitleAlign: 'center', 
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Hem', 
        }}
      />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
      <Stack.Screen name="Apod" component={ApodScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
