import { useNavigation } from "@react-navigation/native";
import { Heading, NativeBaseProvider, } from "native-base";
import React from "react"
import { TouchableOpacity,FlatList,useWindowDimensions,Image,StyleSheet,Text,View,Button} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";


 const onBoardingItem = ({item}) => {
    const {width} = useWindowDimensions();
    const navigation = useNavigation();

    return(
       <SafeAreaView >
          <View style={styles.Container}>

           <Image source={item.image} style={[styles.image, {width, resizeMode:'contain'}]} />
                <Heading >{item.title}</Heading>
                <Text>{item.description}</Text>
                <Button
              // style={styles.btn}
              color="#FFB400"
              title="Login"
              onPress={() => navigation.navigate("Login")}
            />
       </View>
       </SafeAreaView>
    )
 }

 export default onBoardingItem;

 const styles = StyleSheet.create({
    Container:{flex:1, backgroundColor: 'white', alignItems: 'center'

    },
    image:{
        flex:0.7,
        alignItems:'center',
        height:'45%',
        width:'50%',
        resizeMode:'contain',
        marginTop:30

    },
    title:{

        fontWeight:'800',
        fontSize:88,
        color:"#07137D",
        textAlign:'center',

    },
    description: {
        fontWeight:'300',
        color:"#07137D",
        textAlign:'center'

    }
  })