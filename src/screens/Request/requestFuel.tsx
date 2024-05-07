import {Box,Center,CheckIcon,FormControl,Heading,Input,NativeBaseProvider,Select,VStack,View,Button,WarningOutlineIcon,} from "native-base";
import React, { useState } from "react";
import {  } from "react-native-gesture-handler";
import {Dimensions,Image,StyleSheet,Text} from 'react-native'
import { useNavigation } from "@react-navigation/native";

const ReqFuel = ({route}:any) => {
  const navigation = useNavigation();

  let provider:string = route.params.Paramskeys[0];
  let typeService:string = route.params.Paramskeys[1];

  const[value, setValue] = useState();
  const [limit, setLimit] = useState(0);
  const [limitError, setLimitError] = useState('');

  const checkLimit = (value:any) =>
    {
      const newNumber = parseInt(value);
      newNumber <= 250 ? setLimitError('Amount needs to be at least R250.00'):setLimitError('');
      newNumber >= 2500 ? setLimitError('Amount needs to be at least R2500.00'):setLimitError('');
      setLimit(newNumber);
    }
  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
     <Center w="100%">
    <Image
            source={require("../../../assets/pics/city.png")}
            style={{
              height: Dimensions.get("window").width - 224,
              width: Dimensions.get("window").width -205,
              marginTop:50
            }}
          />

      <VStack>
      <Heading
            mt="5"
            ml=""
            size="lg"
            color="blue.900"
            _dark={{
              color: "blue.900",
            }}
            fontWeight="semibold"
          >
            Request Fuel
          </Heading>
          <Text style={{fontWeight:300,color:'#07137D'}}>Please complete with the follwoing</Text>
      <Box safeArea p="2" w="90%" maxW="300" py="8">
      <FormControl w="" maxW="300" isRequired isInvalid>
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
      <FormControl w="" maxW="">
      <FormControl.Label>Amount</FormControl.Label>
      <Input   variant="outline" placeholder="Amount"  bg="muted.50" onChangeText={checkLimit} value={limit.toString()}/>
      { limitError? <Text style={{color:"#C51605",fontSize:12, marginLeft:10}}>{limitError}</Text> : null}

      </FormControl>
      <Button
                mt="8"
                w="290"
                h='39'
                colorScheme="blue"
                bg={'#07137D'}
               onPress={() => navigation.navigate("My Vehicles",{Paramskeys:[provider,typeService,value]})}
              >
                SUBMIT
              </Button>
      </Box>
      </VStack>
    </Center>
    </View>
    </NativeBaseProvider>
  );
};

export default ReqFuel;
const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white",},
});