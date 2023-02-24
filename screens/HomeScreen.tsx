import React from 'react';
import {SafeAreaView} from 'react-native';
import Navbar from '../components/Navbar';
import PostMenu from '../components/PostMenu';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <SafeAreaView className="h-screen">
      <Navbar />
      <PostMenu />
      <Footer />
    </SafeAreaView>
  );
};

export default HomeScreen;
