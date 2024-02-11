/* components/Homescreen.js */

import { Button, Heading, NativeBaseProvider, View } from "native-base";
import React from "react";
import Textbox from "./LoginScreenComp"
import { NavigationContainer, ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// import React from "react";
// import { Button, View, Text } from "react-native";

 const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

 const HomeScreen = () => {

    //const navigation = useNavigation();

    const goToDetails = () => {
      navigation.navigate('LoadingComp');
    };
  
    return (
      <View>

        <Button title="Go to Details" onPress={goToDetails} />
      </View>
    );
}
    
            
      
                
            
export default HomeScreen;