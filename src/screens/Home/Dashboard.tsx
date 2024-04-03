
import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions,Image} from "react-native";
import { Box, Center, Heading,NativeBaseProvider,Text,View, ZStack } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/AntDesign";
import moment from "moment";

const Dashboard = () =>{


  const [logged, setLogged] = useState(0);
  const [accepted, setAccepted] = useState(0);
  const [cancelled, setCancelled] = useState(0);
  const [pending, setpending] = useState(0);
  const [updatedDate, setUpdated] = useState('')
  const [Id, setId] = useState('')


  useEffect(() =>{
    getValues()
    },[]);

   const getValues = async () =>{
    let providerId:any = await AsyncStorage.getItem("PROVID")


    await fetch(`https://enormous-reasonably-raptor.ngrok-free.app/GetStatsById/${providerId}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        },})
        .then(response => {
          if(!response.ok){
            throw new Error('Network response not ok'),
            console.log(response)
          }
          console.log("response is okay", response)
          return  response.json();
        })
        .then(async data => (setLogged(data.values.ReqLogged), setAccepted(data.values.ReqCompleted), setpending(data.values.ReqPending), setCancelled(data.values.ReqCancelled),setUpdated(data.values.UpdatedAt)))
        .catch(err => console.log(err))
};


// const datas=[ {value:yValues[0], label:xValues[0]}, {value:80}, {value:90}, {value:70} ]

    // const screenWidth = Dimensions.get("window").width;

    //   const data = {
    //     labels: [xValues[0], xValues[1], xValues[2], xValues[3], xValues[4], xValues[5],xValues[6],xValues[7]],
    //     datasets: [
    //       {
    //         data: [yValues[0], 0, 0, 0, 0, 0,0,0],
    //         color: (opacity = 1) => `rgba(248, 175, 7, ${opacity})`, // optional
    //         strokeWidth: 2 // optional
    //       }
    //     ],
    //     legend: ["Accepted Requests Monthly"] // optional
    //   };

    return(
      <NativeBaseProvider >
        <View style={{backgroundColor:'#fff'}} maxHeight={1000}>
        <Center h="700">
        <Box bg="#DBDFEA" size="80" width={320} height={100} rounded="lg"  marginTop={-200}>
        <View style={{flexDirection: 'row'}}>
        <Heading ml="5" fontSize={15} marginTop={15} fontWeight={300}>
            Requests Pending
        </Heading>
        <Icon name={"book"} size={15} color={"#07137D"} style={{marginTop:18, marginLeft:10}} />
        </View>
            <Text style={{fontSize:11}} _light={{color: "#EE9322" }}  _dark={{ color: "violet.400"}} fontWeight="500" ml="5" mt="2">
            {pending} Requests
            </Text>
            <Text style={{fontSize:10}} _light={{color: "blue.900" }}  _dark={{ color: "violet.400"}} fontWeight="300" ml="5" mt="0">
            Updated at {moment(updatedDate).format('MMMM Do YYYY, h:mm:ss a')}
            </Text>
        </Box>
        <Box bg="#DBDFEA" size="80" width={320} height={100}  marginTop={5} rounded="lg" >
        <View style={{flexDirection: 'row'}}>

        <Heading ml="5" fontSize={15} marginTop={15} fontWeight={300}>
            Requests Accepted
        </Heading>
        <Icon name={"book"} size={15} color={"#07137D"} style={{marginTop:18, marginLeft:10}} />
        </View>
            <Text style={{fontSize:11}} _light={{color: "#54B435" }}  _dark={{ color: "violet.400"}} fontWeight="500" ml="5" mt="2">
            {accepted} Requests
            </Text>
            <Text style={{fontSize:10}} _light={{color: "blue.900" }}  _dark={{ color: "violet.400"}} fontWeight="300" ml="5" mt="0">
            Updated at {moment(updatedDate).format('MMMM Do YYYY, h:mm:ss a')}
            </Text>
            </Box>
        <Box bg="#DBDFEA" size="80" width={320} height={100}  marginTop={5} rounded="lg" >
        <View style={{flexDirection: 'row'}}>

        <Heading ml="5" fontSize={15} marginTop={15} fontWeight={300}>
            Requests Cancelled
        </Heading>
        <Icon name={"book"} size={15} color={"#07137D"} style={{marginTop:18, marginLeft:10}} />

        </View>
            <Text style={{fontSize:11}} _light={{color: "#D71313" }}  _dark={{ color: "violet.400"}} fontWeight="500" ml="5" mt="2">
            {cancelled} Requests
            </Text>
            <Text style={{fontSize:10}} _light={{color: "blue.900" }}  _dark={{ color: "violet.400"}} fontWeight="300" ml="5" mt="0">
            Updated at {moment(updatedDate).format('MMMM Do YYYY, h:mm:ss a')}
            </Text>
        </Box>
        <Box bg="#DBDFEA" size="80" width={320} height={100}  marginTop={5} rounded="lg" >
        <View style={{flexDirection: 'row'}}>

        <Heading ml="5" fontSize={15} marginTop={15} fontWeight={300}>
            Requests Logged
        </Heading>
        <Icon name={"book"} size={15} color={"#07137D"} style={{marginTop:18, marginLeft:10}} />
        </View>
            <Text style={{fontSize:11}} _light={{color: "blue.900" }}  _dark={{ color: "violet.400"}} fontWeight="500" ml="5" mt="2">
            {logged} Requests
            </Text>
            <Text style={{fontSize:10}} _light={{color: "blue.900" }}  _dark={{ color: "violet.400"}} fontWeight="300" ml="5" mt="0">
            Updated at {moment(updatedDate).format('MMMM Do YYYY, h:mm:ss a')}
            </Text>
        </Box>
      </Center>
</View>

      </NativeBaseProvider>
    )
}

export default Dashboard;


