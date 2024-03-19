import AsyncStorage from "@react-native-async-storage/async-storage";
import { HStack, Icon, VStack } from "native-base"
import React from "react"
import { View, Text, StyleSheet, Dimensions, Image} from "react-native"


const ServiceCard =(props: any) =>{
    //console.log(props)
    let count =0;

    return(
        <View style={styles.cardContainer}>

           <View style={styles.infoStyle}>
            <HStack>
            <Image source={require("../../assets/pics/carIcon.png")} style={styles.ImageStyle}/>
            <VStack>
           {/* <Image source={require("../../assets/pics/icon.png")}/> */}
             <Text style={styles.titleStyle}> {props.info.VehicleBrand} {props.info.VehicleModel} </Text>
             <Text style={styles.categoryStyle}>Registration Number: {props.info.RegNo}</Text>
             <Text style={styles.categoryStyle}>Vehicle Color:{props.info.Color} </Text>
             <Text style={styles.categoryStyle}>Description:{props.info.Description} </Text>

           </VStack>


           </HStack>
           </View>



             {/* <Icon name="clock" /> */}
        </View>


    )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    cardContainer:{
        height:100,
        width: deviceWidth - 25,
        marginTop:25,
        marginLeft:10,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,


    },

    titleStyle:{
       fontSize:16,
       fontWeight:'800',
      marginLeft:12,
       marginTop:15,
       color:"#07137D",

    },
    categoryStyle:{
        fontWeight:'500',
        fontSize:12,
        marginLeft:12,

        color:"#07137D",
    }
    ,infoStyle:{
        marginLeft:15
    },
    ImageStyle:{
        height:35,
        width:35,
        marginTop:15,
        marginLeft:5
     }
})

export default ServiceCard;