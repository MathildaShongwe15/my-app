import { useNavigation } from "@react-navigation/native";
import { Heading, NativeBaseProvider,Button } from "native-base";
import React, { useState } from "react"
import { TouchableOpacity,FlatList,useWindowDimensions,Image,StyleSheet,Text,View} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

 const onBoardingItem = ({item}:any) => {

    const {width} = useWindowDimensions();
    const navigation = useNavigation();

    return(
  <NativeBaseProvider>
          <View style={styles.Container}>


           <Image source={item.image} style={[styles.image, {width, resizeMode:'contain'}]} />
           <Heading style={styles.Heading}>{item.title}</Heading>
           <Text style={styles.Subtitle}>{item.description}</Text>
           <Text style={styles.Subtitle}>{item.description2}</Text>
           <View style={styles.btns}>

           <Button size="md" colorScheme="blue" mt="150" ml="5" width={350} height={50} backgroundColor={"#07137D"} onPress={() => navigation.navigate('Login')} >
           GET STARTED
            </Button>
        </View>
            {/* <Text style={styles.smTitle}>Terms of Service</Text> */}

       </View>

</NativeBaseProvider>
    )
 }

 export default onBoardingItem;

 const styles = StyleSheet.create({
    Container:{flex:1, backgroundColor: 'white', alignItems: 'center'

    },
    image:{
        flex:0,
        alignItems:'center',
        height:'32%',
        width:'32%',
        resizeMode:'contain',
        marginTop:110

    },
    title:{

        fontWeight:'800',
        fontSize:80,
        color:"#07137D",
        textAlign:'center',

    },
    description: {
        fontWeight:'300',
        color:"#07137D",
        textAlign:'center'

    },
    Heading:{
      marginTop:50,
      fontSize:24,
      color:"#07137D"

    },
    Subtitle:{
      marginTop:12,
      color:"#07137D",
      fontWeight:"300",
      fontSize:14
    },
    smTitle:{
      marginTop:200,
      color:"#B4B4B3",
      fontSize:12
    },
    btns:{
      flexDirection:'row'
    },
    row:{flexDirection:'row',position:'absolute',right:0,left:0, bottom:0,justifyContent:'center'},
    dot:{width:12, height:12,backgroundColor:'grey',borderRadius:50, marginHorizontal:5,borderWidth:1, borderColor:'grey', marginBottom:50 }
  })