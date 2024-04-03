import { HStack, NativeBaseProvider, VStack , Text, Avatar} from "native-base"
import React from "react"
import { View, StyleSheet} from "react-native"

const BlockCard2 =(props: any ) =>{

    return(
        <NativeBaseProvider>
        <View style={styles.cardContainer}>
          <HStack>
        <Avatar size="30px" marginLeft="3"marginTop={5} source={{
            uri: "https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?w=740&t=st=1710661339~exp=1710661939~hmac=02615f98301244ad254bf67ed93759fa934241ff4876a5dc072557483adb2766"
          }} />
          <VStack>
           <View style={styles.infoStyle}>
           <Text style={styles.titleStyle}>{props.info.Name}</Text>
             <Text style={styles.categoryStyle}>{props.info.Email}</Text>
             <Text style={styles.categoryStyle}>{props.info.PhoneNumber}</Text>
           </View></VStack>
         </HStack>
           </View>
    </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        width:385,
        height:100,
        marginTop:20,
        marginLeft:12,
        borderStyle:"solid",
        borderRadius: 20,
        borderColor:"red",
        backgroundColor: "#F5F5F5",
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
       height:25,
       width:25,
       marginTop:15,
       marginLeft:20
    }
})

export default BlockCard2;