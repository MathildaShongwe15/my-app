import { useNavigation } from "@react-navigation/native";
import { Badge, Center, HStack, NativeBaseProvider, VStack , Text} from "native-base"
import React from "react"
import { View, StyleSheet, Dimensions, Image, TouchableOpacity} from "react-native"
import AntIcon from "react-native-vector-icons/AntDesign";

const BlockCard2 =(props: any) =>{
    const navigation = useNavigation();

    // const handleItemPress = (item) => {
    //    // Navigate to different screens based on item data

    //     item??'defaultValue'

    //     if (item === 'oil and water') {
    //       navigation.navigate('Maps');
    //     } else if (item === 'Jump Start') {
    //       navigation.navigate('My Vehicles',{Paramskeys: item });
    //     }
    //    else if (item === 'Tyre Change') {
    //     navigation.navigate('Tyre',{Paramskeys: item});
    //    }
    //    else if (item === 'Fuel') {
    //    navigation.navigate('Fuel');
    //   }
    //    else if (item === 'Towing') {
    //     navigation.navigate('Maps');
    //   } else if (item === 'Locked-out') {
    //   navigation.navigate('Maps');

    //   }
    //  }
    return(
        <NativeBaseProvider>
       <TouchableOpacity>
        <View style={styles.cardContainer}>
           <View style={styles.infoStyle}>
           <Image source={require("../../assets/pics/shell.png")}/>
           <Text style={styles.titleStyle}>{props.info.Name}</Text>
             <Text style={styles.categoryStyle}>{props.info.Email}</Text>
             <Text style={styles.categoryStyle}>{props.info.PhoneNumber}</Text>

           </View>
           {/* <View><AntIcon name="right" color="#07137D" size={30}/></View> */}
           </View>
      </TouchableOpacity>
    </NativeBaseProvider>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    cardContainer:{
        width:385,
        height:100,
        marginTop:20,
        marginLeft:12,
        borderStyle:"solid",
        borderRadius: 20,
        borderColor:"red",
        backgroundColor: "#EEEEEE",


    },

    titleStyle:{
       fontSize:18,
       fontWeight:'800',

       marginTop:15,
       color:"#07137D",

    },
    categoryStyle:{
        fontWeight:'400',
        fontSize:13,

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

export default BlockCard2;