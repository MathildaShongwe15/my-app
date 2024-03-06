import { Avatar, Box, Button , Center, CheckIcon, Checkbox, FormControl, HStack, Heading, Input, Link, NativeBaseProvider, Select, VStack, View, WarningOutlineIcon } from "native-base";
import React, { useState, useContext, isValidElement, useEffect } from "react";
import {StatusBar , Pressable, Alert, ActivityIndicator} from "react-native";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import {  Text,Image, Dimensions,StyleSheet } from 'react-native';
// import { AuthContext } from "../../../Context/AuthContext";
import Spinner from 'react-native-loading-spinner-overlay';
//const navigation = useNavigation();
import uuid from 'react-native-uuid';
import { useAuth } from "../../../Context/AuthContext";



const LoginApp = () => {
;
const [role, setRole] = useState('')
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const {onLogin}: any= useAuth();

useEffect(() =>{
  const testCall = async() =>{

  }

  testCall();

},[])

const login = async() =>{
  const result = await onLogin!(email,password,role);
  if(result && result.error){
    alert(result.msg);
  }
}

//check email format
// const validate = () =>
// {
//   const expression =  /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

//   if(email.match(expression)){
//     // setEmail();
//   }
//   return expression.test(String(email).toLowerCase())
// }
  const navigation = useNavigation();
    return (
    <NativeBaseProvider>
      {/* <ActivityIndicator size="small" color="#0000ff" /> */}
      <View style={styles.Container}>
        {/* <Spinner visible={isLoading}/> */}
    <Center w="100%" h="100%">

        <Box safeArea  p="2" py="8" w="90%" maxW="290">
         <Center>
         <Image
            source={require("../../../assets/pics/Mobile1.png")}
            style={{
              height: Dimensions.get("window").width - 200,
              width: Dimensions.get("window").width -200,
              marginTop:150
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
         {/* <Text>{test}</Text> */}
         </Center>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID/Employee ID</FormControl.Label>
              <Input  value={email} variant="rounded" bg="muted.50"  placeholder="Enter Email Address" onChangeText={text => setEmail(text)} type="email"/>
            </FormControl>

            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input value={password} variant="rounded" bg="muted.50"  type="password"  placeholder="Enter Password"onChangeText={text => setPassword(text)}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Try different from previous passwords.
              </FormControl.ErrorMessage>
              <FormControl w="" maxW="300" isRequired isInvalid>
     <FormControl.Label>Role</FormControl.Label>

        <Select
          minWidth="200"
          accessibilityLabel="Role"
          placeholder="Role"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
          onValueChange={text => setRole(text)}
        >
          <Select.Item label="Service Provider" value="1.5L" />
          <Select.Item label="Customer" value="2.0L" />
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
              <Link _text={{ fontSize: "xs", fontWeight: "500", color: "blue.800"}} alignSelf="flex-end" mt="2">
                Forget Password?
              </Link>

            </FormControl>
                <Button size="sm" variant="outline"  colorScheme="blue" mt="0" onPress={() => {login}} >
                  SIGN IN
                </Button>
            <HStack mt="3" justifyContent="center">
              <Link  _text={{
              color: "blue.800",
              fontWeight: "medium",
              fontSize: "xs"
            }} href="#">
               Don't Have an Account? Sign Up
              </Link>
            </HStack>
            <Heading mt="3" fontWeight={"light"} _dark={{
                color: "warmGray.200"
                }} color="warmGray.400"  size="2xs">
               By creating or login into an account you are agreeing with our Terms and Conditions and Privacy Statement
              </Heading >
          </VStack>
        </Box>
      </Center></View>
      </NativeBaseProvider>);
  };

  function ImageFunc() {
    return <Center>
        {/* <Image size={150} borderRadius={100} source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg"
      }} alt="Alternate Text" /> */}
      </Center>;
  }

  const styles = StyleSheet.create({
    Container:{flex:1, backgroundColor: 'white', alignItems: 'center'

    }
  })
  export default LoginApp;