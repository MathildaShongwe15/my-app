import BottomSheet from "@gorhom/bottom-sheet";
import { Button, Center, Heading } from "native-base";
import React, { useMemo } from "react";
import { View ,StyleSheet,Text} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Icon from "react-native-vector-icons/AntDesign";

const Bottom = (props:any) => {
    const snapPoints = useMemo(() =>['25%','50%','70%'], []);
    // const GOOGLE_MAPS_APIKEY = 'AIzaSyBE7eraggD4Ut8Nybtq-1KaPCE8LG4P8eU';

return(

    <GestureHandlerRootView style={{flex: 1}} >
        <View style={styles.con}>
             <BottomSheet snapPoints={snapPoints}>
        <View>
            <Center>
            <View style={{flexDirection: 'row'}}>
            <Icon name={"pushpin"} size={20} color={"#07137D"} style={{marginTop:35, marginRight:10}} />
            <Heading fontSize={'18'} fontWeight={'600'} marginTop={'8'}>{props.heading}</Heading>

       </View>
        <Text style={{marginTop:15}}>{props.text}</Text>

</Center>
    </View>
    <View style={{height:'50%'}}>
    {/* <GooglePlacesAutocomplete
        placeholder="Search for a place"
        onPress={(data, details = null) => props.notifyChange(details?.geometry.location)}
        query={{key: GOOGLE_MAPS_APIKEY}}
        fetchDetails={true}

        onFail={error => console.log(error)}
        onNotFound={() => console.log('no results')}
        styles={{
            textInputContainer: {
              marginTop:15,
              borderBlockColor:'blue',
              borderWidth:1,

            },
            textInput: {
              height: 38,
              color: '#5d5d5d',
              fontSize: 16,
            },}}
        listEmptyComponent={() => (
          <View style={{flex: 1}}>
            <Text>No results were found</Text>
          </View>
        )}
      /> */}
</View>
        </BottomSheet>

    </View>

    </GestureHandlerRootView>
)
}

const styles =  StyleSheet.create({


    container:{
      flex:2,
      backgroundColor:'#D8D8D8',
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