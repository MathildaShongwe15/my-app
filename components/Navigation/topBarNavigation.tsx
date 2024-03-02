import React, {useContext} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Authstack from '../Navigation/AuthStack'
import AppSideStack from '../Navigation/sideBarNavigation'
import { AuthContext } from "../../Context/AuthContext";
import {View, ActivityIndicator} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

const App = () => {
  const Stack = createNativeStackNavigator();
  const {isLoading, userToken} = useContext(AuthContext);

  if(isLoading){
    return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={'large'}/>
    </View>
    );
  }
  return (
  <NavigationContainer>
        {userToken !== null ?<AppSideStack/> : <Authstack/>}
  </NavigationContainer>

  );
}
export default App;
