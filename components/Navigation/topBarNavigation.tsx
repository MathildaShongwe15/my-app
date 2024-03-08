import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Authstack from '../Navigation/AuthStack'
import { NativeBaseProvider } from "native-base";


const TopStackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
  <NativeBaseProvider>
     <Authstack/>
  </NativeBaseProvider>

  );

}
export default TopStackNav;
