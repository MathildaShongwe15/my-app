/* components/Homescreen.js */
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
//import { RootStackParamList } from '../../Routes/Routes';
import {
  Avatar,
  Box,
  Center,
  Container,
  Heading,
  Icon,
  NativeBaseProvider,
  VStack,
} from "native-base";
import OnBoarding from '../../../components/OnBoardingComponent/onBoarding'




const HomeScreen = () => {
  const navigation = useNavigation();


  return (
       <OnBoarding/>
   );
};


export default HomeScreen;
