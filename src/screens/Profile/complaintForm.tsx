import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {Text,Box, Button,Center,CheckIcon,FormControl,Heading,Input,NativeBaseProvider,Select,TextArea,View,WarningOutlineIcon, useToast} from "native-base";
import { any } from "prop-types";
import React, { useEffect, useState } from "react";
import {  StyleSheet } from "react-native";
import uuid from 'react-native-uuid';
import Icon from "react-native-vector-icons/AntDesign";


const RegisterVehicle = () => {

  const lettersOnlyRegex = /^[a-zA-Z]+$/;

  const [statusCode, setStatus] = useState({});
  const [description, setDescription] = useState('');
  const [serviceProvider, setProvider] = useState('');
  const [title, setTitle] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [data, setData] = useState<any>();
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState('');


  const Createcomplaint = async () =>{
    const getUserId = await AsyncStorage.getItem("USERID");

    await fetch('https://mutt-one-calf.ngrok-free.app/CreateComplaint',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({ServiceProviderId: selectedValue,UserId:getUserId,ComplaintTitle:title, ComplaintDescription: description})
        })
        .then(response => {
          if(!response.ok){
            setStatus(response.status);
            throw new Error('Network response not ok')
          }

          setStatus(response.status);
          console.log("response is okay", response)
          return response.json();
        })
        .catch(err => console.log(err))
};

const getProviders = async () =>{

  await fetch(`https://mutt-one-calf.ngrok-free.app/GetProviders`,{
      method:'GET',
      headers:{
          'Content-Type':'application/json',
      },})
      .then(response => {
        if(!response.ok){
          throw new Error('Network response not ok')
        }

        console.log("response is okay", response)
        return  response.json();
      })
      .then(async data => (
        setData(data)))
      .catch(err => console.log(err))
};

useEffect(() =>{
  getProviders()
  },[]);


const toast = useToast();

const checkToast = () =>{

  if(statusCode == 200){
        toast.show({
          placement: "bottom",
          render: () => {
            return <Box bg="#65B741"  px="10" py="5" mb={655}  rounded="md" >
                    <Text>You have successfully submitted your complaint!</Text>
                  </Box>
          }
        })
  }
  if(statusCode == 400){
      toast.show({
        render: () => {
          return <Box bg="yellow.500"  px="10" py="5" mb={655}  rounded="md" width={350} textAlign={'center'} >
                  <Text>Please fill in all the fields!</Text>
                </Box>
        }
      })
  }
  if(statusCode == 404){
    toast.show({
      render: () => {
        return <Box bg="red.500"  px="10" py="5" mb={655}  rounded="md" width={350} textAlign={'center'} >
                <Text>Something went wrong!</Text>
              </Box>
      }
    })
}
}
const checkResponse=()=>{
  Createcomplaint();
   checkToast();
}
const handleValueChange = (value:any) => {
  console.log(isValid)

  setSelectedValue(value);
  setIsValid(lettersOnlyRegex.test(value));
  if(!isValid){
    setError('*Please enter letters only')
  }
  if(isValid){
    setError('')
  }
};

  return (

    <NativeBaseProvider>
      <View style={styles.Container}>
      <View style={{flexDirection: 'row'}}>
        <Heading mt="5" ml="12" size="md" color="#07137D"_dark={{color: "#07137D", }}fontWeight="400">
            File your complaint
          </Heading>
          <Icon name={"form"} size={25} color={"#07137D"} style={{marginTop:25, marginLeft:15}} />
    </View>
          <Text  mt='1' ml='12' color="gray.500">Please fill in your complaint/Compliment information.</Text>
        <Center w="100%">
          <FormControl mt="5" w="3/4" maxW="300" >
            <FormControl.Label>Choose a category</FormControl.Label>
            <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose the category" _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size={5} />,}} mt="1" onValueChange={text =>setTitle(text)}

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
              onValueChange={text =>handleValueChange(text)}
              // selectedValue={selectedValue}
            >

               {data?.providers && Object.values(data?.providers).map((item:any) => (
              <Select.Item label={item.Name} value={item.Id} />
            ))}
            </Select>
          </FormControl>
          <FormControl.Label w="3/4" maxW="300" mt='2'>
            Description
          </FormControl.Label>
          <TextArea
            mt="1"
            h={40}
            placeholder="Enter Description"
            w="75%"
            maxW="300"
            value={description} onChangeText={text => setDescription(text)}
            autoCorrect={false}
            keyboardType="default"
          />
          {error ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{error}</Text> : null}


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