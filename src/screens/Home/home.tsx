/* components/Homescreen.js */
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
//import { RootStackParamList } from '../../Routes/Routes';
import { Avatar, Box, Center, Container, Heading, NativeBaseProvider, VStack } from 'native-base';
import { LinearGradient } from 'react-native-svg';
// import {colors} from ""
// const HomeContainer = styled(Container)`
//   background-color: ${colors.secondary}`


// const TopSection = styled.View`
// `;
const HomeScreen  = () =>{
  const navigation = useNavigation();
  return (
   <NativeBaseProvider>
      {/* <VStack space={1} alignItems="center">
      <Avatar bg="green.500" source={{
      uri: ""
    }}>
        AJ
      </Avatar>
      <Heading>Let's get started</Heading>
      <View style={{marginVertical:22}}>
        <Text>Easy connection to road assistance</Text>
      </View>
      <Center>
      

           <Button title='Go to Home' onPress={() => navigation.navigate("Login")} />
     </Center>
      </VStack>
     
    */}
    
      <Box>
        <Box>
          <Center>
          <Heading>Easy to.</Heading>
          <Heading>TankIt.</Heading>  
          </Center>

        </Box>
        
      </Box>
    </NativeBaseProvider>
  );
};


export default HomeScreen;