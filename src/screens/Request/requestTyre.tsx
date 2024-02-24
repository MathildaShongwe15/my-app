import { useNavigation } from "@react-navigation/native";
import { Center, CheckIcon, Checkbox, FormControl, Heading, Input, NativeBaseProvider, Select, WarningOutlineIcon,Image, Button} from "native-base";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";


const TowingQuery = () => {

    const navigation = useNavigation();
    const [groupValues, setGroupValues] = React.useState([]);

    return (
     <NativeBaseProvider>
        <View style={styles.Container}>
            <Center >
            <Image
            source={require("../../../assets/pics/driver.png")}
            style={{
              height: Dimensions.get("window").width - 200,
              width: Dimensions.get("window").width -200,
              marginTop:10
            }}
            alt="Description of the image"
          />
                <Heading style={styles.Title} >Give us more information about your situation</Heading>

                        <Checkbox value="one" my={3}>Do you have Spare tyre?</Checkbox>

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
                        >
                        <Select.Item label="1" value="Honda" />
                        <Select.Item label="2" value="Hondayi" />
                        <Select.Item label="3" value="Ford" />
                        <Select.Item label="4" value="Volkswagen" />

                        </Select>
                        <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                        Please make a selection!
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <Button  size="md" variant="outline"  colorScheme="blue" mt="10" w="300" onPress={() => navigation.navigate("Register")} >
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