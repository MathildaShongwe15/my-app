import { useNavigation } from "@react-navigation/native";
import { Center, CheckIcon, Checkbox, FormControl, Heading, Input, NativeBaseProvider, Select, WarningOutlineIcon,Image, Button} from "native-base";
import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { ProgressProvider, useStep } from "../../../Context/ProgressContext";
import Btn from'../../../components/ProgressComponent/ButtonComponent'

const TowingQuery = ({route}:any) => {
const navigation = useNavigation();

let provider:string = route.params.Paramskeys[0];
let typeService:string = route.params.Paramskeys[1];
let fee:number = route.params.Paramskeys[2];
let serviceId:string = route.params.Paramskeys[3];
let ProviderId:string = route.params.Paramskeys[4];
const [isChecked, setIsChecked] = useState(true);

const handleChange = (newValue:any) => {
  setIsChecked(newValue);
  console.warn(isChecked)
};


  const [value, setValue] =  useState(1);

  const CheckTyre = (number :string) =>{
    if(number =="0") {
      alert("Choose Towing");
    }
    else if(number == ""){
      alert("Choose number of Spare Tyres!");
    }
    else{
      navigation.navigate("My Vehicles",{Paramskeys:[provider,typeService,fee,serviceId,ProviderId,isChecked]});
    }
  }
    return (
     <NativeBaseProvider>
       <ProgressProvider>

        <View style={styles.Container}>
            <Center >
            <Heading style={styles.Title} >Give us more information about your situation</Heading>
            <Image
            source={require("../../../assets/pics/driver.png")}
            style={{
              height: Dimensions.get("window").width - 150,
              width: Dimensions.get("window").width -150,
              marginTop:8
            }}
            alt="Description of the image"
          />
                        <FormControl mt="2" w="3/4" maxW="300"  >
                        <FormControl.Label>Enter number of flat tyres:</FormControl.Label>

                        <Select
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Choose Number of flat tyres"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size={5} />,
                        }}
                        mt="1"

                        >
                        <Select.Item label="1" value="1" />
                        <Select.Item label="2" value="2" />
                        <Select.Item label="3" value="3" />
                        <Select.Item label="4" value="4" />
                        </Select>
                    </FormControl>
                    <Checkbox value="hasSpareTyre" isChecked={isChecked} onChange={handleChange}  bgColor={"coolGray.200"}my={5}>Do you have Spare tyre?</Checkbox>
                <Button  size="md" bg='#07137D'  colorScheme="blue" mt="0" w="300" onPress={()=>CheckTyre(value)} >
                  SUBMIT
                </Button>
            </Center>
        </View>
        </ProgressProvider>
     </NativeBaseProvider>

    )
}

const styles = StyleSheet.create({
    Container: { flex: 1, backgroundColor: "white"},
    Title:{marginTop:0,padding:50, color:"#07137D",textAlign:"center", fontSize:20, fontWeight:'600'},
    SubTitle:{marginTop:0, padding:70,color:"#07137D"}
  });

export default TowingQuery;