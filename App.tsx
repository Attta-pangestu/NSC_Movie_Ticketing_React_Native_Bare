import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import TabNavigator from './src/navigator/TabNavigator';
import ProfileScreen from './src/screens/ProfileScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';
import BookingSeatScreen from './src/screens/BookingSeatScreen';


const Stack = createNativeStackNavigator();

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ animation: 'slide_from_left' }}
          />
          <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ animation: 'default' }}
        />
         <Stack.Screen
          name="MovieDetails"
          component={MovieDetailScreen}
          options={{ animation: 'slide_from_right' }}
        />
          <Stack.Screen
          name="SeatBooking"
          component={BookingSeatScreen}
          options={{ animation: 'slide_from_bottom' }}
        />
          <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ animation: 'slide_from_right' }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App