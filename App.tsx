import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import UserProfile from './screens/UserProfile';

export type RootStackParamList = {
  Home: undefined;
  Chats: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Chats"
          component={ChatScreen}
          options={{
            headerStyle: {backgroundColor: '#1b1b1b'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={UserProfile}
          options={{
            headerStyle: {backgroundColor: '#1b1b1b'},
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
