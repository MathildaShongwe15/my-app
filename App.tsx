import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home/home";
import LoginScreen from "./src/screens/Login/login";
import RegisterScreen from "./src/screens/Register/register";
import ServicesScreen from "./src/screens/servicesRequests/services";
import ProfileScreen from "./src/screens/Profile/profile";
import RegistrationScreen from "./src/screens/CarScreens/registerCar";
import RequestFuelScreen from "./src/screens/Request/requestFuel"
import { NativeBaseProvider } from "native-base";
import { RootStackParamList } from "./Routes/Routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          statusBarColor: "#AEBDCA",
          headerStyle: {
            backgroundColor: "#AEBDCA",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="RequestFuel" component={RequestFuelScreen} />
        <Stack.Screen
          name="RegistrationCarDets"
          component={RegistrationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
