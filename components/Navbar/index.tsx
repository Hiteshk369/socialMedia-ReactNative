import {View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
  return (
    <SafeAreaView>
      <View className="w-screen bg-[#1B1212] h-20 px-10 flex flex-row justify-between items-center">
        <View>
          <Image source={Logo} className="w-20 h-5" />
        </View>
        <View className="flex flex-row items-center space-x-4">
          <Feather color={'#F5F5DC'} name={'search'} size={25} />
          <View className="relative">
            <Feather color={'#F5F5DC'} name={'bell'} size={25} />
            <View className="absolute w-2 h-2 bg-[#FFD700] rounded-full right-1" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
