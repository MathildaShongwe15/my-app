import { useNavigation } from "@react-navigation/native";
import {Box,Button,Center,CheckIcon,FormControl,Heading,Input,NativeBaseProvider,Select,VStack,View,WarningOutlineIcon,Text, useToast} from "native-base";
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

  const [status, setStatus] = useState({});


  const [passwordValidError, setPasswordValidError] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [namesError, setNamesError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailValidErrorText, setEmailValidErrorText] = useState('');
  const [passwordValidErrorText, setPasswordValidErrorText] = useState('');
  const [PasswordErrorText, setPasswordErrorText] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [secondNameError, setSecondNameError] = useState('');

  const [phoneNumberError, setPhoneNumberError] = useState('');

  function isRequiredFirstName(firstName:any) {

   !firstName ? setPasswordErrorText("*Required") : setPasswordErrorText("")

  }
  function isRequiredLastName(LastName:any) {

    !LastName ? setPasswordErrorText("*Required") : setPasswordErrorText("")

   }


    function isValidSouthAfricanNumber(phoneNumber:any) {
      const regexPattern = /^(?:\+27|0)(?: ?)(?:[1-8]\d{2}|0(?:10|81)) ?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
     regexPattern.test(phoneNumber) ==false? setPhoneNumberError("*Please enter valid phone number") : setPhoneNumber("");
     !phoneNumber ? setPasswordErrorText("*Required") : undefined

    }

    const validatePassword = (text:string) =>{
      const expression =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^ ][\w\d!@#$%^&*]{8,}$/;
      text && !expression.test(text)? setPasswordValidError('*Password must be valid'):setPasswordValidError('');
      !text ? setPasswordErrorText("*Required") : undefined

    }

  const validateEmail = (text:string) =>
    {
      const expression =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      expression.test(String(email).toLowerCase()) === false ? setEmailValidError('Email address must be valid'): setEmailValidError('')
      !text ? setEmailValidErrorText("*Required") : undefined

    }

   const savaData = async () =>{
    const data = {Id: uuid.v4(),First_Name:firstName,Last_Name:lastName,email:email,phoneNumber:phoneNumber,password:password, role:'CUSTOMER'}

    try{
    fetch('https://mutt-one-calf.ngrok-free.app/Auth',{

        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if(!response.ok){
          setStatus(response.status)
          throw new Error('Network response not ok'),
          console.log(response)
        }
        setStatus(response.status);
        console.log("response is okay", response)
        return response.json();
      })
    }
    catch(e){
      console.error(e);
    }
}
const toast = useToast();

const checkToast = () =>{
  if(status == 200){
    toast.show({
      render: () => {
        return <Box bg="green.500" px="2" py="1" mb={500} rounded="md">
                <Text>Logged in successfully!</Text>
              </Box>
      }
    })
    navigation.navigate('Login');
  }
  if(status == 400){
      toast.show({
        render: () => {
          return <Box bg="red.500" px="2" py="1" mb={500} rounded="md">
                  <Text>Something went wrong!</Text>
                </Box>
        }
      })
  }
}
const checkResponse=()=>{
  checkToast();
  savaData();
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
                <Input  placeholder="First Name"  bg="muted.50" h={'9'} value={firstName} onChangeText={text => {setFirstName(text),isRequiredFirstName(text) }}/>
                { firstNameError? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{firstNameError}</Text> : null}

              </FormControl>
              <FormControl>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input  placeholder="Last Name"  bg="muted.50" h={'9'} value={lastName} onChangeText={text => {setLastName(text), isRequiredLastName(text)}} />
                { secondNameError? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{secondNameError}</Text> : null}

              </FormControl>
              <FormControl>
                <FormControl.Label>Email/EmployeeID</FormControl.Label>
                <Input  placeholder="Email Address"  bg="muted.50" h={'9'} value={email} onChangeText={text => {setEmail(text),validateEmail(text)}}/>
                {emailValidError ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{emailValidError}</Text> : null}
              </FormControl>
              <FormControl>
                <FormControl.Label>Phone Number</FormControl.Label>
                <Input placeholder="Phone Number"  bg="muted.50" h={'9'} value={phoneNumber} onChangeText={text =>{ setPhoneNumber(text),isValidSouthAfricanNumber(text)}}/>
                {phoneNumberError ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{phoneNumberError}</Text> : null}
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <View flexDirection={'row'}>

                <Input type="password" placeholder="New Password" h={'9'}  width={270} bg="muted.50" value={password} onChangeText={text => {setpassword(text),validatePassword(text)}}/>
                <Icon name={showPassword ? "eye":"eyeo"} onPress={()=>setShowPassword(!showPassword)} size={20} style={{marginTop:10, marginLeft:5}}></Icon>
               </View>
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
                <Input type="password" h={'9'} placeholder="Confirm New Password" bg="muted.50"value={confirmPassword}  width={270} onChangeText={text => {setconfirmPassword(text),validatePassword(text)}}/>
                <Icon name={showPassword ? "eye":"eyeo"} onPress={()=>setShowPassword(!showPassword)} size={20} style={{marginTop:10, marginLeft:5}}></Icon>
                </View>
                {passwordValidError ?
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {passwordValidError}
                </FormControl.ErrorMessage> : null}
              </FormControl>
              <Button mt="2" colorScheme="blue" bgColor={'#07137D'} onPress={checkResponse}>
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
