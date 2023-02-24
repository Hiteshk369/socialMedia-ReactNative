import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import OctIcons from 'react-native-vector-icons/Octicons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../../App';

const Footer = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="h-20 bg-[#1b1b1b] before:border-t before:border-[#28282B]">
      <View className="py-5 px-6 flex flex-row justify-evenly items-center">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View>
            <OctIcons color={'#F5F5DC'} name="home" size={25} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntIcons color={'#F5F5DC'} name="pluscircle" size={38} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
          <View>
            <IonIcons
              color={'#F5F5DC'}
              name="chatbubble-ellipses-outline"
              size={25}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
