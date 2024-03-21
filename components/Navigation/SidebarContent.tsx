import React from "react";
import { StyleSheet,View,Text,Image} from "react-native";
import {DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer'
import { TouchableOpacity } from "react-native-gesture-handler";
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import { useAuth } from "../../Context/AuthContext";
import AntIcon from "react-native-vector-icons/AntDesign";



const DrawerContent = (props:any) =>{
    const Drawer = createDrawerNavigator();
    const {bottom} = useSafeAreaInsets();
    const{authState, onLogout}:any = useAuth();
    return(
        <View style={{flex:1,}}>
            <DrawerContentScrollView {...props}>
                <View>
                    <Image source={require('../../assets/pics/Logo (2).png')} style={{height:170, width:170}}/>
                </View>
                    <DrawerItemList {...props}/>
                <TouchableOpacity style={{padding:20, paddingBottom: bottom+10, flexDirection:"row"}} onPress={onLogout}>
                <AntIcon name="logout" color="#07137D" size={20} onPress={onLogout}/>
               <Text >   Logout</Text>
                </TouchableOpacity>



            </DrawerContentScrollView>
        </View>
    )
};

export default DrawerContent;

