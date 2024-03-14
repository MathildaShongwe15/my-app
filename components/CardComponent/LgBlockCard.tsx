import { useNavigation } from "@react-navigation/native";
import { Badge, Center, HStack, NativeBaseProvider, VStack , Text} from "native-base"
import React from "react"
import { View, StyleSheet, Dimensions, Image, TouchableOpacity} from "react-native"


const BlockCard1 =(props: any) =>{
    const navigation = useNavigation();

    const handleItemPress = (item) => {
        // Navigate to different screens based on item data
        if (item === 'oil and water') {
          navigation.navigate('Maps');
        } else if (item === 'Jump Start') {
          navigation.navigate('My Vehicles',{Paramskeys: item});
        }
       else if (item === 'Tyre Change') {
        navigation.navigate('Tyre',{Paramskeys: item});
       }
       else if (item === 'Fuel') {
       navigation.navigate('Fuel');
      }
       else if (item === 'Towing') {
        navigation.navigate('Maps');
      } else if (item === 'Locked-out') {
      navigation.navigate('Maps');

      }
    }

    return(
        <NativeBaseProvider>
       <TouchableOpacity  onPress={() => handleItemPress(props.info.Type)}>
        <View style={styles.cardContainer}>
           <View style={styles.infoStyle}>
            <Center>
            </Center>
             <Text style={styles.titleStyle}>{props.info.Type}</Text>
             <Text style={styles.categoryStyle}>{props.info.Description}</Text>

           </View>
           </View>
      </TouchableOpacity>
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