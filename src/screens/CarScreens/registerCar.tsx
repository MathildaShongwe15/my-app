import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {Text,Box, Button,Center,CheckIcon,FormControl,Heading,Input,NativeBaseProvider,Select,TextArea,View,WarningOutlineIcon, useToast} from "native-base";
import React, { useState } from "react";
import {  StyleSheet } from "react-native";
import uuid from 'react-native-uuid';
import Icon from "react-native-vector-icons/AntDesign";


const RegisterVehicle = () => {

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [Reg, setReg] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [statusCode, setStatus] = useState({});

  const RegisterVehicle = async (Brand :string ,Model :string,RegNo:string ,Color : string,Description:string) =>{
    console.log(Brand,Model,RegNo,Color,Description)
    const getUserId = await AsyncStorage.getItem("UserID");

    await fetch('https://enormous-reasonably-raptor.ngrok-free.app/CreateVehicle',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({Id:uuid.v4(),UserId:getUserId,vehicleBrand:brand,vehicleModel:model,regNo:Reg,color: color, description: description})
        })
        .then(response => {
          if(!response.ok){
            setStatus(response.status);
            throw new Error('Network response not ok'),
            console.log(response)
          }
          setStatus(response.status);
          console.log("response is okay", response)
          return response.json();
        })
        .then(data =>(AsyncStorage.setItem("BRAND",data.carInfo.VehicleBrand) ,AsyncStorage.setItem("MODEL", data.carInfo.VehicleModel),AsyncStorage.setItem("REG", data.carInfo.RegNo)))
        .catch(err => console.log(err))
};

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
   RegisterVehicle(brand,model,Reg,color,description);
   checkToast();
}

const checkEmpty=()=>{
  if(model == '' || brand == '' || Reg =='' || color == ''){
    return true
  }
  else{
    return false
  }
}
  return (

    <NativeBaseProvider>
      <View style={styles.Container}>
      <View style={{flexDirection: 'row'}}>
        <Heading mt="5" ml="12" size="md" color="#07137D"_dark={{color: "#07137D", }}fontWeight="400">
            Register your Vehicle
          </Heading>
          <Icon name={"form"} size={25} color={"#07137D"} style={{marginTop:25, marginLeft:15}} />
    </View>
          <Text  mt='1' ml='12' color="gray.500">Please fill in your vehicle information</Text>
        <Center w="100%">
          <FormControl mt="5" w="3/4" maxW="300" >
            <FormControl.Label>Choose the Brand/Make</FormControl.Label>
            <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose the Brand" _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size={5} />,}} mt="1"

              onValueChange={text => setBrand(text)}>
              <Select.Item label="Honda" value="Honda" />
              <Select.Item label="Hondayi" value="Hondayi" />
              <Select.Item label="Ford" value="Ford" />
              <Select.Item label="Volkswagen" value="Volkswagen" />
              <Select.Item label="Nissan" value="Nissan" />
              <Select.Item label="Audi" value="Audi" />
              <Select.Item label="Bentley" value="Audi" />
            </Select>

          </FormControl>

          <FormControl w="3/4" maxW="300" mt='1' >
            <FormControl.Label>Choose Vehicle Type</FormControl.Label>
            <Select
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose the Model"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1"
              onValueChange={text => setModel(text)}
            >
              <Select.Item label="Sedan" value="Sedan" />
              <Select.Item label="Hatchback" value="Hatchback" />
              <Select.Item label="SUV" value="SUV" />
              <Select.Item label="Van" value="Van" />
              <Select.Item label="Mini Van" value="Mini Van" />
              <Select.Item label="Truck" value="Truck" />
              <Select.Item label="BigTruck " value="Big Truck" />
              <Select.Item label="Convertible " value="Big Truck" />
              <Select.Item label="Micro" value="Micro" />
              <Select.Item label="Coupe" value="Coupe" />
              <Select.Item label="Sports" value="Sports car" />
            </Select>

          </FormControl>
          <FormControl w="3/4" maxW="300" mt='1'>
            <FormControl.Label>Registration Number</FormControl.Label>
            <Input placeholder="Registration Number" value={Reg} onChangeText={text => setReg(text)}/>

            </FormControl>
          <FormControl w="3/4" maxW="300" mt='1'>
            <FormControl.Label>Color</FormControl.Label>
            <Input  placeholder="Color" value={color} onChangeText={text => setColor(text)}/>
            {checkEmpty()}
          </FormControl>
          <FormControl.Label w="3/4" maxW="300" mt='2'>
            Other information
          </FormControl.Label>
          <TextArea
            mt="1"
            h={40}
            placeholder="Enter Vehicle Description"
            w="75%"
            maxW="300"
            value={description} onChangeText={text => setDescription(text)}
          />

          <Button
            w="3/4"
            maxW="300"
            mt="5"
            colorScheme="blue"
            backgroundColor={'#07137D'}

            onPress={() =>  checkResponse()}>
            REGISTER VEHICLE
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