import { useNavigation } from "@react-navigation/native";
import { Center, Heading, NativeBaseProvider,Button } from "native-base";
import React from "react";
import { StyleSheet,Text, View,Image} from "react-native";

const OrderConfirmed = ({route}:any) => {

    const navigation = useNavigation();

    const randomRequestNum =()=>{
      return "RO"+(Math.floor(Math.random() * 1500)+1)
    }

    return (
     <NativeBaseProvider>
        <View style={styles.Container}>
            <Center >
                <Image style={styles.Img} source={require("../../../assets/pics/check.png")}/>
                <Heading style={styles.Title}>Request Confirmed!</Heading>
                <Text style={styles.SubTitle2}>Request Number: {randomRequestNum()}</Text>
                <Text style={styles.SubTitle2}>for your vehicle {route.params.paramkey[2]} {route.params.paramkey[3]}</Text>
                <Text style={styles.SubTitle}>On it's way to your Pinned Location:</Text>
                <Text style={styles.SubTitle3}>{route.params.paramkey[0]}</Text>
                <Text style={styles.SubTitle}>Thank you for placing your request with {route.params.paramkey[1]} Check your status under history to track your request</Text>
                <Button  size="md" bg='#07137D'  colorScheme="blue" mt="10" w="300"  onPress={() => navigation.navigate('ViewReq')}>
                  Proceed to Requests
                </Button>
                <Button  size="md" variant="subtle"  colorScheme="blue" mt="10" w="300" onPress={() => navigation.navigate('BottomTabs',{screen:'Menu'})}  >
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
    SubTitle:{marginTop:20, padding:10,color:"#07137D", fontWeight:"500"},
    SubTitle3:{marginTop:10, padding:0,color:"#07137D"},
    SubTitle2:{marginTop:10, padding:0, fontWeight:"700",color:"#07137D"},
    Img:{marginTop:20}

  });

export default OrderConfirmed;