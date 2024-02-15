
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/home';
import LoginScreen from './src/screens/Login/login';
import RegisterScreen from './src/screens/Register/register'
import { NativeBaseProvider } from 'native-base';
import { RootStackParamList } from './Routes/Routes';



const Stack = createNativeStackNavigator();

    function App() {
      return (
       
        <NavigationContainer>
          <Stack.Navigator  initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}  />  
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} /> 
          </Stack.Navigator>
        </NavigationContainer>
          
 
      );
    }
export default App;