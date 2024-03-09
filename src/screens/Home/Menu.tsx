import { AlertDialog, Button, Center,  Heading,  NativeBaseProvider, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View,StyleSheet,Text } from "react-native";
import BlockCard from "../../../components/CardComponent/BlockCard"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";


const Menu =()=> {


const count: Int32 = 0;
const HistoryData = [
    {
      image: require("../../../assets/pics/Prof.png"),
      name: "Home " ,
      RegNumber:"Return home" ,
      id:1
    },
    {
      image: require("../../../assets/pics/cart.png"),
      name: "Cart"  ,
      RegNumber:"Add requests" ,
      id:2
    },
    {
      image: require("../../../assets/pics/img.png"),
      name: "Profile"  ,
      RegNumber:"Update user" ,
      id:2
    },
    {
        image1: require("../../../assets/pics/img.png"),
        name1: "hey"  ,
        RegNumber1:"Update user" ,
        id:5
      },


  ];


     return(

      <NativeBaseProvider>
       <View style={styles.Container}>
       <Heading style={styles.Heading}>
         Browse categories

       </Heading>
       <Text style={styles.sub}>Navigate more</Text>
        <FlatList
          data={HistoryData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity >
                 <BlockCard info={item}/>

              </TouchableOpacity>
            );
          }}
          keyExtractor={(items) => items.id.toString()}

        />



    </View>
      </NativeBaseProvider>


     );
}


export default Menu;

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white",},
  Heading:{marginLeft:20,marginTop:30,color:"#07137D"},
  sub:{marginLeft:20,marginTop:10,color:"#AAAAAA"}
});