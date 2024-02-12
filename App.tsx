
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingScreen from './components/LoadingComp'
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Profile: undefined;
};

    
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title='Go to Profile' onPress={() => props.navigation.push("Profile")} />
      <Button title='Go to Settings' onPress={() => props.navigation.push("Settings")} />
    </View>
  );
};

type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, "Settings">;

const SettingsScreen: React.FC<SettingsScreenProps> = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Button title='Go to Home' onPress={() => props.navigation.push("Home")} />
    </View>
  );
};

    function App() {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
export default App;