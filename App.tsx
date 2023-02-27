import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import PostGalleyScreen from './screens/PostGalleyScreen';
import PostSavedScreen from './screens/PostSavedScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import SignInScreen from './screens/SignInScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import {useColorScheme} from 'react-native';

export type RootStackParamList = {
  Landing: undefined;
  Registration: undefined;
  SignIn: undefined;
  Home: undefined;
  Chats: undefined;
  Profile: undefined;
  Gallery: undefined;
  Saved: undefined;
  CreatePost: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Registration"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignIn"
          component={SignInScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Chats"
          component={ChatScreen}
          options={{
            headerStyle: {
              backgroundColor: colorScheme === 'dark' ? '#1b1b1b' : '#ffffff',
            },
            headerTintColor: colorScheme === 'dark' ? '#ffffff' : '#1b1b1b',
          }}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CreatePost"
          component={CreatePostScreen}
        />
        <Stack.Screen
          name="Profile"
          component={UserProfileScreen}
          options={{
            headerStyle: {
              backgroundColor: colorScheme === 'dark' ? '#1b1b1b' : '#ffffff',
            },
            headerTintColor: colorScheme === 'dark' ? '#ffffff' : '#1b1b1b',
          }}
        />
        <Stack.Screen
          name="Gallery"
          component={PostGalleyScreen}
          options={{
            headerStyle: {
              backgroundColor: colorScheme === 'dark' ? '#1b1b1b' : '#ffffff',
            },
            headerTintColor: colorScheme === 'dark' ? '#ffffff' : '#1b1b1b',
          }}
        />
        <Stack.Screen
          name="Saved"
          component={PostSavedScreen}
          options={{
            headerStyle: {
              backgroundColor: colorScheme === 'dark' ? '#1b1b1b' : '#ffffff',
            },
            headerTintColor: colorScheme === 'dark' ? '#ffffff' : '#1b1b1b',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
