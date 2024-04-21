import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {Text,Box, Button,Center,CheckIcon,FormControl,Heading,Input,NativeBaseProvider,Select,TextArea,View,WarningOutlineIcon, useToast} from "native-base";
import React, { useState } from "react";
import {  StyleSheet } from "react-native";
import uuid from 'react-native-uuid';
import Icon from "react-native-vector-icons/AntDesign";


const RegisterVehicle = () => {


  const [statusCode, setStatus] = useState({});


const toast = useToast();

const checkToast = () =>{

  if(statusCode == 200){
        toast.show({
          placement: "bottom",
          render: () => {
            return <Box bg="#65B741"  px="10" py="5" mb={655}  rounded="md" >
                    <Text>You have successfully added your vehicle</Text>
                  </Box>
          }
        })
  }
  if(statusCode == 400){
      toast.show({
        render: () => {
          return <Box bg="red.500"  px="10" py="5" mb={655}  rounded="md" >
                  <Text>Something went wrong!</Text>
                </Box>
        }
      })
  }
}
const checkResponse=()=>{
   checkToast();
}


  return (

    <NativeBaseProvider>
      <View style={styles.Container}>
      <View style={{flexDirection: 'row'}}>
        <Heading mt="5" ml="12" size="md" color="#07137D"_dark={{color: "#07137D", }}fontWeight="400">
            File your complaint
          </Heading>
          <Icon name={"form"} size={25} color={"#07137D"} style={{marginTop:25, marginLeft:15}} />
    </View>
          <Text  mt='1' ml='12' color="gray.500">Please fill in your complaint information.</Text>
        <Center w="100%">
          <FormControl mt="5" w="3/4" maxW="300" >
            <FormControl.Label>Choose a category</FormControl.Label>
            <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose the category" _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size={5} />,}} mt="1"

              >
              <Select.Item label="General" value="General" />
              <Select.Item label="Repairs" value="Repairs" />
              <Select.Item label="Payment" value="Payment" />
              <Select.Item label="Other" value="Other" />

            </Select>

          </FormControl>

          <FormControl w="3/4" maxW="300" mt='1' >
            <FormControl.Label>Choose Service Provider</FormControl.Label>
            <Select
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose the Service Provider"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1"

            >
              <Select.Item label="First Help" value="Sedan" />
              <Select.Item label="Precison Towing Service" value="Hatchback" />
              <Select.Item label="Vison Towing" value="SUV" />
              <Select.Item label="Engen" value="Van" />
              <Select.Item label="Caltex" value="Mini Van" />
              <Select.Item label="Shell" value="Truck" />

            </Select>

          </FormControl>


          <FormControl.Label w="3/4" maxW="300" mt='2'>
            Description
          </FormControl.Label>
          <TextArea
            mt="1"
            h={40}
            placeholder="Enter Vehicle Description"
            w="75%"
            maxW="300"
            value={""} onChangeText={text => text}
          />

          <Button
            w="3/4"
            maxW="300"
            mt="5"
            colorScheme="blue"
            backgroundColor={'#07137D'}

            onPress={() =>  checkResponse()}>
                Submit
          </Button>

        </Center>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white"},
});

export default RegisterVehicle;