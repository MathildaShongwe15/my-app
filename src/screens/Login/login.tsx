import { Avatar, Box, Button , Center, FormControl, HStack, Heading, Input, Link, NativeBaseProvider, VStack, View } from "native-base";
import React from "react";
import {StatusBar , Pressable} from "react-native";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

//const navigation = useNavigation();


const Login = () =>{
  const navigation = useNavigation();
    return (
    <NativeBaseProvider >
      <View>
    <Center w="100%" h="100%">
        
        <Box safeArea p="2" py="8" w="90%" maxW="290">
         <Center>
           <VStack space={1} alignItems="center">
              <Avatar bg="green.500" source={{
                  uri: ""
                }}>
                    AJ
                  </Avatar>
                  </VStack>
            <Heading size="lg" fontWeight="700" color="blue.800" _dark={{
            color: "warmGray.50"
            }}>
                Login Here
            </Heading>
            <Heading mt="1" _dark={{
                color: "warmGray.200"
                }} color="blue.800" fontWeight="medium" size="xs">
                    Welcome back you've been missed!
          </Heading>

         </Center>
        
         
  
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input bg="indigo.100" rounded="md" shadow={3}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input bg="indigo.100" rounded="md" shadow={3} type="password" />
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "blue.800"
            }} alignSelf="flex-end" mt="2">
                Forget Password?
              </Link>
            </FormControl>
            <NativeBaseProvider>
           
                <Button title="" mt="3" colorScheme="blue"  onPress={() => navigation.navigate("Register")} >   
                  Sign in
                  
                </Button>

            </NativeBaseProvider>
         
            <HStack mt="3" justifyContent="center">
          
              <Link  _text={{
              color: "blue.800",
              fontWeight: "medium",
              fontSize: "xs"
            }} href="#">
               Don't Have an Account? Sign Up
              </Link>
           
            </HStack>
            <Heading mt="1" _dark={{
                color: "warmGray.200"
                }} color="coolGray.500"  size="2xs">
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
  export default Login;