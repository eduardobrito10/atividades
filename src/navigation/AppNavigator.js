import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/LoginScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Stack.Navigator>
      { !isLoggedIn ? (
        <Stack.Screen name="Login">
          {(props) => <LoginScreen {...props} onLogin={() => setIsLoggedIn(true)} />}
        </Stack.Screen>
      ) : (
        <>
          <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
