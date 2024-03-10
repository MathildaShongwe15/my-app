import { Badge, Center, HStack, NativeBaseProvider, VStack , Text} from "native-base"
import React from "react"
import { View, StyleSheet, Dimensions, Image} from "react-native"


const BlockCard1 =(props: any) =>{
    return(
        <NativeBaseProvider>

        <View style={styles.cardContainer}>

           <View style={styles.infoStyle}>
            <Center>

            </Center>
             <Text style={styles.titleStyle}>{props.info.Type}</Text>
             <Text style={styles.categoryStyle}>{props.info.Description}</Text>
           
           </View>
        </View>



</NativeBaseProvider>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    cardContainer:{
        width:380,
        height:150,
        marginTop:55,
        marginLeft:15,
        borderStyle:"solid",
        borderRadius: 20,
        borderColor:"red",
        backgroundColor: "#818FB4",


    },

    titleStyle:{
       fontSize:20,
       fontWeight:'800',
       textAlign:'center',
       marginTop:15,
       color:"#07137D",

    },
    categoryStyle:{
        fontWeight:'400',
        fontSize:13,
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

export default BlockCard1;