
import { Center, HStack, NativeBaseProvider, VStack } from "native-base"
import React from "react"
import { View, Text, StyleSheet, Dimensions, Image} from "react-native"


const BlockCard =(props: any) =>{
    return(
        <NativeBaseProvider>

        <View style={styles.cardContainer}>
           <View style={styles.infoStyle}>
            <Center>
           <Image source={props.info.image} style={styles.ImageStyle}/></Center>
             <Text style={styles.titleStyle}>{props.info.name}</Text>
             <Text style={styles.categoryStyle}>{props.info.RegNumber}</Text>
           </View>
        </View>



</NativeBaseProvider>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    cardContainer:{
        width:150,
        height:150,
        marginTop:25,
        marginLeft:15,
        borderStyle:"solid",
        borderRadius: 20,
        borderColor:"red",
        backgroundColor: "#F5F5F5",


    },

    titleStyle:{
       fontSize:16,
       fontWeight:'800',
       textAlign:'center',
       marginTop:15,
       color:"#07137D",

    },
    categoryStyle:{
        fontWeight:'400',
        fontSize:10,
        textAlign:'center',
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

export default BlockCard;