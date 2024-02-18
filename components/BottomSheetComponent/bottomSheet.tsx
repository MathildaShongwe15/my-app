import BottomSheet from "@gorhom/bottom-sheet";
import React, { useMemo } from "react";
import { View ,StyleSheet,Text} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Bottom = () => {
    const snapPoints = useMemo(() =>['25%','50%','70%'], []);
return(

    <GestureHandlerRootView style={{flex: 1}} >
    <View style={styles.con}>
    <BottomSheet snapPoints={snapPoints}>
    <View>
    <Text>This is awesome</Text></View>
    </BottomSheet></View></GestureHandlerRootView> 
)
}

const styles =  StyleSheet.create({


    container:{
      flex:2,
      backgroundColor:'#111',
      alignItems: 'center',
      justifyContent:'center'
  
  
     },
     con:{
     flex:1,
      alignItems:'center',
      justifyContent:'center',
     
     }
  
  })
export default Bottom;