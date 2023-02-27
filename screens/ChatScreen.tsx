import React from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ChatBox from '../components/ChatBox';
import Footer from '../components/Footer';
import {useColorScheme} from 'react-native';

const ChatScreen = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      className={`h-screen ${
        colorScheme === 'dark' ? 'bg-mainBg' : 'bg-mainlightBg'
      }`}>
      <View className="mx-5 mt-2 mb-2">
        <View
          className={`flex flex-row items-center  px-4  space-x-3 rounded-[50px] ${
            colorScheme === 'dark'
              ? 'bg-lightBg text-slate-300'
              : ' bg-sidelightBg text-gray-900'
          }`}>
          <Feather name="search" size={15} />
          <TextInput
            className={`flex-1 ${
              colorScheme === 'dark' ? 'text-slate-400' : 'text-gray-700'
            }`}
            placeholder="Search"
            style={{height: 40}}
          />
        </View>
        <ScrollView
          className="my-2 h-[72vh]"
          showsVerticalScrollIndicator={false}>
          {Array.from({length: 12}).map((_, i) => {
            return (
              <TouchableOpacity key={i}>
                <ChatBox />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default ChatScreen;
