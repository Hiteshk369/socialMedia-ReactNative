import {SafeAreaView, View, Text, Image} from 'react-native';
import React from 'react';
import Footer from '../components/Footer';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const UserProfile = () => {
  return (
    <SafeAreaView className="h-screen bg-[#1b1b1b]">
      <View className="flex items-center mt-3">
        <View className=" w-40 h-40">
          <Image
            source={require('../assets/Hiteshguitar.jpg')}
            className="w-full h-full rounded-full"
          />
        </View>
        <View className="flex items-center mt-3 space-y-1">
          <Text className="text-2xl capitalize text-slate-200">
            Hitesh kumar
          </Text>
          <Text className="text-sm text-gray-300">
            Full Stack Web & Mobile Developer
          </Text>
        </View>
      </View>
      <View className="flex space-y-2 mt-8 mb-6">
        <View className="mx-5  py-3 px-6 flex flex-row items-center justify-between bg-[#28282B] rounded-lg">
          <View className="flex flex-row items-center space-x-3 ">
            <Fontisto name={'photograph'} size={30} />
            <Text className="text-base">Posts</Text>
          </View>
          <Text className="text-base">50</Text>
        </View>
        <View className="mx-5 py-3 px-6 flex flex-row items-center justify-between bg-[#28282B] rounded-lg">
          <View className="flex flex-row items-center space-x-3 ">
            <Feather name={'moon'} size={30} />
            <Text className="text-base">Dark Mode</Text>
          </View>
          <Text className="text-base">On</Text>
        </View>
        <View className="mx-5 py-3 px-6 flex flex-row items-center justify-between bg-[#28282B] rounded-lg">
          <View className="flex flex-row items-center space-x-3 ">
            <IonIcons name={'bookmarks-outline'} size={30} />
            <Text className="text-base">Saved</Text>
          </View>
          <Text className="text-base">12</Text>
        </View>
        <View className="mx-5 py-3 px-6 flex flex-row items-center justify-between bg-[#28282B] rounded-lg">
          <View className="flex flex-row items-center space-x-3 ">
            <Feather name={'edit'} size={30} />
            <Text className="text-base">Edit Profile</Text>
          </View>
        </View>
        <View className="mx-5 py-3 px-6 flex flex-row items-center justify-between bg-[#28282B] rounded-lg">
          <View className="flex flex-row items-center space-x-3 ">
            <MaterialIcons name={'logout'} size={30} />
            <Text className="text-base">Logout</Text>
          </View>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default UserProfile;
