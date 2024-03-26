
import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions,Image} from "react-native";
import { Avatar, Card, IconButton ,Button} from 'react-native-paper';
import {
  LineChart,
} from "react-native-chart-kit";


import AntIcon from "react-native-vector-icons/AntDesign";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { blue200 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { Box, Center, Heading,NativeBaseProvider,Text,View, ZStack } from "native-base";

const Dashboard = () =>{


  const [xValues, setXValues] = useState([]);
  const [yValues, setYalues] = useState([]);
  const [dataChart, setDataChart] = useState(null);

  useEffect(() =>{




    },[]);

   const getValues = async () =>{

    await fetch('https://5466-105-224-65-25.ngrok-free.app/GetGraphValues',{
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
        .then(async data => ( await setDataChart(data),await setXValues(data.values.map(({XLabel}) => XLabel)), await setYalues(data.values.map(({YCount}) => YCount))))
        .catch(err => console.log(err))
};


// const datas=[ {value:yValues[0], label:xValues[0]}, {value:80}, {value:90}, {value:70} ]

    const screenWidth = Dimensions.get("window").width;

      const data = {
        labels: [xValues[0], xValues[1], xValues[2], xValues[3], xValues[4], xValues[5],xValues[6],xValues[7]],
        datasets: [
          {
            data: [yValues[0], 0, 0, 0, 0, 0,0,0],
            color: (opacity = 1) => `rgba(248, 175, 7, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Accepted Requests Monthly"] // optional
      };

    return(
      <NativeBaseProvider >
        <View style={{backgroundColor:'#fff'}} maxHeight={1500}>
        <Center h="900">
        <Box _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "#ffff"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}  bg="gray.300" size="80" width={380} height={180} rounded="lg" marginTop={-150}/>
        <Box bg="gray.300" size="80" width={380} height={180}  marginTop={5} rounded="lg" >

        <Heading size="lg"  ml="5">
Requests Logged</Heading>
            <Text style={{fontSize:20}} _light={{
            color: "blue.900"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="5" mt="10">
            150 Requests            </Text>



            </Box>
        <Box bg="gray.300" size="80" width={380} height={180}  marginTop={5} rounded="lg" />


      </Center>
</View>
      </NativeBaseProvider>
    )
}

export default Dashboard;


