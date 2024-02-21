/* components/Homescreen.js */
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
//import { RootStackParamList } from '../../Routes/Routes';
import {
  Avatar,
  Box,
  Center,
  Container,
  Heading,
  Icon,
  NativeBaseProvider,
  VStack,
} from "native-base";
import { LinearGradient } from "react-native-svg";
import Carsousel from "react-native-snap-carousel";
import Carousel from "react-native-snap-carousel";
import Bottom from "../../../components/BottomSheetComponent/bottomSheet";
// import {colors} from ""
// const HomeContainer = styled(Container)`
//   background-color: ${colors.secondary}`

// const TopSection = styled.View`
// `;
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <Center style={{ marginVertical: 10, marginTop:200}}>
          <Image
            source={require("../../../assets/pics/Logo (2).png")}
            style={{
              height: Dimensions.get("window").width - 100,
              width: Dimensions.get("window").width -100,
            }}
          />


          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              paddingLeft: 60,
              paddingRight: 60,
              marginLeft: 50,
              color:"#FFB400"
            }}
          >

          </Text>

          <VStack space={4} alignItems="center" >
            <Button
              // style={styles.btn}
              color="#FFB400"
              title="Login"
              onPress={() => navigation.navigate("Login")}
            />
            {/* <Icon name="cog" /> */}
          </VStack>
        </Center>
      </View>

      {/* <Bottom /> */}
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
  },
  btn:{
      width:200,
  }
});

export default HomeScreen;
