import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { OnboardFlow, SecondaryButton } from 'react-native-onboard';
import { useState } from 'react/cjs/react.development';

const ShowOnboardScreen = ({navigation}) => {
    return (
        <OnboardFlow
      pages={[
        {
          title: 'Welcome to MINDCONVO',
          subtitle: `Best online wellness App
Trusted by 60000+ Clients
With 95% positive results`,
          imageUri: Image.resolveAssetSource(require('../assets/icons/MINDCONVO.png')).uri,
        },
      ]}
      type={'fullscreen'}
      onDone={() => {
        navigation.replace('Login');
      }}
      
      />
    );
}

const styles = StyleSheet.create({})

export default ShowOnboardScreen;
