import AsyncStorage from "@react-native-async-storage/async-storage";
import {AlertDialog, Box,Center,FormControl,Heading,Input,NativeBaseProvider,VStack,View,Button} from "native-base";
import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import {  Image,Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
const Register = () => {

  const [password, setpassword] = useState('');
  const [statusCode, setStatus] = useState({});
  const [email, setEmail] = useState({});
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);



  const getUserEmail = async () =>{

        await fetch(`https://content-calm-skunk.ngrok-free.app/GetUserByEmail/${email}`,{
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
          .catch(err => console.log(err))
  }

const updatePassword = async () =>{
  const Email:any = await AsyncStorage.getItem("EMAIL");
  const data1 = {password:password}
  try{
       let result = await fetch(`https://content-calm-skunk.ngrok-free.app/ResetPassword/${Email}`,{

           method: 'PUT',
           headers:{
               'Accept': 'application/json',
               'Content-Type':'application/json'
           },
           body: JSON.stringify(data1)

           });
           result = await result.json();
 }
   catch(e){
     console.error(e);

 }
}




  return (
    <NativeBaseProvider>


      <View style={styles.Container}>

      <Center>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header >Manage Car History</AlertDialog.Header>
            <AlertDialog.Body>
              Enter OTP
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button
                variant={'subtle'}
                  colorScheme="red"

                  ref={cancelRef}
                  onClose={onClose}
                >
                  Resend OTP
                </Button>
                <Button  colorScheme="blue"  bgColor={'#07137D'} onPress={() => navigation.navigate('EditVehicles', {ParamKey:id2})}>
                  Reset password
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Center>
            <Heading style={{color:'#07137D', fontWeight:'400'}}>Reset your password</Heading>

            <Image
            source={require("../../../assets/pics/f.png")}
            style={{
              height: Dimensions.get("window").width - 200,
              width: Dimensions.get("window").width -200,
              marginTop:10
            }}
          />
            </Center>
            <VStack space={3} mt="2">
              <FormControl>
                <FormControl.Label>New Password</FormControl.Label>
                <Input  placeholder={"Enter new password" }  bg="muted.50"  value={password} onChangeText={text => setpassword(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Confirm New Password</FormControl.Label>
                <Input  placeholder={"Confirm new password" }  bg="muted.50"  value={password} onChangeText={text => setpassword(text)} />
              </FormControl>
              <Button

                onPress={() => setIsOpen(!isOpen)}
                style={{backgroundColor:"#07137D"}}
              >Reset password</Button>
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
