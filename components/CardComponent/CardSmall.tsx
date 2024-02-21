import { Icon } from "native-base"
import React from "react"
import { View, Text, StyleSheet, Dimensions, Image} from "react-native"
import IconLabel from "../IconLabelComponent/IconLabel"

const ServiceCard =(props: any) =>{
    //console.log(props)
    return(
        <View style={styles.cardContainer}>
           <View style={styles.infoStyle}>
             <Text style={styles.titleStyle}>{props.info.name}</Text>
             <Text style={styles.categoryStyle}>{props.info.RegNumber}</Text>
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
        backgroundColor: '#07137D',
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
       fontWeight:'400',
       textAlign:'center',
       marginTop:15,
       color:"#FFB400",

    },
    categoryStyle:{
        fontWeight:'200',
        fontSize:12,
        textAlign:'center',
        color:"#FFB400",
    }
    ,infoStyle:{
        marginLeft:15
    }
})

export default ServiceCard;