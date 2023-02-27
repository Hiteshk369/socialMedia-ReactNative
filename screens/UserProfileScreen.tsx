import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Footer from '../components/Footer';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';

const UserProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView
      className={`h-screen ${
        colorScheme === 'dark'
          ? 'bg-mainBg text-white'
          : 'bg-mainlightBg text-black'
      }`}>
      <View className="flex items-center mt-3">
        <View className=" w-40 h-40">
          <Image
            source={require('../assets/Hiteshguitar.jpg')}
            className="w-full h-full rounded-full"
          />
        </View>
        <View className="flex items-center mt-3 space-y-1">
          <Text
            className={`text-2xl capitalize ${
              colorScheme === 'dark' ? 'text-slate-200' : 'text-gray-700'
            }`}>
            Hitesh kumar
          </Text>
          <Text
            className={`text-sm  ${
              colorScheme === 'dark' ? 'text-gray-300' : 'text-gray-500'
            }`}>
            Full Stack Web & Mobile Developer
          </Text>
        </View>
      </View>
      <View className="flex space-y-2 mt-8 mb-6">
        <TouchableOpacity
          onPress={() => navigation.navigate('Gallery')}
          className={`mx-5  py-3 px-6 flex flex-row items-center justify-between ${
            colorScheme === 'dark' ? 'bg-lightBg' : 'bg-sidelightBg'
          } rounded-lg`}>
          <View className="flex flex-row items-center space-x-3 ">
            <Fontisto name={'photograph'} size={30} />
            <Text className="text-base">Posts</Text>
          </View>
          <Text className="text-base">50</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={` mx-5 py-3 px-6 flex flex-row items-center justify-between ${
            colorScheme === 'dark' ? 'bg-lightBg' : 'bg-sidelightBg'
          } rounded-lg`}>
          <View className="flex flex-row items-center space-x-3 ">
            <Feather name={'moon'} size={30} />
            <Text className="text-base">Dark Mode</Text>
          </View>
          <Text className="text-base">
            {colorScheme === 'dark' ? 'On' : 'Off'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Saved')}
          className={` mx-5 py-3 px-6 flex flex-row items-center justify-between ${
            colorScheme === 'dark' ? 'bg-lightBg' : 'bg-sidelightBg'
          } rounded-lg`}>
          <View className="flex flex-row items-center space-x-3 ">
            <IonIcons name={'bookmarks-outline'} size={30} />
            <Text className="text-base">Saved</Text>
          </View>
          <Text className="text-base">12</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={` mx-5 py-3 px-6 flex flex-row items-center justify-between ${
            colorScheme === 'dark' ? 'bg-lightBg' : 'bg-sidelightBg'
          } rounded-lg`}>
          <View className="flex flex-row items-center space-x-3 ">
            <Feather name={'edit'} size={30} />
            <Text className="text-base">Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className={` mx-5 py-3 px-6 flex flex-row items-center justify-between ${
            colorScheme === 'dark' ? 'bg-lightBg' : 'bg-sidelightBg'
          } rounded-lg`}>
          <View className="flex flex-row items-center space-x-3 ">
            <MaterialIcons name={'logout'} size={30} />
            <Text className="text-base">Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default UserProfileScreen;
