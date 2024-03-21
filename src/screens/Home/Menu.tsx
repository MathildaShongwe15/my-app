import { AlertDialog, Button, Center,  Heading,  NativeBaseProvider, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View,StyleSheet,Text, ActivityIndicator} from "react-native";
import BlockCard from "../../../components/CardComponent/BlockCard"
import LgBlockCard from "../../../components/CardComponent/LgBlockCard"
import { useNavigation } from "@react-navigation/native";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import LoadingScreens from '../Home/LoadingPage';

const Menu =()=> {
  const [data, setData] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();


  const getServices = async () =>{


    // setSuccess(false);
    await fetch('https://5158-41-76-96-122.ngrok-free.app/AllServices',{
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


     // return { isLoading, success };
};

const getContent = () =>{

if(isLoading){
  return <LoadingScreens/>
}

 return  <View style={styles.Container}><Heading style={styles.Heading}>
         Browse categories

       </Heading>
       <Text style={styles.sub}>Navigate more</Text>
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

          // showsHorizontalScrollIndicator={false}
        //  alwaysBounceVertical={false}
        />

       <Heading style={styles.Heading1}>
         Make a new Request
       </Heading>
       <Text style={styles.sub}>Request Services You Need</Text><FlatList
 data={data}
 renderItem={({item}) => {
   return (

        <LgBlockCard info={item}/>

   );
 }}
 horizontal
 showsHorizontalScrollIndicator={false}
/>
</View>
};
useEffect(() =>{

  getServices()

},[])
const count: Int32 = 0;
const Categories = [
    {
      image: require("../../../assets/pics/Prof.png"),
      name: "Home " ,
      RegNumber:"Return home" ,
      nav:"Providers",
      id:1
    },
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
    {
        image: require("../../../assets/pics/History.png"),
        name: "Request History"  ,
        RegNumber:"Past Requests" ,
        id:14
      },
      {
        image: require("../../../assets/pics/settings.png"),
        name: "Settings"  ,
        RegNumber:"Manage account" ,
        id:12
      },
  ];

  // Function to handle item press



     return(

      <NativeBaseProvider>


       {getContent()}

      </NativeBaseProvider>


     );
}


export default Menu;

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white", },
  Heading:{marginLeft:20,marginTop:30,color:"#07137D"},
  Heading1:{marginLeft:20,marginTop:0,color:"#07137D"},
  sub:{marginLeft:20,marginTop:5,color:"#AAAAAA"}
});