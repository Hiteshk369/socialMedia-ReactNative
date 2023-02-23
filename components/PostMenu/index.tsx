import React from 'react';
import {ScrollView} from 'react-native';
import Post from '../Post';

const PostMenu = () => {
  return (
    <ScrollView className="px-4 bg-[#1B1212]">
      <Post />
      <Post />
      <Post />
      <Post />
    </ScrollView>
  );
};

export default PostMenu;
