import AsyncStorage from "@react-native-async-storage/async-storage";
import {Box,Center,FormControl,Heading,Input,NativeBaseProvider,VStack,View,} from "native-base";
import React, { useState } from "react";
import { StyleSheet, Button, Dimensions } from "react-native";
import {  Image } from 'react-native';
const Register = () => {

  const [password, setpassword] = useState('');

const updatePassword = async () =>{
  const Email:any = await AsyncStorage.getItem("EMAIL");
  const data1 = {password:password}
  try{
       let result = await fetch(`https://enormous-reasonably-raptor.ngrok-free.app/ResetPassword/${Email}`,{

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

  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
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
                <FormControl.Label>Enter your Email Address for OTP</FormControl.Label>
                <Input  placeholder={"Enter email Address" }  bg="muted.50"  value={password} onChangeText={text => setpassword(text)} />
              </FormControl>
              <Button
                color="#07137D"
                title="Send Email"
                onPress={updatePassword}

              ></Button>
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
