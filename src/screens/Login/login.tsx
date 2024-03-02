import { Avatar, Box, Button , Center, CheckIcon, Checkbox, FormControl, HStack, Heading, Input, Link, NativeBaseProvider, Select, VStack, View, WarningOutlineIcon } from "native-base";
import React, { useState, useContext } from "react";
import {StatusBar , Pressable, Alert, ActivityIndicator} from "react-native";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import {  Text,Image, Dimensions,StyleSheet } from 'react-native';
import { AuthContext } from "../../../Context/AuthContext";
//const navigation = useNavigation();



const Login = () => {

const [token, setToken] = useState();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [role, setRole] = useState('')
const [signUpLoading, setSignUpLoading] = useState(false);
const [verifyLoading, setVerifyLoading] = useState(false);

const {login} = useContext(AuthContext);
// localStorage.setItem("user", JSON.stringify({role:'SERVICE PROVIDER'}))

  const savaData = async () =>{

    console.warn(email);
    console.warn(password);
    const data = {email: email, password:password}
try{
  let result = fetch('http://192.168.1.103:3000/Login',{

      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    });
    result = (await result).json();
    console.warn(result);
    setSignUpLoading(true);
    setToken(token)
  }
    catch(e){
      console.error(e);

  }
}


  const navigation = useNavigation();


    return (
    <NativeBaseProvider >
      <ActivityIndicator size="small" color="#0000ff" />
      <View style={styles.Container}>
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
              <Input  value={email} variant="rounded" bg="muted.50"  placeholder="Enter Email or Employee Id" onChangeText={text => setEmail(text)}/>
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
                <Button size="sm" variant="outline"  colorScheme="blue" mt="0" onPress={() => {login()}} >
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
  export default Login;