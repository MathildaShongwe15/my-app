import { AlertDialog, Button, Center,  Heading,  NativeBaseProvider, VStack } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View,StyleSheet,Text, ActivityIndicator, Dimensions} from "react-native";
import BlockCard from "../../../components/CardComponent/BlockCard"
import LgBlockCard from "../../../components/CardComponent/LgBlockCard"
import { useNavigation } from "@react-navigation/native";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import LoadingScreens from '../Home/LoadingPage';
import Icon from 'react-native-vector-icons/AntDesign'

const Menu =()=> {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
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

    if(nextSlideIndex != data.length){
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentIndex(currentIndex + 1);
    }

  }

  const getServices = async () =>{


    // setSuccess(false);
    await fetch('https://5466-105-224-65-25.ngrok-free.app/AllServices',{
      method:'GET',
      headers:{
          'Content-Type':'application/json',
      },})
      .then(response => {
        if(!response.ok){
          throw new Error('Network response not ok'),
          console.log(response.status)
        }

          console.log("response is okay", response.status)

             return response.json();

      })
      .then(data => (setData(data.services), setIsLoading(false)))
      .catch(err => console.log(err))
};

const getContent = () =>{

if(isLoading){
  return <LoadingScreens/>
}

 return  <View style={styles.Container}>
    <Heading style={styles.Heading2}>
              Welcome Back, John Doe
          </Heading>
          <View style={{flexDirection: 'row'}}>
          <Heading style={styles.Heading}>
            Browse categories
          </Heading>
          <Icon name={"caretright"} size={15} color={"#07137D"} style={{marginTop:35, marginLeft:10}} />


          </View>
        <FlatList
          data={Categories}
          renderItem={({item}) => {
            return (

              <TouchableOpacity  onPress={() => navigation.navigate(item.nav)}>
                 <BlockCard info={item}/>

              </TouchableOpacity>
            );
          }}
          keyExtractor={(items) => items.id.toString()}
          horizontal


           showsHorizontalScrollIndicator={false}
        //  alwaysBounceVertical={false}
        />
        <View style={{flexDirection: 'row'}}>
       <Heading style={styles.Heading1}>
         Make a new Request
       </Heading>
       <Icon name={"caretright"} size={15} color={"#07137D"} style={{marginTop:20, marginLeft:10}} />
      </View>
       <Text style={styles.sub}>Request Services You Need</Text><FlatList
          data={data}
          renderItem={({item}) => {
    return (

          <LgBlockCard info={item}/>

    );
 }}
 horizontal
 showsHorizontalScrollIndicator={false}
 pagingEnabled={true}
 onMomentumScrollEnd={updateIndexSlide}
 ref={ref}
/>
<View style={styles.row}>
              {data.map((_,index) =>(
                 <View  key={index.toString()} style={[styles.dot, currentIndex == index &&{
                   backgroundColor:'#07137D',
                   width:25,
                 },
                ]}
                 />
              ))}

           </View>
</View>
};
useEffect(() =>{

  getServices()

},[])
const count: Int32 = 0;
const Categories = [
    {
      image: require("../../../assets/pics/carIcon.png"),
      name: "My Vehicles"  ,
      RegNumber:"Vehicles Added" ,
      nav:"ViewVehicles",
      id:2
    },
    {
      image: require("../../../assets/pics/cart.png"),
      name: "Requests",
      RegNumber:"Recent Requests",
      nav:"Requests",
      id:3
    },
    {
      image: require("../../../assets/pics/img.png"),
      name: "Profile"  ,
      RegNumber:"Update user Profile" ,
      nav:"Profile",
      id:4
    },
      {
        image: require("../../../assets/pics/settings.png"),
        name: "Settings"  ,
        RegNumber:"Manage account" ,
        id:5
      },
  ];
  const requests = [
    {
      image: require("../../../assets/pics/Prof.png"),
      name: "Home " ,
      RegNumber:"Return home" ,
      nav:"Home",
      id:6
    },
    {
      image: require("../../../assets/pics/carIcon.png"),
      name: "My Vehicles"  ,
      RegNumber:"Vehicles Added" ,
      nav:"My Vehicles",
      id:5
    },
    {
      image: require("../../../assets/pics/cart.png"),
      name: "Requests",
      RegNumber:"Pending requests",
      nav:"Requests",
      id:9
    },
    {
      image: require("../../../assets/pics/img.png"),
      name: "Profile"  ,
      RegNumber:"Update user Profile" ,
      nav:"Profile",
      id:10
    },


  ];

     return(

      <NativeBaseProvider>
       {getContent()}
      </NativeBaseProvider>

     );
}


export default Menu;

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white"},
  Heading:{marginLeft:20,marginTop:25,color:"#07137D",fontSize:19,fontWeight:'500'},
  Heading2:{marginLeft:20,marginTop:50,color:"#07137D",fontSize:23},
  Heading1:{marginLeft:20,marginTop:10,color:"#07137D", fontSize:19, fontWeight:'500'},
  sub:{marginLeft:20,marginTop:5,color:"#07137D", fontWeight:'400', fontSize:12 },
  row:{flexDirection:'row',position:'absolute',right:0,left:0, bottom:0,justifyContent:'center'},
  dot:{width:10, height:8,backgroundColor:'grey',borderRadius:50, marginHorizontal:5,borderWidth:1, borderColor:'grey', marginBottom:170 }

});