import { useNavigation } from "@react-navigation/native";
import { Center, NativeBaseProvider, Text} from "native-base"
import React from "react"
import { View, StyleSheet, Image, TouchableOpacity} from "react-native"


const BlockCard1 =(props: any) =>{
    const navigation = useNavigation();

    const handleItemPress = (item:string, Id:any) => {

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

const styles = StyleSheet.create({
    cardContainer:{
        width:360,
        height:120,
        marginTop:15,
        marginLeft:12,
        borderStyle:"solid",
        borderRadius: 20,
        borderColor:"red",
        backgroundColor: "#7895CB",
        shadowColor:"#B4B4B8",
        borderBlockColor:"#31363F",
        shadowOpacity:1
    },

    titleStyle:{
       fontSize:20,
       fontWeight:'600',
       textAlign:'center',
       marginTop:5,
       color:"#07137D",
    },
    categoryStyle:{
        fontWeight:'400',
        fontSize:10,
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