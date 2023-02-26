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

const ChatScreen = () => {
  return (
    <SafeAreaView className="bg-[#1b1b1b] h-screen">
      <View className="mx-5 mt-2 mb-2">
        <View className="flex flex-row items-center text-slate-300 px-4 bg-lightBg space-x-3 rounded-[50px]">
          <Feather name="search" color={'#94a3b8'} size={15} />
          <TextInput
            className="flex-1 text-slate-400"
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
