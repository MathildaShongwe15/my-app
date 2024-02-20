import { useNavigation } from "@react-navigation/native";
import {
  Avatar,
  Box,
  Center,
  Checkbox,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  NativeBaseProvider,
  VStack,
  View,
  WarningOutlineIcon,
} from "native-base";
import React from "react";
import { StyleSheet, Button } from "react-native";

const Register = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Center>
              <Avatar
                bg="amber.500"
                source={{
                  uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
                size="xl"
              >
                NB
                <Avatar.Badge bg="yellow.500" />
              </Avatar>
            </Center>
            <VStack space={3} mt="2">
              <FormControl>
                <FormControl.Label>First Name</FormControl.Label>
                <Input variant="filled" placeholder="John " />
              </FormControl>
              <FormControl>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input variant="filled" placeholder="Doe " />
              </FormControl>
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input variant="filled" placeholder="JonDoe@gmail.com" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Phone Number</FormControl.Label>
                <Input variant="filled" placeholder="0718893654" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Current Password</FormControl.Label>
                <Input type="password" variant="filled" placeholder="***********" />
              </FormControl>
              <FormControl>
                <FormControl.Label>New Password</FormControl.Label>
                <Input type="password" variant="filled" placeholder="***********" />
              </FormControl>
              <Button
                color="#07137D"
                title="Update"
                onPress={() => navigation.navigate("RegistrationCarDets")}
              />
            </VStack>
          </Box>
        </Center>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "", alignItems: "center" },
});
export default Register;
