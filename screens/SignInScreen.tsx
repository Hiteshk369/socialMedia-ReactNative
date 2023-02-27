import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useColorScheme} from 'react-native';

const SignInScreen = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView
      className={`${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>
      <View
        className={`h-screen relative ${
          colorScheme === 'dark' ? 'bg-lightBg' : 'bg-sidelightBg'
        }`}>
        <View className="h-[15%] flex flex-row px-6 items-center justify-between">
          <View>
            <Text
              className={`text-sm font-light ${
                colorScheme === 'dark' ? 'text-white' : 'text-black'
              }`}
              style={{fontFamily: 'Poppins-Light'}}>
              Don't have an account?
            </Text>
          </View>
          <TouchableOpacity
            className={`p-2 rounded-lg ${
              colorScheme === 'dark' ? 'bg-slate-300' : 'bg-lightBg'
            }`}>
            <Text
              className={`text-sm ${
                colorScheme === 'dark' ? 'text-lightBg' : 'text-sidelightBg'
              }`}
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
        <View className="h-[10%] items-center pt-1 ">
          <Text className="text-3xl" style={{fontFamily: 'Poppins-SemiBold'}}>
            socialMedia
          </Text>
        </View>
        <View
          className={`absolute ${
            colorScheme === 'dark' ? 'bg-mainBg' : 'bg-mainlightBg'
          } bottom-0 h-[75%] w-full rounded-t-3xl items-center space-y-4`}>
          <View className="h-[20%] py-8 space-y-1 items-center">
            <Text className="text-3xl" style={{fontFamily: 'Poppins-Regular'}}>
              Welcome Back
            </Text>
            <Text className="text-sm" style={{fontFamily: 'Poppins-Light'}}>
              Enter your details below
            </Text>
          </View>
          <View className="h-[45%] w-full items-center pt-4 space-y-3">
            <TextInput
              placeholder="Email Address"
              className={`${
                colorScheme === 'dark' ? 'bg-lightBg' : 'bg-sidelightBg'
              } w-[90%] rounded-lg px-2 py-3`}
              style={{fontFamily: 'Poppins-Regular'}}
            />
            <TextInput
              placeholder="Password"
              className={`${
                colorScheme === 'dark' ? 'bg-lightBg' : 'bg-sidelightBg'
              } w-[90%] rounded-lg px-2 py-3`}
              style={{fontFamily: 'Poppins-Regular'}}
            />
            <TouchableOpacity
              className={`${
                colorScheme === 'dark' ? 'bg-slate-300' : 'bg-lightBg'
              } w-[90%] items-center px-2 py-4 rounded-lg`}>
              <Text
                className={`text-base ${
                  colorScheme === 'dark' ? 'text-lightBg' : 'text-sidelightBg'
                }`}
                style={{fontFamily: 'Poppins-SemiBold'}}>
                Sign in
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="pt-1">
              <Text style={{fontFamily: 'Poppins-Regular'}}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
          <View className="h-[10%] flex flex-row items-center">
            <View className="border-b border-gray-400 w-[25%]" />
            <Text
              className="px-3 text-gray-400"
              style={{fontFamily: 'Poppins-Light'}}>
              Or sign in with
            </Text>
            <View className="border-b border-gray-400 w-[25%]" />
          </View>
          <View className="h-full w-full items-center">
            <TouchableOpacity
              className={` ${
                colorScheme === 'dark' ? 'bg-lightBg' : 'bg-sidelightBg'
              } w-[90%] items-center rounded-lg px-2 py-4`}>
              <View className="flex flex-row items-center space-x-6">
                <Fontisto name={'google'} size={25} />
                <Text
                  className={`text-base  ${
                    colorScheme === 'dark' ? 'text-sidelightBg' : 'text-lightBg'
                  }`}
                  style={{fontFamily: 'Poppins-Regular'}}>
                  Sign in with Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
