import { Avatar, Box, Button , Center, CheckIcon, Checkbox, FormControl, HStack, Heading, Input, Link, NativeBaseProvider, Select, VStack, View, WarningOutlineIcon } from "native-base";
import React from "react";
import {StatusBar , Pressable} from "react-native";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import {  Text,Image, Dimensions,StyleSheet } from 'react-native';
//const navigation = useNavigation();


const Login = () =>{
  const navigation = useNavigation();
    return (
    <NativeBaseProvider >
      <View style={styles.Container}>
    <Center w="100%" h="100%">

        <Box safeArea  p="2" py="8" w="90%" maxW="290">
         <Center>
         <Image
            source={require("../../../assets/pics/Mobile.png")}
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
                }} color="blue.800" fontWeight="medium" size="xs">
                    Sign in to continue!
          </Heading>

         </Center>

          <VStack space={3} mt="5">

            <FormControl>
              <FormControl.Label>Email ID/Employee ID</FormControl.Label>
              <Input variant="rounded" bg="muted.50"  placeholder="Enter Email or Employee Id"/>
            </FormControl>

            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input variant="rounded" bg="muted.50"  type="password"  placeholder="Enter Password"/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Try different from previous passwords.
              </FormControl.ErrorMessage>
              <Checkbox  colorScheme="blue" mt="3" value="test" accessibilityLabel="This is a dummy checkbox" >Admin</Checkbox>
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "blue.800"
            }} alignSelf="flex-end" mt="2">
                Forget Password?
              </Link>

            </FormControl>


                <Button size="sm" variant="outline"  colorScheme="blue" mt="0" onPress={() => navigation.navigate("Register")} >
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
    Container:{flex:1, backgroundColor: '', alignItems: 'center'

    }
  })
  export default Login;