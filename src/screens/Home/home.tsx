/* components/Homescreen.js */
import {  useNavigation } from "@react-navigation/native";
import React from "react";
import OnBoarding from '../../../components/OnBoardingComponent/onBoarding'


const HomeScreen = () => {
  const navigation = useNavigation();
  return (
       <OnBoarding/>
   );
};

export default HomeScreen;
