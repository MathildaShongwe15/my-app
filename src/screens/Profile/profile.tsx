import { useNavigation } from "@react-navigation/native";
import { Avatar,Box,Center,FormControl,Input,NativeBaseProvider,VStack,View,Button} from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import LoadingScreens from '../Home/LoadingPage';

const Register = () => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(true);

 const [data, setData] = useState({});

  const getUserData = async () =>{
        await fetch('https://5158-41-76-96-122.ngrok-free.app/Users/7450425c-17f7-4774-a8f1-e0dcd330ac94',{

            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
          })
          .then(response => {
            if(!response.ok){
              throw new Error('Network response not ok'),
              console.log(response)
            }
            console.log("response is okay", response)
            return response.json();
          })
          .then(data => (setData(data.user),setIsLoading(false)))
          .catch(err => console.log(err))



  }


useEffect(()=>{
  getUserData()
},[])

const updateUserData = async () =>{

  const data1 = {firstName:firstName,lastName:lastName,email:email,phoneNumber:phoneNumber}
  try{
       let result = await fetch('https://5158-41-76-96-122.ngrok-free.app/UserUpdate/2b0ea48b-6fab-423f-b582-a2d9258906b2',{

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

const getContent = () =>{

  if(isLoading){
    return <LoadingScreens/>
  }

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
                <Input variant="filled"  placeholder={data.First_Name}  bg="muted.50"   value={firstName} onChangeText={text => setFirstName(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input variant="filled" placeholder={data.Last_Name}  bg="muted.50"  value={lastName} onChangeText={text => setLastName(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input variant="filled" placeholder={data.Email}  bg="muted.50"  value={email} onChangeText={text => setEmail(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Phone Number</FormControl.Label>
                <Input variant="filled" placeholder={data.PhoneNumber} bg="muted.50"  value={phoneNumber} onChangeText={text => setPhoneNumber(text)}  />
              </FormControl>

               <Button size="lg" colorScheme="blue" mt="10" width={280} backgroundColor={"#07137D"}  onPress={updateUserData}>
                  Update
            </Button>

            </VStack>
          </Box>
        </Center>
      </View>
    </NativeBaseProvider>
  ); }


  return(
    <NativeBaseProvider>
       {getContent()}
    </NativeBaseProvider>
  )
};

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white", alignItems: "center" },

});
export default Register;
