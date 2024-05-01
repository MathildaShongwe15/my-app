import { useNavigation } from "@react-navigation/native";
import { Avatar,Box,Center,FormControl,Input,NativeBaseProvider,VStack,View,Button, useToast,Text, Heading} from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Icon from "react-native-vector-icons/AntDesign";

const Register = () => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [statusCode, setStatus] = useState({});
  const [data, setData] = useState({});
  const navigation = useNavigation();

useEffect(()=>{
},[])



const getContent = () =>{
  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Center>
                <Heading>Settings</Heading>
              <Avatar
                bg="amber.500"
                source={{
                  uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
                size="xl" marginTop={15}>
                NB
                <Avatar.Badge bg="green.500" />
              </Avatar>
            </Center>
            <VStack space={3} mt="2">
                <View flexDirection={"row"} marginTop={10}>
                <Icon name={"user"} size={25} color={"#B4B4B8"} />
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                     <Text style={{marginLeft:15, color:"B4B4B8"}}>Profile</Text>
                </TouchableOpacity>
             </View>
             <View flexDirection={"row"} marginTop={5}>
             <Icon name={"database"} size={25} color={"#B4B4B8"} />

                <TouchableOpacity onPress={() => navigation.navigate("ReqHistory")}>
                     <Text style={{marginLeft:15 , color:"B4B4B8"}}>Request History</Text>
                </TouchableOpacity>
             </View>
             <View flexDirection={"row"} marginTop={5}>
             <Icon name={"customerservice"} size={25} color={"#B4B4B8"} />

                <TouchableOpacity onPress={() => navigation.navigate("Complaint")} >

                     <Text style={{marginLeft:15, color:"B4B4B8"}}>Help Center</Text>
                </TouchableOpacity>
             </View>
             <View flexDirection={"row"} marginTop={5}>
             <Icon name={"book"} size={25} color={"#B4B4B8"} />

                <TouchableOpacity onPress={() => navigation.navigate("Registration Car")} >
                     <Text style={{marginLeft:15, color:"B4B4B8"}}>About</Text>
                </TouchableOpacity>
             </View>


            </VStack>
          </Box>
        </Center>
      </View>
    </NativeBaseProvider>
  ); }


  return(
    <NativeBaseProvider>
       {getContent()}
    </NativeBaseProvider>
  )
};

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white", alignItems: "center" },

});
export default Register;
