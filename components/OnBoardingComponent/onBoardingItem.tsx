import { NativeBaseProvider,View } from "native-base";
import React from "react"
import { TouchableOpacity,FlatList,useWindowDimensions,Image,StyleSheet,Text} from "react-native"


 const onBoardingItem = ({item}) => {
    const {width} = useWindowDimensions();

    return(

        <NativeBaseProvider>
           <View style={[styles.Container,{width}]}>
           <Image source={item.image} style={[styles.image, {width, resizeMode:'contain'}]}/>

                <Text >{item.title}</Text>
                <Text>{item.description}</Text>

           </View>
        </NativeBaseProvider>
    )
 }

 export default onBoardingItem;

 const styles = StyleSheet.create({
    Container:{flex:1, backgroundColor: 'white', alignItems: 'center'

    },
    image:{
        flex:0.7,
        justifyContent:'center',

    },
    title:{

        fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        color:"#493d8a",
        textAlign:'center'
    },
    description: {
        fontWeight:'300',
        color:"#62656b",
        textAlign:'center'

    }
  })