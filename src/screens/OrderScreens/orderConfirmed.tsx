import { useNavigation } from "@react-navigation/native";
import { Center, Heading, NativeBaseProvider,Button } from "native-base";
import React from "react";
import { StyleSheet,Text, View, Dimensions,Image} from "react-native";


const OrderConfirmed = ({route}:any) => {
    const navigation = useNavigation();
  // const [showModal,setShowModal] = useState(false);
  // let brand:string = route.params.paramKey[0];
  // let color:string =route.params.paramKey[1];
  // let reg:string =route.params.paramKey[2];
  // let model:string = route.params.paramKey[3];
  // let type:string =route.params.paramKey[4];
 //let location:string=route.params.paramKey;
  // let fee:number=route.params.paramKey[6];

console.warn(route.params.paramkey[0]);
console.warn(route.params.paramkey[1]);


    return (
     <NativeBaseProvider>
        <View style={styles.Container}>
            <Center >
                <Image style={styles.Img} source={require("../../../assets/pics/check.png")}/>
                <Heading style={styles.Title}>Order Confirmed!</Heading>
                <Text style={styles.SubTitle2}>Request Number for your vehicle: {route.params.paramkey[2]} {route.params.paramkey[3]}</Text>
                <Text style={styles.SubTitle}>Your Pinned Location:</Text>
                <Text style={styles.SubTitle3}>{route.params.paramkey[0]}</Text>
                <Text style={styles.SubTitle}>Thank you for placing your order with {route.params.paramkey[1]} Check your status under history to track your request</Text>


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
    SubTitle:{marginTop:0, padding:10,color:"#07137D", fontWeight:"700"},
    SubTitle3:{marginTop:0, padding:0,color:"#07137D"},
    SubTitle2:{marginTop:10, padding:0, fontWeight:"700",color:"#07137D"},
    Img:{marginTop:20}

  });
export default OrderConfirmed;