import { useNavigation } from "@react-navigation/native";
import { Heading, NativeBaseProvider,Button } from "native-base";
import React from "react"
import { TouchableOpacity,FlatList,useWindowDimensions,Image,StyleSheet,Text,View} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";


 const onBoardingItem = ({item}) => {
    const {width} = useWindowDimensions();
    const navigation = useNavigation();

    return(
  <NativeBaseProvider>
          <View style={styles.Container}>
          <Heading style={styles.Heading}>{item.title}</Heading>
          <Text style={styles.Subtitle}>{item.description}</Text>
           <Image source={item.image} style={[styles.image, {width, resizeMode:'contain'}]} />
           <Button size="lg" colorScheme="blue" mt="10" width={280} backgroundColor={"#07137D"}  onPress={() => navigation.navigate("Menu")}>
                  Sign In
            </Button>
            <Button size="lg" variant="outline"  colorScheme="#07137D" mt="5" width={280} color={"#07137D"} fontSize={5}>
                  Sign Up
            </Button>
            <Text style={styles.smTitle}>Terms of Service</Text>
       </View>

</NativeBaseProvider>
    )
 }

 export default onBoardingItem;

 const styles = StyleSheet.create({
    Container:{flex:1, backgroundColor: 'white', alignItems: 'center'

    },
    image:{
        flex:0.7,
        alignItems:'center',
        height:'45%',
        width:'50%',
        resizeMode:'contain',
        marginTop:30

    },
    title:{

        fontWeight:'800',
        fontSize:88,
        color:"#07137D",
        textAlign:'center',

    },
    description: {
        fontWeight:'300',
        color:"#07137D",
        textAlign:'center'

    },
    Heading:{
      marginTop:115,
      fontSize:28,
      color:"#07137D"

    },
    Subtitle:{
      marginTop:10,
      color:"#B4B4B3",
      fontSize:15
    },
    smTitle:{
      marginTop:100,
      color:"#B4B4B3",
      fontSize:12
    }
  })