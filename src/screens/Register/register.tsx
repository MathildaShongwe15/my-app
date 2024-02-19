import { useNavigation } from "@react-navigation/native";
import {
  Avatar,
  Box,
  Button,
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
import { StyleSheet } from "react-native";

const Register = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View>
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading
              size="lg"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
              fontWeight="semibold"
            >
              Register your Account
            </Heading>
            <Heading
              mt="1"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="medium"
              size="xs"
            >
              Sign up to continue!
            </Heading>
            <VStack space={3} mt="2">
              <FormControl>
                <FormControl.Label>First Name</FormControl.Label>
                <Input variant="outline" placeholder="First Name" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input variant="outline" placeholder="Last Name" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input variant="outline" placeholder="Email Address" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Phone Number</FormControl.Label>
                <Input variant="outline" placeholder="Phone Number" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  type="password"
                  variant="outline"
                  placeholder="New Password"
                />
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
                  variant="outline"
                  placeholder="Confirm New Password"
                />
              </FormControl>

              <Checkbox
                colorScheme="green"
                value="test"
                accessibilityLabel="This is a dummy checkbox"
              >
                Customer
              </Checkbox>

              <Button
                mt="2"
                colorScheme="green"
                onPress={() => navigation.navigate("Profile")}
              >
                Sign up
              </Button>
            </VStack>
          </Box>
        </Center>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "#D7E4C0", alignItems: "center" },
});
export default Register;
