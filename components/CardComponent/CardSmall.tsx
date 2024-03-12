import { Icon } from "native-base"
import React from "react"
import { View, Text, StyleSheet, Dimensions, Image} from "react-native"


const ServiceCard =(props: any) =>{
    //console.log(props)
    let count =0;
    return(
        <View style={styles.cardContainer}>

           <View style={styles.infoStyle}>
           {/* <Image source={require("../../assets/pics/icon.png")}/> */}
             <Text style={styles.titleStyle}> {props.info.VehicleModel}</Text>
             <Text style={styles.categoryStyle}>Registration Number: {props.info.RegNo}</Text>
             <Text style={styles.categoryStyle}>{props.info.Id}</Text>
           </View>



             {/* <Icon name="clock" /> */}
        </View>


    )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    cardContainer:{
        height:70,
        width: deviceWidth - 25,
        marginTop:25,
        marginLeft:10,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        shadowColor:'#000',
        shadowOffset: {
            width: 5,
            height:5
        },
        shadowOpacity: 0.75,
        shadowRadius:5,
        elevation:9

    },

    titleStyle:{
       fontSize:15,
       fontWeight:'800',

       marginTop:15,
       color:"#07137D",

    },
    categoryStyle:{
        fontWeight:'400',
        fontSize:12,

        color:"#07137D",
    }
    ,infoStyle:{
        marginLeft:15
    }
})

export default ServiceCard;