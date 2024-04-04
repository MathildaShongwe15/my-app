import { useNavigation } from "@react-navigation/native";
import {Box,Button,Center,CheckIcon,FormControl,Heading,Input,NativeBaseProvider,Select,VStack,View,WarningOutlineIcon,} from "native-base";
import React, {useState } from "react";
import { StyleSheet } from "react-native";
import uuid from 'react-native-uuid';
import Icon from "react-native-vector-icons/AntDesign";

const Register = () => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setpassword] = useState('');
  const [role, setRole] = useState('');


   const savaData = async () =>{


    const data = {Id: uuid.v4(),First_Name:firstName,Last_Name:lastName,email:email,phoneNumber:phoneNumber,password:password, role:role}

    try{
    let result = fetch('https://enormous-reasonably-raptor.ngrok-free.app/Auth',{

        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
      });
      result = (await result).json();
      console.warn(result);
    }
    catch(e){
      console.error(e);
    }
}

  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <View style={styles.Container}>

        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
          <View style={{flexDirection: 'row'}}>
            <Heading size="lg" color="blue.900" _dark={{color: "blue.900",}} fontWeight="normal">
              Create Account
            </Heading>
            <Icon name={"form"} size={25} color={"#07137D"} style={{marginTop:5, marginLeft:15}} />
            </View>
            <Heading mt="1"color={'#07137D'} fontWeight="normal" size="xs">
              Please fill in input below
            </Heading>
            <VStack space={3} mt="2">
              <FormControl>
                <FormControl.Label>First Name</FormControl.Label>
                <Input  placeholder="First Name"  bg="muted.50" h={'9'} value={firstName} onChangeText={text => setFirstName(text)}/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input  placeholder="Last Name"  bg="muted.50" h={'9'} value={lastName} onChangeText={text => setLastName(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Email/EmployeeID</FormControl.Label>
                <Input  placeholder="Email Address"  bg="muted.50" h={'9'} value={email} onChangeText={text => setEmail(text)}/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Phone Number</FormControl.Label>
                <Input placeholder="Phone Number"  bg="muted.50" h={'9'} value={phoneNumber} onChangeText={text => setPhoneNumber(text)}/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" placeholder="New Password" h={'9'} bg="muted.50" value={password} onChangeText={text => setpassword(text)}/>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Try different from previous passwords.
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input type="password" h={'9'} placeholder="Confirm New Password" bg="muted.50"/>
              </FormControl>
              <Button mt="2" colorScheme="blue" bgColor={'#07137D'} onPress={savaData}>
                CREATE ACCOUNT
              </Button>
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
