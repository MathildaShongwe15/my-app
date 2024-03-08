
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Button} from "react-native";
import { Center,NativeBaseProvider} from "native-base";


const logout = () => {

  return (
  <NativeBaseProvider>
    <Center>
    <Button title="logout"></Button>
    </Center>
  </NativeBaseProvider>
   );
};


export default logout;
