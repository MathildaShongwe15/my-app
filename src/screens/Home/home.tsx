/* components/Homescreen.js */
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button,Image, Dimensions,StyleSheet } from 'react-native';
//import { RootStackParamList } from '../../Routes/Routes';
import { Avatar, Box, Center, Container, Heading, Icon, NativeBaseProvider, VStack } from 'native-base';
import { LinearGradient } from 'react-native-svg';
import Carsousel from 'react-native-snap-carousel';
import Carousel from 'react-native-snap-carousel';
import Bottom from '../../../components/BottomSheetComponent/bottomSheet';
// import {colors} from ""
// const HomeContainer = styled(Container)`
//   background-color: ${colors.secondary}`


// const TopSection = styled.View`
// `;
const HomeScreen  = () =>{
  const navigation = useNavigation();
  
  return (
   <NativeBaseProvider>
     
    
 
       <View style={styles.Container}>

         <Center style={{marginVertical:10}}>
          <Image source={require('../../../assets/pics/CityDriver.png')} style={{height: Dimensions.get('window').width, width: Dimensions.get('window').width}}/>
        
           <Text style={{fontSize: 40}} >Easy to</Text>
           <Text style={{fontSize: 50, fontWeight:'700'}} >TankIt</Text>
           <Text style={{marginTop:10, fontSize:16, paddingLeft:60, paddingRight:60, marginLeft:50}}>Easy access to Road Assistance when you need it</Text>            
        
           
          
          <VStack space={4} alignItems="center">
            <Button color='#65B741' title='Login' onPress={() => navigation.navigate("Login")} />
            {/* <Icon name="cog" /> */}
          </VStack>
           
           
          
         </Center>
       </View>
          
<Bottom/>
        
    
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  Container:{position: 'absolute',backgroundColor: '#D7E4C0', alignItems: 'center'

  }
})


export default HomeScreen;