import { useNavigation } from "@react-navigation/native";
import {
  Avatar,
  Box,
  Button,
  Center,
  CheckIcon,
  Checkbox,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  NativeBaseProvider,
  Select,
  VStack,
  View,
  WarningOutlineIcon,
} from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

const Register = () => {

  const [data, setData] = useState({});
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setpassword] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber:phoneNumber,
        password:password,
        role:role
      })
    };
    fetch('http://192.168.1.103:3000/Auth', options)

      .then((response) =>{
      if(!response.ok){
        throw new Error("Something went wrong");

      }
      return response.json()})
      .then((result) =>{
        setData(result);
      })
      .catch(error => console.log(error.message));
  }, []);


  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading
              size="lg"
              color="blue.900"
              _dark={{
                color: "blue.900",
              }}
              fontWeight="semibold"
            >
              Create Account
            </Heading>
            <Heading
              mt="1"
              color="blue.800"
              _dark={{
                color: "blue.800",
              }}
              fontWeight="medium"
              size="xs"
            >
              Please fill in input below
            </Heading>
            <VStack space={3} mt="2">
              <FormControl>
                <FormControl.Label>First Name</FormControl.Label>
                <Input variant="rounded" placeholder="First Name"  bg="muted.50" value={firstName} onChangeText={text => setFirstName(text)}/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input variant="rounded" placeholder="Last Name"  bg="muted.50" value={lastName} onChangeText={text => setLastName(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Email/EmployeeID</FormControl.Label>
                <Input variant="rounded" placeholder="Email Address"  bg="muted.50" value={email} onChangeText={text => setEmail(text)}/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Phone Number</FormControl.Label>
                <Input variant="rounded" placeholder="Phone Number"  bg="muted.50" value={phoneNumber} onChangeText={text => setPhoneNumber(text)}/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" variant="rounded" placeholder="New Password" bg="muted.50" value={password} onChangeText={text => setpassword(text)}/>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Try different from previous passwords.
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input
                  type="password"
                  variant="rounded"
                  placeholder="Confirm New Password"
                  bg="muted.50"
                />
              </FormControl>
              <FormControl w="" maxW="300" isRequired isInvalid>
     <FormControl.Label>Role</FormControl.Label>

        <Select
          minWidth="200"
          height={10}
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

              <Button
                mt="2"
                colorScheme="blue"
                variant="outline"
                onPress={() => navigation.navigate("RegistrationCarDets")}
              >
                SIGN UP
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
