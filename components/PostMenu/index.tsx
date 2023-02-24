import React from 'react';
import {ScrollView} from 'react-native';
import Post from '../Post';

const PostMenu = () => {
  return (
    <ScrollView
      className="px-4 bg-[#1b1b1b]"
      showsVerticalScrollIndicator={false}>
      {Array.from({length: 6}).map((_, i) => {
        return <Post key={i} />;
      })}
    </ScrollView>
  );
};

export default PostMenu;
