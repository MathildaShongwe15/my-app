import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/Home";
import Loader from "./components/LoadingComp";

const Stack = createNativeStackNavigator();

function App() {
  const navigation = useNavigation();

  return (
    <NavigationContainer>
        
       {/* <Button
      title="Back"
      onPress={() => 
        navigation.navigate(Hello)
      } */}
    
    <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="About"
                    component={Loader}
                />
            </Stack.Navigator>
    </NavigationContainer>
   
  );
}
export default App;