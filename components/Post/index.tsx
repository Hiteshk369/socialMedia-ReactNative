import React from 'react';
import {View, Text, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const Post = () => {
  return (
    <View className="bg-[#28282B] rounded-lg h-[410px] w-full p-4 my-2 shadow-md">
      <View className="flex flex-row after:pb-4 after:border-b after:border-slate-600">
        <View className="flex flex-row items-center space-x-4 ">
          <Image
            source={require('../../assets/Hiteshguitar.jpg')}
            className="w-10 h-10 rounded-full"
          />
          <Text className="capitalize text-lg font-semibold">Hitesh Kumar</Text>
        </View>
      </View>
      <View className="mt-4">
        <View>
          <Text className="text-sm">
            My last day for this year holiday! So excited to share my memories
            with you guys.
          </Text>
        </View>
        <View className="my-4 h-52 w-[290px]">
          <Image
            source={require('../../assets/Hiteshguitar.jpg')}
            className="rounded-md w-full h-full"
            resizeMode="contain"
          />
        </View>
      </View>
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row space-x-5 items-center">
          <View className="flex flex-row space-x-2 items-center">
            <Entypo name={'heart-outlined'} size={28} />
            <Text>1832</Text>
          </View>
          <View className="flex flex-row items-center space-x-2">
            <Feather name={'message-circle'} size={25} />
            <Text>72</Text>
          </View>
        </View>
        <View className="mr-3">
          <Text>2 Hours ago</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
