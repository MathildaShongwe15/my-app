import React from "react"
import { View, Text, StyleSheet, Dimensions, Image} from "react-native"
import IconLabel from "../IconLabelComponent/IconLabel"

const ServiceCard =(props: any) =>{
    console.log(props)

    return(
        <View style={styles.cardContainer}>
           <Image source={props.info.image} style={styles.ImageStyle}/>
           <View style={styles.infoStyle}>
             <Text style={styles.titleStyle}>{props.info.name}</Text>
            <Text style={styles.categoryStyle}>{props.info.serviceProviders}</Text>
            <IconLabel/>
           </View>
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    cardContainer:{ height:200,
        width: deviceWidth - 25,
        marginTop:50,
        marginLeft:10,
        backgroundColor: '#AEBDCA',
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
    ImageStyle:{
        height:130,
        width: deviceWidth - 25,
        opacity:0.9,
        alignItems: 'center',
        alignSelf: 'center'
    },
    titleStyle:{
       fontSize:19,
       fontWeight:'800',
       marginLeft:3
    },
    categoryStyle:{
        fontWeight:'200',

    }
    ,infoStyle:{
        marginLeft:15
    }
})

export default ServiceCard;