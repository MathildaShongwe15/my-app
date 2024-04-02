import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TopNav from "../my-app/components/Navigation/topBarNavigation"
import {AuthProvider, useAuth} from "../my-app/Context/AuthContext"
import LottieView from 'lottie-react-native'
import SideBar from '../my-app/components/Navigation/sideBarNavigation'
import { registerIndieID } from "native-notify";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "./src/screens/Home/home";
import LoginScreen from "./src/screens/Login/login";
import RegisterScreen from "./src/screens/Register/register"
import ResetScreen from "./src/screens/Profile/resetPassword"
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function App(){


  return(
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  )
}
export const Layout = () => {
  const{authState}:any = useAuth();
  const Stack = createNativeStackNavigator();

  const roleCheck = ()=>{
    if(!authState?.authenticated){
      return <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen}  />
        <Stack.Screen name="ResetPass" component={ResetScreen}options={{title:''}} />
        </Stack.Navigator>

    }
    if(authState.role === 'CUSTOMER' && authState?.authenticated){
      return <TopNav/>

    }
    if(authState.role === 'SERVICE PROVIDER' && authState?.authenticated){
      return <SideBar/>

    }

  }
  return (

      <NavigationContainer>
           {roleCheck()}
    </NavigationContainer>




  );
}

