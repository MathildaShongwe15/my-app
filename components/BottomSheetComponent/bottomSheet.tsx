import BottomSheet from "@gorhom/bottom-sheet";
import { Button, Center, Heading } from "native-base";
import React, { useMemo } from "react";
import { View ,StyleSheet,Text} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Bottom = (props:any) => {
    const snapPoints = useMemo(() =>['25%','50%','70%'], []);
return(

    <GestureHandlerRootView style={{flex: 1}} >
        <View style={styles.con}>
             <BottomSheet snapPoints={snapPoints}>
        <View>
            <Center>
        <Heading>{props.heading}</Heading>
        <Text>{props.text}</Text>

</Center>
    </View>
        </BottomSheet>
    </View>
    </GestureHandlerRootView>
)
}

const styles =  StyleSheet.create({


    container:{
      flex:2,
      backgroundColor:'#535C91',
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