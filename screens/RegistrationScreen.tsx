import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';

const RegistrationScreen = () => {
  return (
    <SafeAreaView>
      <View className="bg-mainBg h-screen">
        <View className="p-5 pt-6 h-[25%] justify-center">
          <Text className="text-3xl" style={{fontFamily: 'Poppins-SemiBold'}}>
            Best Social App To
          </Text>
          <Text className="text-3xl" style={{fontFamily: 'Poppins-SemiBold'}}>
            Make New Friends
          </Text>
        </View>
        <View className="items-center mb-5">
          <Text className="text-base" style={{fontFamily: 'Poppins-Regular'}}>
            Register To Continue
          </Text>
        </View>
        <View className="h-[35%] w-full items-center pt-4 space-y-3">
          <TextInput
            placeholder="Email Address"
            className="bg-lightBg w-[90%] rounded-lg px-2 py-3"
            style={{fontFamily: 'Poppins-Regular'}}
          />
          <TextInput
            placeholder="Password"
            className="bg-lightBg w-[90%] rounded-lg px-2 py-3"
            style={{fontFamily: 'Poppins-Regular'}}
          />
          <TouchableOpacity className="bg-slate-300 w-[90%] items-center px-2 py-4 rounded-lg">
            <Text
              className="text-lightBg text-base"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="pt-1">
            <Text style={{fontFamily: 'Poppins-Regular'}}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>
        <View className="h-[10%] justify-center flex flex-row items-center">
          <View className="border-b border-gray-400 w-[25%]" />
          <Text
            className="px-3 text-gray-400"
            style={{fontFamily: 'Poppins-Light'}}>
            Or sign in with
          </Text>
          <View className="border-b border-gray-400 w-[25%]" />
        </View>
        <View className="h-full w-full items-center">
          <TouchableOpacity className="bg-lightBg w-[90%] items-center rounded-lg px-2 py-4">
            <View className="flex flex-row items-center space-x-6">
              <Fontisto name={'google'} size={25} />
              <Text
                className="text-base"
                style={{fontFamily: 'Poppins-Regular'}}>
                Sign in with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
