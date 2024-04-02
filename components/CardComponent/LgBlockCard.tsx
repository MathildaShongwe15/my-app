import { useNavigation } from "@react-navigation/native";
import { Badge, Center, HStack, NativeBaseProvider, VStack , Text} from "native-base"
import React, { useState } from "react"
import { View, StyleSheet, Dimensions, Image, TouchableOpacity} from "react-native"


const BlockCard1 =(props: any) =>{
    const navigation = useNavigation();
    const[img,setimg]=useState();

    const handleItemPress = (item:string, Id:any) => {
        // Navigate to different screens based on item data

       console.warn("HEYYYYY ID ALL DAY",Id);

        if (item === 'oil and water') {
          navigation.navigate('Providers',{ParamKey: [item,Id]});
        } else if (item === 'Jump Start') {
          navigation.navigate('Providers',{ParamKey: [item,Id]});

        }
       else if (item === 'Tyre Change') {
        navigation.navigate('Providers',{ParamKey: [item,Id]});

       }
       else if (item === 'Fuel') {
       navigation.navigate('Providers',{ParamKey: [item,Id]});
      }
       else if (item === 'Towing') {
        navigation.navigate('Providers',{ParamKey: [item,Id]});
      } else if (item === 'Locked-Smith') {
        navigation.navigate('Providers',{ParamKey: [item,Id]});

      }
    }

    return(
        <NativeBaseProvider>
       <TouchableOpacity  onPress={() => handleItemPress(props.info.Type, props.info.ID)}>
        <View style={styles.cardContainer}>
           <View style={styles.infoStyle}>
            <Center>
            <Image source={require("../../assets/pics/ic.png")} style={styles.ImageStyle}/>
            </Center>
             <Text style={styles.titleStyle}>{props.info.Type} </Text>
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
        width:390,
        height:130,
        marginTop:20,
        marginLeft:12,
        borderStyle:"solid",
        borderRadius: 20,
        borderColor:"red",
        backgroundColor: "#7895CB",


    },

    titleStyle:{
       fontSize:20,
       fontWeight:'800',
       textAlign:'center',
       marginTop:5,
       color:"#07137D",
    },
    categoryStyle:{
        fontWeight:'400',
        fontSize:12,
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