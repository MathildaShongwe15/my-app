import { useNavigation } from "@react-navigation/native";
import {Box,Button,Center,CheckIcon,FormControl,Heading,Input,NativeBaseProvider,Select,VStack,View,WarningOutlineIcon,Text} from "native-base";
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
  const [confirmPassword, setconfirmPassword] = useState('');

  const [role, setRole] = useState('');


  const [passwordValidError, setPasswordValidError] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [namesError, setNamesError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [phoneNumberError, setPhoneNumberError] = useState('');

  const validateRequired = (text:string) =>
    {
      !text ? setNamesError("*Required") : undefined
    }
    function isValidSouthAfricanNumber(phoneNumber:any) {
      const regexPattern = /^(?:\+27|0)(?: ?)(?:[1-8]\d{2}|0(?:10|81)) ?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
     regexPattern.test(phoneNumber) ==false? setPhoneNumber("*Please enter valid phone number") : setPhoneNumber("");
    }

    const validatePassword = (text:string) =>{
      const expression =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^ ][\w\d!@#$%^&*]{8,}$/;
      text && !expression.test(text)? setPasswordValidError('*Password must be valid'):setPasswordValidError('');
    }

  const validateEmail = (text:string) =>
    {
      const expression =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      expression.test(String(email).toLowerCase()) === true ? setEmailValidError('Email address must be valid'): undefined
    }

   const savaData = async () =>{
    const data = {Id: uuid.v4(),First_Name:firstName,Last_Name:lastName,email:email,phoneNumber:phoneNumber,password:password, role:role}

    try{
    let result = fetch('https://mutt-one-calf.ngrok-free.app/Auth',{

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
                <Input  placeholder="First Name"  bg="muted.50" h={'9'} value={firstName} onChangeText={text => {setFirstName(text),validateRequired(text)}}/>
                {namesError ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{namesError}</Text> : null}
              </FormControl>
              <FormControl>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input  placeholder="Last Name"  bg="muted.50" h={'9'} value={lastName} onChangeText={text => {setLastName(text),validateRequired(text)}} />
                {namesError ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{namesError}</Text> : null}
              </FormControl>
              <FormControl>
                <FormControl.Label>Email/EmployeeID</FormControl.Label>
                <Input  placeholder="Email Address"  bg="muted.50" h={'9'} value={email} onChangeText={text => {setEmail(text),validateRequired(text),validateEmail(text)}}/>
                {namesError ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{namesError}</Text> : null}
                {emailValidError ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{emailValidError}</Text> : null}
              </FormControl>
              <FormControl>
                <FormControl.Label>Phone Number</FormControl.Label>
                <Input placeholder="Phone Number"  bg="muted.50" h={'9'} value={phoneNumber} onChangeText={text =>{ setPhoneNumber(text),validateRequired(text),isValidSouthAfricanNumber(text)}}/>
                {namesError ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{namesError}</Text> : null}
                {phoneNumberError ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{phoneNumberError}</Text> : null}
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <View flexDirection={'row'}>

                <Input type="password" placeholder="New Password" h={'9'}  width={270} bg="muted.50" value={password} onChangeText={text => {setpassword(text),validateRequired(text),validatePassword(text)}}/>
                <Icon name={showPassword ? "eye":"eyeo"} onPress={()=>setShowPassword(!showPassword)} size={20} style={{marginTop:10, marginLeft:5}}></Icon>
               </View>
                {namesError ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{namesError}</Text> : null}
              {passwordValidError ?
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {passwordValidError}
                </FormControl.ErrorMessage> : null}
              </FormControl>

              <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <View flexDirection={'row'}>
                <Input type="password" h={'9'} placeholder="Confirm New Password" bg="muted.50"value={confirmPassword}  width={270} onChangeText={text => {setconfirmPassword(text),validateRequired(text),validatePassword(text)}}/>
                <Icon name={showPassword ? "eye":"eyeo"} onPress={()=>setShowPassword(!showPassword)} size={20} style={{marginTop:10, marginLeft:5}}></Icon>
                </View>
                {namesError ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{namesError}</Text> : null}
                {passwordValidError ?
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {passwordValidError}
                </FormControl.ErrorMessage> : null}
              </FormControl>
              <Button mt="2" colorScheme="blue" bgColor={'#07137D'} onPress={savaData}>
                Create Profile
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
