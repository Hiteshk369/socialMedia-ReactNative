import React from 'react';
import {ScrollView} from 'react-native';
import Post from '../Post';
import {useColorScheme} from 'react-native';

const PostMenu = () => {
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      className={`px-4 ${
        colorScheme === 'dark' ? 'bg-mainBg' : 'bg-mainlightBg'
      }`}
      showsVerticalScrollIndicator={false}>
      {Array.from({length: 6}).map((_, i) => {
        return <Post key={i} />;
      })}
    </ScrollView>
  );
};

export default PostMenu;
