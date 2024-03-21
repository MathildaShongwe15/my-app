
import React from "react";
import { StyleSheet, View,Text, Dimensions} from "react-native";
import { Avatar, Card, IconButton } from 'react-native-paper';

import AntIcon from "react-native-vector-icons/AntDesign";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { Badge, HStack, VStack } from "native-base";
import { baseFontSize } from "native-base/lib/typescript/theme/tools";
import { color } from "native-base/lib/typescript/theme/styled-system";
const Dashboard = () =>{
    const screenWidth = Dimensions.get("window").width;
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June","Jul","Aug"],
        datasets: [
          {
            data: [20, 0, 0, 0, 0, 0,0,0],
            color: (opacity = 1) => `rgba(248, 175, 7, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Accepted Requests Monthly"] // optional
      };
    return(
         <View style={{flex:1, backgroundColor:'#fff'}}>
                <View style={{flex:1, backgroundColor:'#07137D',shadowColor:"#fff", borderRadius:1}}>
                    <Text style={{color:"#FFB400", fontSize:25, marginTop:10, marginLeft:10, fontWeight:600 }}>Welcome Back, Jane Doe</Text>
                  <Text style={{color:"#FFB400", fontSize:15, marginTop:6, marginLeft:10, fontWeight:500 }}>View your Monthly Stats</Text>
                  <Text style={{color:"#FFB400", fontSize:8, marginTop:5, marginLeft:10, fontWeight:400 }}>Take a look at what have you been up to </Text>

            </View>
            <View style={{flex:2, backgroundColor:'#fff'}}>
                <View>
                <LineChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={{
                        backgroundColor: "#07137D",
                        backgroundGradientFrom: "#07137D",
                        backgroundGradientTo: "#07137D",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                    }}
                />
                </View>
            </View>
            {/* <Text style={{color:"#07137D", fontSize:25, marginTop:10, marginLeft:0, fontWeight:600 }}>Welcome Back, Jane Doe</Text> */}
            <View style={{flex:3, backgroundColor:'#fff', flexDirection:'column'}}>


            <Card.Title
                title="Requests Pending"
                subtitle="0 Requests"
                subtitleStyle={{ color: "blue" }}
                left={(props) => <Avatar.Icon {...props} icon="access-point"  />}

            />
             <Card.Title
                title="Requests Completed"
                subtitle="0 Requests"
                subtitleStyle={{ color: "green" }}

                // titleStyle={}
                left={(props) => <Avatar.Icon {...props} icon="access-point"  />}

            />
             <Card.Title
                title="Requests Cancelled"
                subtitle="0 Requests"
                subtitleStyle={{ color: "red" }}

                left={(props) => <Avatar.Icon {...props} icon="access-point"  />}

            />
             <Card.Title
                title="Requests Logged"
                subtitle="0 Requests"
                subtitleStyle={{ color: "orange" }}
                // titleStyle={}
                left={(props) => <Avatar.Icon {...props} icon="access-point"  />}

            />
            </View>

          </View>


    )
}

export default Dashboard;


