import { useNavigation } from "@react-navigation/native";
import { Avatar,Box,Center,FormControl,Input,NativeBaseProvider,VStack,View,Button, useToast,Text} from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import LoadingScreens from '../Home/LoadingPage';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = () => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [isLoading, setIsLoading] = useState(true);
  const [statusCode, setStatus] = useState({});


 const [data, setData] = useState({});

  const getUserData = async () =>{

    const UserId = await AsyncStorage.getItem("USERID");
          console.log("PROFILE ID:", UserId)

        await fetch(`https://enormous-reasonably-raptor.ngrok-free.app/Users/${UserId}`,{


            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
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
          .then(data => (setData(data.user)))
          .catch(err => console.log(err))



  }

  const toast = useToast();
  const checkToast = () =>{
    if(statusCode == 200){

          toast.show({
            placement: "bottom",
            render: () => {
              return <Box  bg="#65B741" px="10" py="5" mb={705} rounded="md" >
                      <Text>You have successfully Updated your Profile!</Text>
                    </Box>
            }
          })

    }
    if(statusCode == 400){

        toast.show({
          render: () => {
            return <Box bg="red.500" px="10" py="5" mb={705} rounded="md"  mb={700}>
                    <Text>Something went wrong!</Text>
                  </Box>
          }
        })

    }
  }
useEffect(()=>{
  getUserData()
},[])

const checkResponse=()=>{
  updateUserData();
  checkToast();

}
const updateUserData = async () =>{

  const data1 = {firstName:firstName,lastName:lastName,email:email,phoneNumber:phoneNumber}
  const UserId = await AsyncStorage.getItem("UserServiceKEYS");
 console.log("PROFILE ID:", UserId)
  try{
       let result = await fetch(`https://enormous-reasonably-raptor.ngrok-free.app/UserUpdate/${UserId}`,{

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
                <Avatar.Badge bg="green.500" />
              </Avatar>
            </Center>
            <VStack space={3} mt="2">
              <FormControl>
                <FormControl.Label>First Name</FormControl.Label>
                <Input   editable={false}  selectTextOnFocus={false} variant="filled"  placeholder={data.First_Name}  bg="muted.50"   value={firstName} onChangeText={text => setFirstName(text)} />
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
      <View style={{flexDirection:'row'}}>

            <Button size="sm" colorScheme="blue" variant={'subtle'}   mt="5" width={130}  height={50} onPress={updateUserData}>
                  Reset Password
            </Button>
            <Button size="sm" colorScheme="blue" mt="5" width={130} ml={'5'}   height={50} backgroundColor={"#07137D"}  onPress={checkResponse}>
                  Update Profile
            </Button>
          </View>
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
