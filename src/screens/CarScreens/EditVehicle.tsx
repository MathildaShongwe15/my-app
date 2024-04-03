import { useNavigation } from "@react-navigation/native";
import { Avatar,Box,Center,FormControl,Input,NativeBaseProvider,VStack,View,Button, Heading,Text, useToast} from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Register = ({route}:any) => {

  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [reg, setRegNo] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [statusCode, setStatus] = useState({});



  let VehicleId: any = route.params.ParamKey;

 const [data, setData] = useState({});

  const getVehicleData = async () =>{
        await fetch(`https://enormous-reasonably-raptor.ngrok-free.app/GetVehicleByVehicleId/${VehicleId}`,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
          })
          .then(response => {
            if(!response.ok){

              throw new Error('Network response not ok'),
              console.log(response)
            }

            console.log("response is okay", response)
            return response.json();
          })
          .then(data => (setData(data.vehicle)))
          .catch(err => console.log(err))



  }
  const checkResponse=()=>{
    checkToast();
    updateVehicle();

 }
useEffect(()=>{
  getVehicleData();
},[])

const toast = useToast();
const checkToast = () =>{
  if(statusCode == 200){

        toast.show({
          placement: "bottom",
          render: () => {
            return <Box bg="#65B741" px="10" py="5" mb={655} rounded="md" >
                    <Text>You have successfully updated your vehicle</Text>
                  </Box>
          }
        })

  }
  if(statusCode == 400){

      toast.show({
        render: () => {
          return <Box bg="red.500"px="10" py="5" mb={705}  rounded="md" >
                  <Text>Something went wrong!</Text>
                </Box>
        }
      })

  }
}
const updateVehicle = async () =>{

  const data1 = {VehicleBrand:brand,VehicleModel:model,RegNo:reg,Color:color,Description:description}
  try{
       let result = await fetch(`https://enormous-reasonably-raptor.ngrok-free.app/UpdateVehicle/${VehicleId}`,{

           method: 'PUT',
           headers:{
               'Accept': 'application/json',
               'Content-Type':'application/json'
           },
           body: JSON.stringify(data1)

           })
           .then(response => {
            if(!response.ok){
              setStatus(response.status);
              throw new Error('Network response not ok'),
              console.log(response)
            }
            setStatus(response.status);
            console.log("response is okay", response)
            return response.json();
          })
           .catch(err => console.log(err))
 }
   catch(e){
     console.error(e);

 }
}
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
          <View style={{flexDirection:'column'}}>
          <View style={{flexDirection: 'row'}}>
          <Heading
            mt="2"
            ml="0"
            size="md"
            color="#07137D"
            _dark={{
              color: "#07137D",
            }}
            fontWeight="500"
          >
            Update Vehicle
          </Heading>
          <Icon name={"form"} size={25} color={"#07137D"} style={{marginTop:10, marginLeft:15}} />

           </View>
            <Text fontSize={12} mt={2} color={"#07137D"} >Update your Vehicle Information below</Text>
            </View>
            <VStack space={3} mt="2">
              <FormControl>
                <FormControl.Label mt={5}>Vehicle Brand:</FormControl.Label>
                <Input mt={2} variant="filled"  placeholder={data.VehicleBrand}  bg="muted.100"   value={brand} onChangeText={text => setBrand(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label mt={3}>Vehicle Model:</FormControl.Label>
                <Input mt={2} variant="filled" placeholder={data.VehicleModel}  bg="muted.100"  value={model} onChangeText={text => setModel(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label mt={3}>Registration Number:</FormControl.Label>
                <Input mt={2} variant="filled" placeholder={data.RegNo}  bg="muted.100"  value={reg} onChangeText={text => setRegNo(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label mt={3}>Color of Vehicle:</FormControl.Label>
                <Input  mt={2} variant="filled" placeholder={data.Color} bg="muted.100"  value={color} onChangeText={text => setColor(text)}  />
              </FormControl>
              <FormControl>
              <FormControl.Label>Description:</FormControl.Label>
                <Input mt={2} variant="filled" placeholder={data.Description} bg="muted.100"  value={description} onChangeText={text => setDescription(text)}  />
              </FormControl>

               <Button size="md" colorScheme="blue" mt="10" width={280} height={50} backgroundColor={"#07137D"}  onPress={checkResponse}>
                  Update vehicle
            </Button>

            </VStack>
          </Box>
        </Center>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white", alignItems: "center" },

});
export default Register;
