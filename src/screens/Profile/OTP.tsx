import { useNavigation } from "@react-navigation/native";
import {AlertDialog, Box,Center,FormControl,Heading,Input,NativeBaseProvider,VStack,View,Button} from "native-base";
import { number } from "prop-types";
import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import {  Image,Text } from 'react-native';

const OTP = () => {

    const navigation = useNavigation();
    const sixDigitRegex = /^\d{6}$/;
    const [validError, setValidError] = useState('');
    const [validErrorText, setValidErrorText] = useState('');
    const [OTPNumber, setOTPNumber] = useState(0);

    function isValidNumber(number:any ) {

        sixDigitRegex.test(number)=== false ? setValidErrorText('*Please enter a valid six digit OTP number'): setValidErrorText('')
        !number ? setValidError("*Required") : setValidError("")
      }
      const handleOTPChange = (text:any) => {
        // Convert the input string to a number using parseInt
        const newNumber = parseInt(text, 10); // Base 10 for decimal numbers

        // Check if conversion is successful (optional)
        if (!isNaN(newNumber)) {
          setOTPNumber(newNumber);
        }
      };
  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Center>
            <Heading style={{color:'#07137D', fontWeight:'500'}}>Enter OTP</Heading>
            <Image
            source={require("../../../assets/pics/Email.png")}
            style={{
              height: Dimensions.get("window").width - 200,
              width: Dimensions.get("window").width -200,
              marginTop:10
            }}
          />
          <Text style={{color:"#07137D"}}>Check your Email for OTP sent</Text>
            </Center>
             <Input  placeholder={"Enter OTP"}  bg="muted.50" marginTop={15}  value={OTPNumber.toString()} onChangeText={text =>{handleOTPChange(text),isValidNumber(text)}}/>
             {validError ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{validError}</Text> : null}
              {validErrorText ? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{validErrorText}</Text> : null}

              <Button
                onPress={() =>navigation.navigate('ResetPass')}
                style={{backgroundColor:"#07137D", marginTop:20}}
              >Reset password</Button>
          </Box>
        </Center>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white", alignItems: "center" },
});
export default OTP;
