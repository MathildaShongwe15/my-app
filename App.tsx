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
import RequestFuelScreen from "./src/screens/Request/requestFuel";
import CarHistoryScreen from "./src/screens/CarScreens/Vehicles";
import OrderScreen from "./src/screens/OrderScreens/orderConfirmed";
// import TowingScreen from "./src/screens/Request/requestTowing";
import TyreScreen from "./src/screens/Request/requestTyre";
import RequestsScreen from "./src/screens/Request/viewRequests"


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          statusBarColor: "#07137D",
          headerStyle: {
            backgroundColor: "#07137D",
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
        <Stack.Screen name="RegistrationCarDets" component={RegistrationScreen} />
        <Stack.Screen name="CarHistory" component={CarHistoryScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Towing" component={TyreScreen} />
        <Stack.Screen name="Requests" component={RequestsScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
