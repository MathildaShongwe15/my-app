import { AlertDialog, Avatar, Button, Center,  FormControl,  Heading,  Input,  NativeBaseProvider, VStack } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View,StyleSheet,Text, ActivityIndicator, Dimensions, Platform} from "react-native";
import LgBlockCard from "../../../components/CardComponent/LgBlockCard"
import { useNavigation } from "@react-navigation/native";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import LoadingScreens from '../Home/LoadingPage';
import Icon from 'react-native-vector-icons/AntDesign'
import BlockCard from "../../../components/CardComponent/BlockCard";
import * as Location from 'expo-location';
import * as Device from 'expo-device';

const Menu =()=> {
  const [data, setData] = useState([]);
  const [location,setLocation] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [formattedaddress, setformattedAddress] = useState();
  const [latitude,setLatitude] = useState();
  const [longitude,setLongitude] = useState();
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
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
      setCurrentIndex(currentIndex + 1);
    }

  }

  const [errorMsg, setErrorMsg] = useState('');

  const getPermissions = async() =>{

    if (Platform.OS === 'android' && !Device.isDevice) {
      setErrorMsg(
        'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
      );
      return;
    }
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let currentLocation:any = await Location.getCurrentPositionAsync({});
    setLocation(location);

      setLocation(currentLocation);
          setLatitude(currentLocation.coords.latitude);
          setLongitude(currentLocation.coords.longitude);
}
let text = 'Waiting..';

if (errorMsg) {
text = errorMsg;
} else if (location) {
text = JSON.stringify(location);
}

const state= {
  region: {
    latitude: latitude ? latitude :0,
    longitude: longitude ? longitude:0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  },
};

const reverseGeocode = async () =>{
  const reverseGeocode = await Location.reverseGeocodeAsync({
      longitude:longitude?longitude:0,
      latitude: latitude?latitude:0
  });
  setformattedAddress(reverseGeocode[0].formattedAddress);
}
  const getServices = async () =>{
    await fetch('https://enormous-reasonably-raptor.ngrok-free.app/AllServices',{
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
useEffect(() =>{
  getPermissions();
  reverseGeocode();
  },[]);
const getContent = () =>{

if(isLoading){
  return <LoadingScreens/>
}

 return  <View style={styles.Container}>
  <View style={{flexDirection: "row"}}>
  <Avatar
                bg="amber.500"
                source={{
                  uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
                size="sm"
                marginTop={6}
                marginLeft={2}
              >
                NB
                <Avatar.Badge bg="green.500" />
              </Avatar>
              <View style={{flexDirection: "column"}}>

      <Text style={{fontSize:14, marginTop:15, marginLeft:12, color:"#07137D", fontWeight:800}}>John Doe</Text>
      <View style={{flexDirection: "row"}}>
      <Icon name={"car"} size={20} color={"#07137D"}  style={{marginTop:5, marginLeft:10}} />
      <Text style={{fontSize:12, marginTop:5, marginLeft:12, color:"#07137D"}}>{formattedaddress}</Text></View>
      </View>
      </View>
      <FormControl>
      <Input   editable={false}  selectTextOnFocus={false} variant="filled"  placeholder="search"  bg="muted.200"  width={350} marginLeft={5} marginTop={5}/>
      </FormControl>
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
        />
        <View style={{flexDirection: 'row'}}>
       <Heading style={styles.Heading1}>
         Make a new Request
       </Heading>
       <Icon name={"caretright"} size={15} color={"#07137D"} style={{marginTop:30, marginLeft:10}} />
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
  Heading2:{marginLeft:20,marginTop:20,color:"#07137D",fontSize:23},
  Heading1:{marginLeft:20,marginTop:20,color:"#07137D", fontSize:19, fontWeight:'500'},
  sub:{marginLeft:20,marginTop:5,color:"#07137D", fontWeight:'400', fontSize:12 },
  row:{flexDirection:'row',position:'absolute',right:0,left:0, bottom:-20,justifyContent:'center'},
  dot:{width:10, height:8,backgroundColor:'grey',borderRadius:50, marginHorizontal:5,borderWidth:1, borderColor:'grey', marginBottom:170 }

});