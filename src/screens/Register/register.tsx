import { useNavigation } from "@react-navigation/native";
import { Avatar, Box, Button , Center, FormControl, HStack, Heading, Input, Link, NativeBaseProvider, VStack, View } from "native-base";
import React from "react";


 const Register = () => {
  const navigation = useNavigation();
    return <NativeBaseProvider><View >
         
      <Center w="100%">
      <Avatar bg="blue.300"  size="xl" source={{
      uri: ""
    }}>
        AJ
      </Avatar>
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="lg" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }} fontWeight="semibold">
            Register your Account
          </Heading>
          <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="2">
          <FormControl>
              <FormControl.Label>First Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Last Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <Button mt="2" colorScheme="blue"  onPress={() => navigation.navigate("Services")}>
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center></View>
      </NativeBaseProvider>;
  };

export default Register;