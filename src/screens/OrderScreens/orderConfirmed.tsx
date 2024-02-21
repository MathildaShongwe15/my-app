import { useNavigation } from "@react-navigation/native";
import { Center, Heading, NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet, Button,Text, View, Dimensions } from "react-native";


const OrderConfirmed = () => {
    const navigation = useNavigation();
  // const [showModal,setShowModal] = useState(false);

    return (
     <NativeBaseProvider>
        <View style={styles.Container}>
            <Center >

                <Heading style={styles.Title}>Order Confirmed</Heading>
                <Text style={styles.SubTitle}>Thank you for placing your order on fuel.Check your status under history to tarck</Text>
            </Center>
        </View>

     </NativeBaseProvider>
    )


}
const styles = StyleSheet.create({
    Container: { flex: 1, backgroundColor: "white"},
    Title:{marginTop:50},
    SubTitle:{marginTop:0, padding:70}
  });
export default OrderConfirmed;