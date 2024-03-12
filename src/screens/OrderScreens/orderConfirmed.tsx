import { useNavigation } from "@react-navigation/native";
import { Center, Heading, NativeBaseProvider,Button } from "native-base";
import React from "react";
import { StyleSheet,Text, View, Dimensions,Image} from "react-native";


const OrderConfirmed = () => {
    const navigation = useNavigation();
  // const [showModal,setShowModal] = useState(false);

    return (
     <NativeBaseProvider>
        <View style={styles.Container}>
            <Center >
                <Image style={styles.Img} source={require("../../../assets/pics/check.png")}/>
                <Heading style={styles.Title}>Order Confirmed!</Heading>
                <Text style={styles.SubTitle2}>request Number: R02563</Text>
                <Text style={styles.SubTitle}>Thank you for placing your order on fuel.Check your status under history to track your request</Text>


                <Button  size="md" variant="outline"  colorScheme="blue" mt="10" w="300"  >
                  Proceed to Requests
                </Button>
                <Button  size="md" variant="outline"  colorScheme="blue" mt="10" w="300"  >
                  Back to Menu
                </Button>
            </Center>

        </View>

     </NativeBaseProvider>
    )


}
const styles = StyleSheet.create({
    Container: { flex: 1, backgroundColor: "white"},
    Title:{marginTop:50, color:"#07137D"},
    SubTitle:{marginTop:0, padding:70,color:"#07137D"},
    SubTitle2:{marginTop:10, padding:0, fontWeight:"700",color:"#07137D"},
    Img:{marginTop:20}

  });
export default OrderConfirmed;