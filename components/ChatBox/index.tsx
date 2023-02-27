import React from 'react';
import {View, Text, Image} from 'react-native';
import {useColorScheme} from 'react-native';

const ChatBox = () => {
  const colorScheme = useColorScheme();
  return (
    <View className="my-6 h-6">
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row space-x-5">
          <Image
            source={require('../../assets/Hiteshguitar.jpg')}
            className="h-12 w-12 rounded-full"
          />
          <View className="space-y-1">
            <Text
              className={`capitaize text-base ${
                colorScheme === 'dark' ? 'text-slate-200' : 'text-gray-700'
              }`}>
              Hitesh kumar
            </Text>
            <Text numberOfLines={1} className="text-xs w-[55vw]">
              I'm at the office right now.I'm at the office right now.I'm at the
              office right now.
            </Text>
          </View>
        </View>
        <View className="mr-3 h-5 w-5 bg-[#e5ab50] rounded-full flex items-center">
          <Text className="text-sm font-semibold text-white">2</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatBox;
