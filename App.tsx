
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home';
import LoadingScreen from './components/LoadingComp';
import { NativeBaseProvider } from 'native-base';
import { RootStackParamList } from './Routes/Routes';



const Stack = createNativeStackNavigator();

    function App() {
      return (
       
        <NavigationContainer>
          <Stack.Navigator  initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />  
            <Stack.Screen name='Loading' component={LoadingScreen} /> 
          </Stack.Navigator>
        </NavigationContainer>
          
 
      );
    }
export default App;