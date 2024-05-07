import { Avatar, Box, Button , Center, CheckIcon, Checkbox, FormControl, HStack, Heading, IconButton, Input, Link, NativeBaseProvider, Select, VStack, View, WarningOutlineIcon, useToast,Text, Modal} from "native-base";
import React, { useState, useContext, isValidElement, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import {  Image, Dimensions,StyleSheet } from 'react-native';
import { useAuth } from "../../../Context/AuthContext";
import ValidationInput from '../../../Helpers/Validation'
import Icon from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
const LoginApp = () => {


const {onLogin} = useAuth();
const validator = require('validator');

const [role, setRole] = useState('')
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [Resetemail, setResetEmail] = useState('');
const [emailValidError, setEmailValidError] = useState('');
const [emailValidErrorText, setEmailValidErrorText] = useState('');
const [passwordValidError, setPasswordValidError] = useState('');
const [passwordValidErrorText, setPasswordValidErrorText] = useState('');
const [statusCode, setStatus] = useState({});
const [showPassword, setShowPassword] = useState(false);

const navigation = useNavigation();

const login = async() =>{
 onLogin!(email,password);

}
const getUserEmail = async () =>{
  await AsyncStorage.setItem("EMAIL", Resetemail);

  await fetch(`https://mutt-one-calf.ngrok-free.app/GetUserByEmail/${Resetemail}`,{
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

const toast = useToast();

const checkToast = () =>{
  if(statusCode == 200){
    toast.show({
      render: () => {
        return <Box bg="green.500" px="2" py="1" mb={655} rounded="md">
                <Text>Logged in successfully!</Text>
              </Box>
      }
    })
  }
  if(statusCode == 400){
    console.log("!!!!!!",statusCode)
      toast.show({
        render: () => {
          return <Box bg="red.500" px="2" py="1" mb={655} rounded="md">
                  <Text>Something went wrong!</Text>
                </Box>
        }
      })
  }
}
const checkResponse=()=>{
  login();

}

useEffect(() => {

 },[])

const validateEmail = (text:string) =>
{
  const expression =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  expression.test(String(email).toLowerCase()) === false ? setEmailValidErrorText('*Email address must be valid'): setEmailValidErrorText('')

  !text ? setEmailValidError("*Required") : setEmailValidError("")
}

const validatePassword = (text:string) =>{

  const expression =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^ ][\w\d!@#$%^&*]{8,}$/;
  text && !expression.test(text)? setPasswordValidErrorText('*Password must be valid'):setPasswordValidErrorText('')
  !text ? setPasswordValidError("*Required") : setPasswordValidError('')
  setPassword(text);
}
      const [modalVisible, setModalVisible] = React.useState(false);

    return (
       <NativeBaseProvider>
        <Center>
          <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent='center' bottom="4" size="lg">
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>Forgot Password?</Modal.Header>
              <Modal.Body>
                Enter email address and we'll send an OTP to reset your password.
                <FormControl mt="3">
                  <FormControl.Label>Email</FormControl.Label>
                  <Input onChangeText={text => {setResetEmail(text), validateEmail(text);}}/>
                  {emailValidError ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{emailValidError}</Text> : null}
                  {emailValidErrorText ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{emailValidErrorText}</Text> : null}

                </FormControl>
              </Modal.Body>
              <Modal.Footer>
                <Button flex="1"  backgroundColor={'#07137D'} onPress={()=>{getUserEmail(),navigation.navigate('OTP')}}>

                  Proceed
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
</Center>


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
              {emailValidErrorText ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{emailValidErrorText}</Text> : null}

            </FormControl>

            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <View flexDirection={'row'}>
              <Input value={password} bg="muted.50"  type={showPassword? "text": "password"}  placeholder="Enter Password" onChangeText={text => validatePassword(text)} width={270}/>
              <Icon name={showPassword ? "eye":"eyeo"} onPress={()=>setShowPassword(!showPassword)} size={20} style={{marginTop:10, marginLeft:5}}></Icon>
              </View>
              {passwordValidError ? <Text style={{color:"#C51605", fontSize:12, marginLeft:10}}>{passwordValidError}</Text> : null}
              {passwordValidErrorText ? <Text style={{color:"#C51605", fontSize:12, marginLeft:10}}>{passwordValidErrorText}</Text> : null}

              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Try different from previous passwords.
              </FormControl.ErrorMessage>
              <FormControl w="" maxW="300" isRequired isInvalid>


      </FormControl>
              <Link _text={{ fontSize: "xs", fontWeight: "500", color: "blue.800"}} alignSelf="flex-end" mt="2" onPress={()=>setModalVisible(!modalVisible)}>
                Forgot Password?
              </Link>

            </FormControl>
                <Button size="sm" bg='#07137D' colorScheme="blue" mt="0" onPress={() => {checkResponse()}} >

                  SIGN IN
                </Button>
            <HStack mt="3" justifyContent="center">
              <Link  _text={{
              color: "blue.800",
              fontWeight: "medium",
              fontSize: "xs"
            }}  onPress={()=>navigation.navigate('Register')}>
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