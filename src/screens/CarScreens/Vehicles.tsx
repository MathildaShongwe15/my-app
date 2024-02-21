
import { AlertDialog, Button, Center, IconButton, NativeBaseProvider, VStack } from "native-base";
import React from "react";
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import SmallCard from "../../../components/CardComponent/CardSmall"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign'


const HistoryData = [
    {
      name: "Car 1: Honda Hatchback",
      RegNumber:"Registration Number: HHM556GP",
      id:1
    },
    {
      name: "Car 2: Honda Sedan",
      RegNumber:"Registration Number: HHM556GP",
      id:2
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
        <Center>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Manage Car History</AlertDialog.Header>
            <AlertDialog.Body>
              What would you like to do?
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button

                  colorScheme="red"
                  onPress={onClose}
                  ref={cancelRef}
                >
                  Delete
                </Button>
                <Button variant="outline" colorScheme="blue" onPress={onClose}>
                  Edit
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>
         <SafeAreaView>
        <FlatList
          data={HistoryData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                 <SmallCard info={item}/>

              </TouchableOpacity>
            );
          }}
          keyExtractor={(services) => services.id.toString()}
        />
       <Button onPress={() => navigation.navigate("Requests")} marginTop={"505"} marginLeft={"350"} width={"50"} height={"50"}    bgColor={"blue.900"}><Icon name="pluscircle" size={20} color={"white"}/></Button>
      </SafeAreaView>
      </NativeBaseProvider>


     );
}


export default CarHistory;