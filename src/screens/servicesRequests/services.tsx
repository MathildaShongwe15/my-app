import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";

import {
  AlertDialog,
  Button,
  Center,
  HStack,
  Heading,
  NativeBaseProvider,
  Skeleton,
  StatusBar,
  VStack,
} from "native-base";
import React, { useEffect, useMemo, useState } from "react";
import AppTabNav from "../../../components/Navigation/tabBarNavigation";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import CardComp from "../../../components/CardComponent/Card";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import Bottom from "../../../components/BottomSheetComponent/bottomSheet";

//API CALL

export default function ServicesDataList(){

  const [data, setData] = useState({});

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    };
    fetch('http://192.168.1.103:3000/AllServices', options)

      .then((response) =>{
      if(!response.ok){
        throw new Error("Something went wrong");

      }
      return response.json()})
      .then((data1) =>{
        setData(data1);
      })
      .catch(error => console.log(error.message));
  }, []);


const servicesData = [
  {
    name: <Text>{JSON.stringify(data)}</Text>,
    serviceProviders: " Shell, Engen, Caltex",
    deliveryTime: "30min",
    image: require("../../../assets/pics/Everthing.png"),
    id: 1,
    nav: "Home",
  },
  {
    name: "Towing",
    serviceProviders: " Shell, Engen, Caltex",
    image: require("../../../assets/pics/Everthing.png"),
    deliveryTime: "30min",
    id: 2,
    nav: "Home",
  },
  {
    name: "Flat Tyre",
    serviceProviders: " Shell, Engen, Caltex",
    image: require("../../../assets/pics/Everthing.png"),
    deliveryTime: "30min",
    id: 3,
    nav: "Home",
  },
  {
    name: "Oil and Water",
    serviceProviders: " Shell, Engen, Caltex",
    image: require("../../../assets/pics/Everthing.png"),
    deliveryTime: "30min",
    id: 4,
    nav: "Home",
  },
  {
    name: "Jump Start",
    serviceProviders: " Shell, Engen, Caltex",
    image: require("../../../assets/pics/Everthing.png"),
    deliveryTime: "30min",
    id: 4,
    nav: "Home",
  },
  {
    name: "LockSmith",
    serviceProviders: " Shell, Engen, Caltex",
    image: require("../../../assets/pics/Everthing.png"),
    deliveryTime: "30min",
    id: 4,
    nav: "Home",
  },
];

const ServicesToRequest = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);

  return (
    <NativeBaseProvider>
      <Center>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Order Petrol</AlertDialog.Header>
            <AlertDialog.Body>
              Fuel delivery to your pinned location
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button
                  variant="outline"
                  colorScheme="blue"
                  onPress={onClose}
                  ref={cancelRef}
                >
                  Schedule
                </Button>
                <Button colorScheme="blue" onPress={onClose}>
                  Order Now
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>

      <SafeAreaView>
        <FlatList
          data={servicesData}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                <CardComp info={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(services) => services.id.toString()}
        />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  con: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 400,
    width: "100%",
  },
});


