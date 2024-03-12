import { useNavigation } from "@react-navigation/native";
import { Avatar,Box,Center,FormControl,Input,NativeBaseProvider,VStack,View,Button} from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

const Register = () => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

 const [data, setData] = useState({});

  const getUserData = async () =>{

   try{
        let result = await fetch('http://192.168.1.103:3000/Users/2b0ea48b-6fab-423f-b582-a2d9258906b2',{

            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },

            });
            result = await result.json();
           setData( await result)
            console.log(data)
  }
    catch(e){
      console.error(e);

  }
}

useEffect(()=>{
  getUserData()
},[])

const updateUserData = async () =>{

  const data1 = {firstName:firstName,lastName:lastName,email:email,phoneNumber:phoneNumber}
  try{
       let result = await fetch(' https://842b-41-76-96-122.ngrok-free.app/UserUpdate/2b0ea48b-6fab-423f-b582-a2d9258906b2',{

           method: 'PUT',
           headers:{
               'Accept': 'application/json',
               'Content-Type':'application/json'
           },
           body: JSON.stringify(data1)

           });
           result = await result.json();
           console.log(data1)
 }
   catch(e){
     console.error(e);

 }
}
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Center>
              <Avatar
                bg="amber.500"
                source={{
                  uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
                size="xl"
              >
                NB
                <Avatar.Badge bg="yellow.500" />
              </Avatar>
            </Center>
            <VStack space={3} mt="2">
              <FormControl>
                <FormControl.Label>First Name</FormControl.Label>
                <Input variant="filled"  placeholder={"data.user.First_Name"}  bg="muted.50"   value={firstName} onChangeText={text => setFirstName(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input variant="filled" placeholder={"data.user.Last_Name" }  bg="muted.50"  value={lastName} onChangeText={text => setLastName(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input variant="filled" placeholder={"data.user.Email"}  bg="muted.50"  value={email} onChangeText={text => setEmail(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Phone Number</FormControl.Label>
                <Input variant="filled" placeholder={"data.user.phone_number"} bg="muted.50"  value={phoneNumber} onChangeText={text => setPhoneNumber(text)}  />
              </FormControl>

               <Button size="lg" colorScheme="blue" mt="10" width={280} backgroundColor={"#07137D"}  onPress={updateUserData}>
                  Update
            </Button>

            </VStack>
          </Box>
        </Center>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white", alignItems: "center" },

});
export default Register;
