import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {NativeStackScreenProps,createNativeStackNavigator} from "@react-navigation/native-stack";
import TopNav from "../my-app/components/Navigation/topBarNavigation"
import {AuthProvider} from "../my-app/Context/AuthContext"


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <AuthProvider>

      <TopNav/>

    </AuthProvider>
  );
}
export default App;
