import { Button, NativeBaseProvider,View } from "native-base";
import React, { useEffect, useRef, useState } from "react"
import {Dimensions, FlatList,StyleSheet } from "react-native"
import OnBoardingItem from './onBoardingItem'

import { SafeAreaView } from "react-native-safe-area-context";
import { SCREEN_WIDTH } from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
const Data = [
    {
      image: require("../../assets/pics/Logo (2).png"),
      id: 1,

    },
    {
      title: "Request a Service ",
      description: "Select the service you need.Whether it's Towing, fuel,",
      description2: "Jump Start, LockSmith, oil and water or flat tyre ",
      image: require("../../assets/pics/hell.png"),
      id: 2,
    },
    {
      title: "Add your Vehicle",
      description:  "Add as much vehicles you need in one account",
      image: require("../../assets/pics/car3.png"),

      id: 3,
    },
   {
    title: "Pin Your Location",
    description: "The nearest service helper will be on their way to your",
    description2: "Pinned location",
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
    title: "You ready to get Going?",
    description: "Your service will be delivered ",
    image: require("../../assets/pics/hell2.png"),
    id: 6,
  },


  ];


 const onBoarding = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [updateIndex,setUpdateIndex] = useState(0)
    const ref = useRef(null);
    const {width, height} = Dimensions.get('window');

    const updateIndexSlide = (e:any) =>{
      const contentOffSetX = e.nativeEvent.contentOffset.x;
      const currentIndex = Math.round(contentOffSetX/ width);
      setCurrentIndex(currentIndex);
    }

    const goNextSlide = (e:any)=>{
      const nextSlideIndex=currentIndex +1;

      if(nextSlideIndex != Data.length){
        const offset = nextSlideIndex * width;
        ref?.current?.scrollToOffset({offset});
        setCurrentIndex(currentIndex + 1);
      }

    }
    return(

        <NativeBaseProvider>
            <SafeAreaView style={{flex:1}}>
                <FlatList  data={Data} renderItem={({item}) => <OnBoardingItem item={item}/>}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                onMomentumScrollEnd={updateIndexSlide}
                ref={ref}
               />

              <View style={styles.row}>
              {Data.map((_,index) =>(
                 <View  key={index.toString()} style={[styles.dot, currentIndex == index &&{
                   backgroundColor:'#07137D',
                   width:25,
                 },
                ]}
                 />
              ))}

           </View>

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
  row:{flexDirection:'row',position:'absolute',right:0,left:0, bottom:0,justifyContent:'center'},
    dot:{width:10, height:8,backgroundColor:'grey',borderRadius:50, marginHorizontal:5,borderWidth:1, borderColor:'grey', marginBottom:40 }


})
 export default onBoarding;