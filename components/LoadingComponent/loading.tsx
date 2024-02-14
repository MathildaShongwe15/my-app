import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackParamList } from '../../Routes/Routes';
import { NativeBaseProvider } from 'native-base';

type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, "Loading">;

const LoadingScreen1  = () =>{
  const navigation = useNavigation();
  return (
   <NativeBaseProvider>

      <Button title='Go to Home' onPress={() => navigation.navigate("Home")} />
  
    </NativeBaseProvider>
  );
};


export default LoadingScreen1;