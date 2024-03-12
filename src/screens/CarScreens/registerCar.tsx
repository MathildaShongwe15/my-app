import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {Button,Center,CheckIcon,FormControl,Heading,Input,NativeBaseProvider,Select,TextArea,View,WarningOutlineIcon} from "native-base";
import React, { useState } from "react";
import {  StyleSheet } from "react-native";



const RegisterVehicle = () => {

  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('');
  const [Reg, setReg] = useState('');
  const [color, setColor] = useState('')
  const [description, setDescription] = useState('')
  const [ID, SetId] = useState('')

  const RegisterVehicle = async (Id:string,Brand :string ,Model :string,RegNo:string ,Color : string,Description:string) =>{
    console.log(Brand,Model,RegNo,Color,Description)
    const getUserId = await AsyncStorage.getItem("UserID");

    await fetch('https://31b4-41-76-96-122.ngrok-free.app/CreateVehicle',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({Id:"aakakk-155-kwmf",UserId:getUserId,vehicleBrand:Brand,vehicleModel:Model,regNo:RegNo,color: Color, description: Description})
        })
        .then(response => {
          if(!response.ok){
            throw new Error('Network response not ok'),
            console.log(response)
          }
          console.log("response is okay", response)
          return response.json();
        })
        .then(data =>(AsyncStorage.setItem("BRAND",data.carInfo.VehicleBrand) ,AsyncStorage.setItem("MODEL", data.carInfo.VehicleModel),AsyncStorage.setItem("REG", data.carInfo.RegNo)))
        .catch(err => console.log(err))
};

const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View style={styles.Container}>

        <Heading
            mt="5"
            ml="12"
            size="lg"
            color="blue.900"
            _dark={{
              color: "blue.900",
            }}
            fontWeight="semibold"
          >
            Register your car
          </Heading>
        <Center w="100%">

          <FormControl mt="5" w="3/4" maxW="300" isRequired isInvalid>
            <FormControl.Label>Choose the Brand/Make</FormControl.Label>
            <Select variant="rounded"
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose the Brand"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1"
              onValueChange={text => setBrand(text)}
            >
              <Select.Item label="Honda" value="Honda" />
              <Select.Item label="Hondayi" value="Hondayi" />
              <Select.Item label="Ford" value="Ford" />
              <Select.Item label="Volkswagen" value="Volkswagen" />
              <Select.Item label="Nissan" value="Nissan" />
              <Select.Item label="Audi" value="Audi" />
              <Select.Item label="Bentley" value="Audi" />
            </Select>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Please make a selection!
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl w="3/4" maxW="300" isRequired isInvalid>
            <FormControl.Label>Choose your car Model</FormControl.Label>
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
              <Select.Item label="Micro" value="Micro" />
              <Select.Item label="Coupe" value="Coupe" />
              <Select.Item label="Sports car" value="Sports car" />
            </Select>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Please make a selection!
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl w="3/4" maxW="300">
            <FormControl.Label>Registration Number</FormControl.Label>
            <Input variant="rounded" placeholder="Registration Number" value={Reg} onChangeText={text => setReg(text)}/>
          </FormControl>
          <FormControl w="3/4" maxW="300">
            <FormControl.Label>Color</FormControl.Label>
            <Input variant="rounded" placeholder="Color" value={color} onChangeText={text => setColor(text)}/>
          </FormControl>
          <FormControl.Label w="3/4" maxW="300">
            Other information
          </FormControl.Label>
          <TextArea
            mt="3"
            h={20}
            placeholder="Text Area Placeholder"
            w="75%"
            maxW="300"
            value={description} onChangeText={text => setDescription(text)}
          />

          <Button
            w="3/4"
            maxW="300"
            mt="5"
            colorScheme="blue"
            variant={"outline"}
            onPress={() => RegisterVehicle(brand,model,Reg,color,description)}
          >
            Register with this Vehicle
          </Button>
          {/*
            <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable  flex={1}>
            <Center>
              <Icon mb="1" color="white" size="sm" />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable py="2" flex={1} >
            <Center>
              <Icon mb="1"  color="white" size="sm" />
              <Text color="white" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>
          <Pressable py="2" flex={1} >
            <Center>
              <Icon mb="1" color="white" size="sm" />
              <Text color="white" fontSize="12">
                Cart
              </Text>
            </Center>
          </Pressable>
          <Pressable py="2" flex={1} >
            <Center>
              <Icon mb="1"  color="white" size="sm" />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack> */}
        </Center>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white"},
});

export default RegisterVehicle;