import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TopNav from "../my-app/components/Navigation/topBarNavigation"
import {AuthProvider, useAuth} from "../my-app/Context/AuthContext"
import LottieView from 'lottie-react-native'

export default function App(){
  return(
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  )
}

export const Layout = () => {

  return (

      <NavigationContainer>
            <TopNav/>
    </NavigationContainer>




  );
}

