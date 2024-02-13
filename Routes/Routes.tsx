import React from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, ParamListBase, useNavigation } from "@react-navigation/native";
//import Loading from "../components/LoadingComp"

//import LoadingComp from "./components/LoadingComp";

// const Stack = createNativeStackNavigator<RootStackParamList>();
// const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
//const navigation = useNavigation();


export type RootStackParamList = {
    Home: undefined;
    Loading: undefined;

    
}

