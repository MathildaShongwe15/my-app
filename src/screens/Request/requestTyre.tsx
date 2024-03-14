import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Center, CheckIcon, Checkbox, FormControl, Heading, Input, NativeBaseProvider, Select, WarningOutlineIcon,Image, Button} from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";


const TowingQuery = ({route}) => {
const navigation = useNavigation();


let typeService:string = route.params.Paramskeys ?? 'no Data';
console.warn(typeService)

  const [value, setValue] =  useState("");

  const CheckTyre = (number :string) =>{
    if(number =="0") {
      alert("Choose Towing");


    }
    else if(number == ""){
      alert("Choose number of Spare Tyres!");
    }
    else{

      navigation.navigate("My Vehicles",{Paramskeys:typeService});
    }
  }

    return (
     <NativeBaseProvider>
        <View style={styles.Container}>
            <Center >

            <Image
            source={require("../../../assets/pics/driver.png")}
            style={{
              height: Dimensions.get("window").width - 150,
              width: Dimensions.get("window").width -150,
              marginTop:8
            }}
            alt="Description of the image"
          />
                <Heading style={styles.Title} >Give us more information about your situation</Heading>

                        <Checkbox value="one"   bgColor={"coolGray.400"}my={3}>Do you have Spare tyre?</Checkbox>

                        <FormControl mt="2" w="3/4" maxW="300" isRequired isInvalid>

                        <Select variant="rounded"
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Number of flat tyres"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size={5} />,
                        }}
                        mt="1"
                        onValueChange={text => setValue(text)}
                        >
                        <Select.Item label="0" value="0" />
                        <Select.Item label="1" value="1" />
                        <Select.Item label="2" value="2" />
                        <Select.Item label="3" value="3" />
                        <Select.Item label="4" value="4" />

                        </Select>
                        <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                        Please make a selection!
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <Button  size="md" variant="outline"  colorScheme="blue" mt="10" w="300" onPress={() =>{CheckTyre(value)}} >
                  Submit
                </Button>

            </Center>
        </View>

     </NativeBaseProvider>
    )


}
const styles = StyleSheet.create({
    Container: { flex: 1, backgroundColor: "white"},
    Title:{marginTop:2,padding:50, color:"#07137D",textAlign:"center", fontSize:21},
    SubTitle:{marginTop:0, padding:70,color:"#07137D"}
  });
export default TowingQuery;