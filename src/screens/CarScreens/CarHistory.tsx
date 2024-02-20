
import { NativeBaseProvider } from "native-base";
import React from "react";
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import smallCard from "../../../components/CardComponent/CardSmall"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";


const servicesData = [
    {
      name: "Out of Fuel",
      id:1

    },
    {
      name: "Towing",
      id:2
    },
    {
      name: "Flat Tyre",
      id:3
    },
    {
      name: "Oil and Water",
      id:4
    },
    {
      name: "Jump Start",
      id:5
    },
    {
      name: "LockSmith",
      id:6
    },
  ];

const CarHistory = () => {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();
    const [isOpen, setIsOpen] = React.useState(false);
  
    const onClose = () => setIsOpen(false);
  
    const cancelRef = React.useRef(null);
     return(

      <NativeBaseProvider>
         <SafeAreaView>
        <FlatList
          data={servicesData}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                {/* <smallCard info={item} /> */}

                <smallCard/>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(services) => services.name.toString()}
        />
      </SafeAreaView>
      </NativeBaseProvider>


     );
}


export default CarHistory;