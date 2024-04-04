import { Avatar, Box, Button , Center, CheckIcon, Checkbox, FormControl, HStack, Heading, IconButton, Input, Link, NativeBaseProvider, Select, VStack, View, WarningOutlineIcon, useToast,Text } from "native-base";
import React, { useState, useContext, isValidElement, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import {  Image, Dimensions,StyleSheet } from 'react-native';
import { useAuth } from "../../../Context/AuthContext";
import { Linking } from 'react-native';




const LoginApp = () => {


const {onLogin} = useAuth();
const validator = require('validator');

const [role, setRole] = useState('')
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailValidError, setEmailValidError] = useState('');
const [passwordValidError, setPasswordValidError] = useState('');
const [statusCode, setStatus] = useState({});

const navigation = useNavigation();

const login = async() =>{
 onLogin!(email,password);
}
const toast = useToast();
const checkToast = () =>{
  if(statusCode == 200){

        toast.show({
          placement: "bottom",
          render: () => {
            return <Box bg="#FFB400" px="2" py="1" rounded="sm" >
                    <Text>You have successfully added your vehicle</Text>
                  </Box>
          }
        })
  }
  if(statusCode == 400){

      toast.show({
        render: () => {
          return <Box bg="red.500" px="2" py="1" rounded="sm" mb={700}>
                  <Text>Something went wrong!</Text>
                </Box>
        }
      })

  }
}

useEffect(() => {

 },[])

const validateEmail = (text:string) =>
{
  const expression =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  expression.test(String(email).toLowerCase()) === true ? setEmailValidError('Email address must be valid'): undefined
  !text ? setEmailValidError("*Required") : undefined
}

const validatePassword = (text:string) =>{
  text && !/^(?=.*\d)(?=.*[A-Za-z]).*$/.test(text)? setPasswordValidError('Password must be valid'):undefined
  !text ? setPasswordValidError("*Required") : undefined
  setPassword(text);
}

    return (
    <NativeBaseProvider>
      <View style={styles.Container}>
         <Center w="100%" h="100%">

        <Box safeArea  p="2" py="8" w="90%" maxW="290">
         <Center>

         <Image
            source={require("../../../assets/pics/Mobile1.png")}
            style={{
              height: Dimensions.get("window").width - 200,
              width: Dimensions.get("window").width -200,
              marginTop:-50
            }}
          />
            <Heading size="lg" fontWeight="700" color={"blue.900"} mb="0">
                Welcome Back!
            </Heading>
            <Heading mt="1" _dark={{
                color: "warmGray.200"
                }} color="blue.800" fontWeight="light" size="xs">
                    Sign in to continue
          </Heading>
         </Center>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input  value={email}  bg="muted.50"  placeholder="Enter Email Address" onChangeText={text => {setEmail(text); validateEmail(text);}} type="email"/>
              {emailValidError ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{emailValidError}</Text> : null}

            </FormControl>

            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input value={password} bg="muted.50"  type="password"  placeholder="Enter Password" onChangeText={text => validatePassword(text)}/>
              {passwordValidError ? <Text style={{color:"#C51605", fontSize:12, marginLeft:10}}>{passwordValidError}</Text> : null}

              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Try different from previous passwords.
              </FormControl.ErrorMessage>
              <FormControl w="" maxW="300" isRequired isInvalid>


      </FormControl>
              <Link _text={{ fontSize: "xs", fontWeight: "500", color: "blue.800"}} alignSelf="flex-end" mt="2" onPress={()=> navigation.navigate('ResetPass')}>
                Forget Password?
              </Link>

            </FormControl>
                <Button size="sm" bg='#07137D' colorScheme="blue" mt="0" onPress={() => {login()}} >
                  SIGN IN
                </Button>
            <HStack mt="3" justifyContent="center">
              <Link  _text={{
              color: "blue.800",
              fontWeight: "medium",
              fontSize: "xs"
            }} href="#" onPress={()=>navigation.navigate('Register')}>
               Don't Have an Account? Sign Up
              </Link>
            </HStack>
            <Heading mt="0" fontWeight={"light"} _dark={{
                color: "warmGray.200"
                }} color="warmGray.400"  style={{fontSize:10}}>
                Terms and Conditions and Privacy Statement do apply
              </Heading >
          </VStack>
        </Box>
      </Center></View>
      </NativeBaseProvider>);
  };

  const styles = StyleSheet.create({
    Container:{flex:1, backgroundColor: 'white', alignItems: 'center'

    }
  })
  export default LoginApp;