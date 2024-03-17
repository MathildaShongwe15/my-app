
import { Animated, Easing, View,Text,Image } from "react-native";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";



const LoadingScreen = () => {

  const [loop, setLoop] = useState(true);
 // const animationRef = useRef<LottieView>(null);
  useEffect(() => {
    let timer = setTimeout(() => setLoop(false), 3000);
    return () => {
      clearTimeout(timer);

    };

  }, []);

  return (
    <View style={{flex:1,justifyContent: 'center',alignItems:'center', backgroundColor:"#fff"}}>
    <Image source={require("../../../assets/pics/Logo (2).png")} style={{width:250, height:250}} />
    <LottieView  autoPlay loop={loop} style={{width:200, height:200, marginTop:-50}} source={require('../../../assets/Animations/Animation - 1710671212392.json')}/>
  </View>
   );
};


export default LoadingScreen;
