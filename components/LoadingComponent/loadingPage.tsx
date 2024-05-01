
import { Animated, Easing, View,Text,Image } from "react-native";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";

const LoadingScreen = () => {

  const [loop, setLoop] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => setLoop(false), 20000);
    return () => {
      clearTimeout(timer);
    };

  }, []);

  return (
    <View style={{flex:1,justifyContent: 'center',alignItems:'center', backgroundColor:"#fff"}}>
    <LottieView  autoPlay loop={loop} style={{width:250, height:250, marginTop:-150}} source={require('../../assets/Animations/Animation - 1710869161163.json')}/>
  </View>
   );
};

export default LoadingScreen;
