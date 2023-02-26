import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../../App';

const Navbar = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <View className="w-screen bg-[#1b1b1b] h-20 px-8 flex flex-row justify-between items-center">
        <View>
          <Image
            source={require('../../assets/Logo.png')}
            className="w-20 h-5"
          />
        </View>
        <View className="flex flex-row items-center space-x-4">
          <Feather color={'#F5F5DC'} name={'search'} size={25} />
          <TouchableOpacity className="relative">
            <Feather color={'#F5F5DC'} name={'bell'} size={25} />
            <View className="absolute w-2 h-2 bg-[#e5ab50] rounded-full right-1" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../../assets/Hiteshguitar.jpg')}
              className="w-10 h-10 rounded-full"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Navbar;
