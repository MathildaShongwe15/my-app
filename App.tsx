import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TopNav from "../my-app/components/Navigation/topBarNavigation"
import {AuthProvider, useAuth} from "../my-app/Context/AuthContext"
import LottieView from 'lottie-react-native'
import SideBar from '../my-app/components/Navigation/sideBarNavigation'
export default function App(){


  return(
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  )
}
export const Layout = () => {
  const{authState}:any = useAuth();

  const roleCheck =()=>{
    if(authState.role === 'CUSTOMER' && authState?.authenticated === true){
      return <TopNav/>
    }
    if(authState.role === 'SERVICE PROVIDER' && authState?.authenticated === true){
      return <SideBar/>
    }
    if(authState.role === null && authState?.authenticated === false){
      return <TopNav/>
    }
  }
  return (

      <NavigationContainer>
           {roleCheck()}
    </NavigationContainer>




  );
}

