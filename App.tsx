import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TopNav from "./components/NavigationComponent/topBarNavigation"
import {AuthProvider, useAuth} from "../my-app/Context/AuthContext"
import SideBar from './components/NavigationComponent/DrawerItems'
import HomeScreen from "./src/screens/Home/home";
import LoginScreen from "./src/screens/Login/login";
import RegisterScreen from "./src/screens/Register/register"
import ResetScreen from "./src/screens/Profile/resetPassword"
import OTPScreen from './src/screens/Profile/OTP';
import EmailConfirmationScreen from "./src/screens/Confirmation/emailConfirmation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerIndieID } from "native-notify";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProgressProvider } from "./Context/ProgressContext";

export default function App(){

  return(
    <AuthProvider >
      <Layout></Layout>
    </AuthProvider>
  )
}
export const Layout = () => {

  const{authState}:any = useAuth();
  const Stack = createNativeStackNavigator();

  const roleCheck = ()=>{
    console.log(authState.authenticated);
    if(!authState?.authenticated){
      return <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen}  />
        <Stack.Screen name="ResetPass" component={ResetScreen}options={{title:''}} />
        <Stack.Screen name="EmailConfirmation" component={EmailConfirmationScreen}options={{title:''}} />
        <Stack.Screen name="OTP" component={OTPScreen} options={{ headerShown: true}}></Stack.Screen>

        </Stack.Navigator>
    }
    if(authState.role === 'CUSTOMER' && authState?.authenticated){
      return <ProgressProvider>
        <TopNav/>
        </ProgressProvider>
    }
    if(authState.role === 'SERVICE PROVIDER' && authState?.authenticated){
      registerIndieID(authState.ProviderId, 19822, '5ba8jxbIfqSDiiLwi2SrvX');
      return <ProgressProvider>
        <SideBar/>
      </ProgressProvider>
    }
  }

  return (

      <NavigationContainer>
           {roleCheck()}
    </NavigationContainer>


  );
}

