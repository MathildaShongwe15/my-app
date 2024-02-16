
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/home';
import LoginScreen from './src/screens/Login/login';
import RegisterScreen from './src/screens/Register/register'
import ServicesScreen from './src/screens/servicerequests/servicerequests'
import { NativeBaseProvider } from 'native-base';
import { RootStackParamList } from './Routes/Routes';



const Stack = createNativeStackNavigator();

    function App() {
      return (
       
        <NavigationContainer>
          <Stack.Navigator  initialRouteName='Home'   screenOptions={{
            statusBarColor:'#535C91',
            headerStyle:{
              backgroundColor:'#535C91'
            },
            headerTintColor:'#fff',
            headerTitleAlign:'center'
          }}>
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:true}}  />  
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} /> 
            <Stack.Screen name='Services' component={ServicesScreen} /> 
          </Stack.Navigator>
        </NavigationContainer>
          
 
      );
    }
export default App;