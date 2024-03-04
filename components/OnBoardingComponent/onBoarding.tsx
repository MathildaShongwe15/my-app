import { NativeBaseProvider,View } from "native-base";
import React from "react"
import { TouchableOpacity,FlatList } from "react-native"
import OnBoardingItem from './onBoardingItem'
import Animated from "react-native-reanimated";
const Data = [
    {
      title: "Fuel",
      description: "30min",
      image: require("../../assets/pics/f.png"),
      id: 1,

    },
    {
      title: "Fuel",
      description: "30min",
      image: require("../../assets/pics/f.png"),
      id: 2,
    },
    {
      title: "Fuel",
      description: "30min",
      image: require("../../assets/pics/f.png"),
      id: 3,
    },

  ];

 const onBoarding = () => {


    return(

        <NativeBaseProvider>
            <View>
                <FlatList data={Data} renderItem={({item}) => <OnBoardingItem item={item}/>}
                keyExtractor={item => item.id}


                showsHorizontalScrollIndicator={false}



                />
            </View>
        </NativeBaseProvider>
    )
 }

 export default onBoarding;