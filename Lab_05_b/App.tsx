import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { RootStackParamList } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import BikeListScreen from './components/BikeListScreen';
import BikeDetailScreen from './components/BikeDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="BikeList" component={BikeListScreen} />
        <Stack.Screen name="BikeDetail" component={BikeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
