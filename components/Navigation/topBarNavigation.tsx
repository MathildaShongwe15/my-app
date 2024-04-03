import React from "react";
import Authstack from '../Navigation/AuthStack'
import { NativeBaseProvider } from "native-base";

const TopStackNav = () => {
  return (
  <NativeBaseProvider>
     <Authstack/>
  </NativeBaseProvider>
  );
}
export default TopStackNav;
