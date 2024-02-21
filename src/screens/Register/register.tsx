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
                <Input variant="rounded" placeholder="First Name"  bg="muted.50"/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input variant="rounded" placeholder="Last Name"  bg="muted.50" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Email/EmployeeID</FormControl.Label>
                <Input variant="rounded" placeholder="Email Address"  bg="muted.50"/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Phone Number</FormControl.Label>
                <Input variant="rounded" placeholder="Phone Number"  bg="muted.50"/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  type="password"
                  variant="rounded"
                  placeholder="New Password"
                  bg="muted.50"
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
                  variant="rounded"
                  placeholder="Confirm New Password"
                  bg="muted.50"
                />
              </FormControl>

              <Checkbox
                colorScheme="blue"
                value="test"
                accessibilityLabel="This is a dummy checkbox"
              >
                Customer
              </Checkbox>

              <Button
                mt="2"
                colorScheme="blue"
                variant="outline"
                onPress={() => navigation.navigate("Profile")}
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
