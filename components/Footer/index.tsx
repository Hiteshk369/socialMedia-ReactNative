import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import OctIcons from 'react-native-vector-icons/Octicons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../../App';
import {useColorScheme} from 'react-native';

const Footer = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const colorScheme = useColorScheme();

  return (
    <View
      className={`h-20  before:border-t  ${
        colorScheme === 'dark'
          ? 'bg-mainBg before:border-lightBg'
          : 'bg-mainlightBg before:border-sidelightBg'
      }`}>
      <View className="py-5 px-6 flex flex-row justify-evenly items-center">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View>
            <OctIcons name="home" size={25} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
          <AntIcons name="pluscircle" size={38} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
          <View>
            <IonIcons name="chatbubble-ellipses-outline" size={25} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
