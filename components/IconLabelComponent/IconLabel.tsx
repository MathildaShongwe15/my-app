import { Icon } from "native-base";
import React from "react"
import { View,Text, StyleSheet } from "react-native"


const IconLabel = () =>{
    return(
        <View style={styles.container}>
           <Text>30min</Text>
            <Icon name="pin"/>
        </View>
    )
}


const styles = StyleSheet.create({
     container:{
        flexDirection:'row',
        marginRight:10,
        alignItems:'center',
       
     },

    
})

export default IconLabel;

