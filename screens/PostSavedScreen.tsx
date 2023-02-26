import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Post from '../components/Post';
import Footer from '../components/Footer';

const PostSavedScreen = () => {
  return (
    <SafeAreaView className="bg-[#1b1b1b] h-screen">
      <View className="h-[82%]">
        <ScrollView className="mx-5 my-2" showsVerticalScrollIndicator={false}>
          {Array.from({length: 5}).map((_, i) => {
            return <Post key={i} />;
          })}
        </ScrollView>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default PostSavedScreen;
