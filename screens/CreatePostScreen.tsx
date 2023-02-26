import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CreatePostScreen = () => {
  return (
    <SafeAreaView>
      <View className="bg-mainBg h-screen">
        <View className="flex flex-row justify-between p-6">
          <Text className="text-xl" style={{fontFamily: 'Poppins-Regular'}}>
            Create Post
          </Text>
          <TouchableOpacity>
            <MaterialIcons name={'delete'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatePostScreen;
