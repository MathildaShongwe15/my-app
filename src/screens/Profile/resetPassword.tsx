import AsyncStorage from "@react-native-async-storage/async-storage";
import {AlertDialog, Box,Center,FormControl,Heading,Input,NativeBaseProvider,VStack,View,Button} from "native-base";
import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import {  Image,Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Icon from "react-native-vector-icons/AntDesign";
const Register = () => {

  const [password, setpassword] = useState('');
  const [passwordValidError, setPasswordValidError] = useState('');
  const [passwordValidErrorText, setPasswordValidErrorText] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [match, setMatch] = useState(true);

const updatePassword = async () =>{
  const Email:any = await AsyncStorage.getItem("EMAIL");
  const data1 = {password:password}
  try{
       let result = await fetch(`https://mutt-one-calf.ngrok-free.app/ResetPassword/${Email}`,{

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

const validatePassword = (text:string) =>{
  const expression =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^ ][\w\d!@#$%^&*]{8,}$/;
  text && !expression.test(text)? setPasswordValidErrorText('*Password must be valid'):setPasswordValidErrorText('')
  !text ? setPasswordValidError("*Required") : setPasswordValidError('')
  setpassword(text);
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
                <FormControl.Label>New Password</FormControl.Label>
                <View flexDirection={'row'}>
                <Input  placeholder={"Enter new password" }  bg="muted.50" type={showPassword? "text": "password"}  width={270} value={input1} onChangeText={text => {setInput1(text),setMatch(input1 === input2);}}  />

                <Icon name={showPassword ? "eye":"eyeo"} onPress={()=>setShowPassword(!showPassword)} size={20} style={{marginTop:10, marginLeft:5}}></Icon>
                </View>
                {passwordValidError ? <Text style={{color:"#C51605", fontSize:12, marginLeft:10}}>{passwordValidError}</Text> : null}
                {passwordValidErrorText ? <Text style={{color:"#C51605", fontSize:12, marginLeft:10}}>{passwordValidErrorText}</Text> : null}
              </FormControl>
              <FormControl>
                <FormControl.Label>Confirm New Password</FormControl.Label>

                <Input  placeholder={"Confirm new password" }  bg="muted.50" type={showPassword? "text": "password"}  width={270}  value={input2} onChangeText={text => {setInput2(text);setMatch(input1 === input2); validatePassword(text);}} />


              {passwordValidError ? <Text style={{color:"#C51605", fontSize:12, marginLeft:10}}>{passwordValidError}</Text> : null}
                {passwordValidErrorText ? <Text style={{color:"#C51605", fontSize:12, marginLeft:10}}>{passwordValidErrorText}</Text> : null}
              </FormControl>
              {match ? (
             <Text style={{color:"#65B741", fontSize:12, marginLeft:10}}>Passwords match!</Text>
            ) : (
              <Text style={{color:"#C51605", fontSize:12, marginLeft:10}}>* Passwords don't match</Text>
            )}
              <Button
                onPress={() => updatePassword()}
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
