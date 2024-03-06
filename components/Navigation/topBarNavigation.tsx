import React, {useContext} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Authstack from '../Navigation/AuthStack'
import AppSideStack from '../Navigation/sideBarNavigation'
import TabBarStack from "../Navigation/tabBarNavigation";
//import { AuthContext } from "../../Context/AuthContext";
import {View, ActivityIndicator} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App =  () => {
  const Stack = createNativeStackNavigator();
  // const {isLoading, userToken} = useContext(AuthContext);
  // const {role, setRole} = useContext(AuthContext);

// let currentToken = AsyncStorage.getItem('token');
// let currentRole =  AsyncStorage.getItem('Role');

// console.log(currentToken);

//   if(isLoading){
//     return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <ActivityIndicator size={'large'}/>
//     </View>
//     );
//   }
  return (
  <NativeBaseProvider>
        {/* {currentToken !== null ? <Authstack/> :<AppSideStack/>  } */}
     <Authstack/>
{/*{currentRole ? <TabBarStack/> :<Authstack/> } */}
  </NativeBaseProvider>

  );

}
export default App;
