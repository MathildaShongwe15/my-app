import { NativeBaseProvider,View } from "native-base";
import React from "react"
import { TouchableOpacity,FlatList,StyleSheet } from "react-native"
import OnBoardingItem from './onBoardingItem'
import Animated from "react-native-reanimated";
import { SafeAreaFrameContext, SafeAreaView } from "react-native-safe-area-context";
const Data = [
    {
      image: require("../../assets/pics/Logo (2).png"),
      title: "Welcome",
      description: "30min",

      id: 1,

    },
    {
      title: "Add your Vehicle",
      description: "30min",
      image: require("../../assets/pics/car3.png"),
      id: 2,
    },
    {
      title: "Choose services",
      description:  "We offer Towing, fuel, oil & water,flat Tyre. ",
      image: require("../../assets/pics/hell.png"),
      id: 3,
    },
   {
    title: "Save Time",
    description: "The nearest service helper will be on their way",
    image: require("../../assets/pics/loc.png"),
    id: 4,
  },
  {
    title: "Help is on the way!",
    description: "We assign the nearest to you",
    image: require("../../assets/pics/me.png"),
    id: 5,
  },
  {
    title: "Ready, set. Go!",
    description: "30min",
    image: require("../../assets/pics/hell2.png"),
    id: 6,
  },


  ];

 const onBoarding = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

    return(

        <NativeBaseProvider>
            <SafeAreaView style={{flex:1}}>
                <FlatList  data={Data} renderItem={({item}) => <OnBoardingItem item={item}/>}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                />

            </SafeAreaView>
        </NativeBaseProvider>
    )
 }
 const Footer = () =>{
  return <View style={styles.footer}>
     <View style={styles.footerOne}>


     </View>
  </View>
};

const styles = StyleSheet.create({
  footer:{height: 0.25, justifyContent: 'space-between', paddingHorizontal:20, backgroundColor:'#0000'},
  footerOne:{flexDirection:'row', justifyContent: 'center',  backgroundColor:'#0000', marginTop:20},
})
 export default onBoarding;