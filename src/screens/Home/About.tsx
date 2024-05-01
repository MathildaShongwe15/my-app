import { useNavigation } from "@react-navigation/native";
import { Center, Heading, NativeBaseProvider,Button } from "native-base";
import React from "react";
import { StyleSheet,Text, View,Image} from "react-native";

const About = () => {

    const navigation = useNavigation();



    return (
     <NativeBaseProvider>
        <View style={styles.Container}>
            <Center >
                <Image style={styles.Img} source={require("../../../assets/pics/check.png")}/>
                <Heading style={styles.Title}>About us!</Heading>
                <Text style={styles.SubTitle2}></Text>
                <Text style={styles.SubTitle2}>for your vehicle }</Text>
                <Text style={styles.SubTitle}>On it's way to your Pinned Location</Text>
                <Text style={styles.SubTitle3}></Text>
                <Text style={styles.SubTitle}>Thank you for placing your request with {} Check your status under history to track your request</Text>
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

export default About;