import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../../src/screens/Home/home";
import ProfileScreen from "../../src/screens/Profile/profile";
import RegistrationScreen from "../../src/screens/Vehicle/registerCar";
import RequestFuelScreen from "../../src/screens/Request/requestFuel";
import OrderScreen from "../../src/screens/Confirmation/orderConfirmed";
import FuelScreen from "../../src/screens/Request/requestFuel";
import TyreScreen from "../../src/screens/Request/requestTyre";
import ResetScreen from "../../src/screens/Profile/resetPassword";
import MapsScreen from "../../src/screens/Map/PinLocation";
import RequestsScreen from "../../src/screens/Request/requests";
import MenuScreen from "../../src/screens/Home/menu";
import ProviderScreen from "../../src/screens/ServiceProvider/serviceProvider";
import ViewReqScreen from "../../src/screens/Request/viewRequests";
import Notification from '../../middleware/notifications';
import RouteScreen from "../../src/screens/Map/RouteMap";
import RequestHistoryScreen from "../../src/screens/Request/myRequests";
import SettingScreen from '../../src/screens/Profile/settings';
import VehiclesScreen from"../../src/screens/Vehicle/Vehicles";
import ViewVehiclesScreen from "../../src/screens/Vehicle/viewVehicles";
import EditVehicleScreen from "../../src/screens/Vehicle/EditVehicle";
import ComplaintScreen from '../../src/screens/Profile/complaintForm';
import EmailConfirmationScreen from "../../src/screens/Confirmation/emailConfirmation";
import OTPScreen from '../../src/screens/Profile/OTP';
import { useAuth } from "../../Context/AuthContext";
import Icon from "react-native-vector-icons/AntDesign";
import ReqInfoScreen from '../../src/screens/Request/reqInformation';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const App =() => {

  const Stack = createNativeStackNavigator();
  return (

      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          statusBarColor: "#07137D",
          headerStyle: {
            backgroundColor: "#ffff",
          },
          headerTintColor: "#07137D",
          headerTitleAlign: "center",
        }}>

        <Stack.Screen name='BottomTabs' component={BottomTabs} options={{ headerShown: false}}></Stack.Screen>
         <Stack.Screen name="Profile" component={ProfileScreen}/>
         <Stack.Screen name="Navigation" component={Notification}options={{title:''}} />

        <Stack.Screen name="RequestFuel" component={RequestFuelScreen}options={{ headerShown: true}} />
        <Stack.Screen name="Registration Car" component={RegistrationScreen} options={{ headerShown: true, title:''}}/>
        <Stack.Screen name="Reset"  component={ResetScreen} />
        <Stack.Screen name="Route"  component={RouteScreen} />
        <Stack.Screen name="Fuel"  component={FuelScreen} />
        <Stack.Screen name="InfoReq"  component={ReqInfoScreen} />

        <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: true, title:'Confirmation'}}/>
        <Stack.Screen name="Tyre" component={TyreScreen} options={{ headerShown: true, title:'Tyre Request'}}/>
        <Stack.Screen name="Maps" component={MapsScreen} options={{ headerShown: true , title:'View your Location'}}/>
        <Stack.Screen name="My Vehicles" component={VehiclesScreen} options={{ headerShown: true , }}></Stack.Screen>
         <Stack.Screen name="Requests" component={RequestsScreen} options={{ headerShown: true, title:'Request'}}></Stack.Screen>
         <Stack.Screen name="ViewVehicles" component={ViewVehiclesScreen} options={{ headerShown: true ,title:'My Vehicles'}}></Stack.Screen>
        <Stack.Screen name="Providers" component={ProviderScreen} options={{ headerShown: true , title:''}}></Stack.Screen>
        <Stack.Screen name="EditVehicles" component={EditVehicleScreen} options={{ headerShown: true ,title:'My Vehicles'}}></Stack.Screen>
        <Stack.Screen name="ViewReq" component={ViewReqScreen} options={{ headerShown: true}}></Stack.Screen>
        <Stack.Screen name="ReqHistory" component={RequestHistoryScreen} options={{ headerShown: true}}></Stack.Screen>
        <Stack.Screen name="Complaint" component={ComplaintScreen} options={{ headerShown: true}}></Stack.Screen>

      </Stack.Navigator>

  );
}

  const  BottomTabs = () =>{
    const{ onLogout}:any = useAuth();
    const Tab = createBottomTabNavigator();

           return(
                <Tab.Navigator
                 screenOptions={{
                  headerShown: false,
                  headerStyle: {
                  backgroundColor: "#07137D",},}}
                  initialRouteName="Menu">

          <Tab.Screen name="Menu"  component={MenuScreen}
          options={{tabBarIcon:({color,size,focused}) =>(<Icon name={"home"} size={25} color={"#07137D"} />),tabBarActiveTintColor: "#07137D"
         }}>
         </Tab.Screen>
         <Tab.Screen name="My Vehicles"  component={ViewVehiclesScreen}
                   options={{tabBarIcon:({color,size,focused}) =>(<Icon name={"car"} size={25} color={"#07137D"} /> ),tabBarActiveTintColor: "#07137D"
                  }}>
                  </Tab.Screen>
                  <Tab.Screen name="Settings"  component={SettingScreen}
                   options={{tabBarIcon:({color,size,focused}) =>(<Icon name={"setting"} size={25} color={"#07137D"}  /> ),tabBarActiveTintColor: "#07137D"
                  }}>
                  </Tab.Screen>
                  <Tab.Screen name="Logout"  component={HomeScreen}
                   options={{tabBarIcon:({color,size,focused}) =>(<Icon name={"logout"} size={25} color={"#07137D"} onPress={onLogout}/> ),tabBarActiveTintColor: "#07137D"
                  }}>
                  </Tab.Screen>
                </Tab.Navigator>
    );
        }

export default App;
