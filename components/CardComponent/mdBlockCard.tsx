import { useNavigation } from "@react-navigation/native";
import { Badge, Center, HStack, NativeBaseProvider, VStack , Text} from "native-base"
import React from "react"
import { View, StyleSheet, Dimensions, Image, TouchableOpacity} from "react-native"
import AntIcon from "react-native-vector-icons/AntDesign";

const BlockCard2 =(props: any ) =>{


    return(
        <NativeBaseProvider>
        <View style={styles.cardContainer}>
           <View style={styles.infoStyle}>
           <Image source={require("../../assets/pics/shell.png")}/>
           <Text style={styles.titleStyle}>{props.info.Name}</Text>
             <Text style={styles.categoryStyle}>{props.info.Email}</Text>
             <Text style={styles.categoryStyle}>{props.info.PhoneNumber}</Text>
           </View>
           </View>

    </NativeBaseProvider>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    cardContainer:{
        width:385,
        height:100,
        marginTop:20,
        marginLeft:12,
        borderStyle:"solid",
        borderRadius: 20,
        borderColor:"red",
        backgroundColor: "#EEEEEE",


    },

    titleStyle:{
       fontSize:18,
       fontWeight:'800',

       marginTop:15,
       color:"#07137D",

    },
    categoryStyle:{
        fontWeight:'400',
        fontSize:13,

        color:"#07137D",
    }
    ,infoStyle:{
        marginLeft:15
    },
    ImageStyle:{
       height:40,
       width:40,
       marginTop:15
    }
})

export default BlockCard2;