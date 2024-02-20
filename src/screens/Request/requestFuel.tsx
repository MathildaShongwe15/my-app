import {
  Box,
  Center,
  CheckIcon,
  FormControl,
  HStack,
  Input,
  NativeBaseProvider,
  Select,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import React, { useState } from "react";
import {  } from "react-native-gesture-handler";
import {Dimensions, Modal, Text,TouchableOpacity,Image} from 'react-native'
import { Calendar } from "react-native-calendars";

const Example = () => {

  const [showModal,setShowModal] = useState(false);

  return (
    <NativeBaseProvider>
    <Center w="100%">
    <Image
            source={require("../../../assets/pics/Mobile.png")}
            style={{
              height: Dimensions.get("window").width - 200,
              width: Dimensions.get("window").width -200,
              marginTop:150
            }}
          />

      <VStack>
      <Box safeArea p="2" w="90%" maxW="290" py="8">
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
     <FormControl.Label>Qauntity</FormControl.Label>

        <Select
          minWidth="200"
          accessibilityLabel="  Qauntity"
          placeholder="Qauntity"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          <Select.Item label="1.5L" value="1.5L" />
          <Select.Item label="2.0L" value="2.0L" />
          <Select.Item label="2.5L" value="2.5L" />
          <Select.Item label="3.0L" value="3.0L" />

        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl w="3/4" maxW="300" isRequired isInvalid>
     <FormControl.Label>Type of Fuel</FormControl.Label>

        <Select
          minWidth="200"
          accessibilityLabel="Type of Fuel"
          placeholder="Type of Fuel"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          <Select.Item label="Diesel" value="Diesel" />
          <Select.Item label="Unleaded 95" value="Unleaded 95" />
          <Select.Item label="Unleaded 93" value="Unleaded 93" />


        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>

      </FormControl>
      <FormControl w="3/4" maxW="300">
      <FormControl.Label>Password</FormControl.Label>
          <Input type="password" variant="filled" placeholder="R1500.00" />
      </FormControl>
      </Box></VStack>
    </Center>
    </NativeBaseProvider>
  );
};

export default Example;
