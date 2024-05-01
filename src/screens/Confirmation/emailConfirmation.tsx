import {Box,Center,Heading, NativeBaseProvider,VStack,View,Button, Link} from "native-base";
import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import {  Image,Text } from 'react-native';
import { openInbox } from "react-native-email-link";
import { Linking } from 'react-native';

const EmailConfirmation = () => {
    const openGmailApp = async() => {
        try {
            await openInbox( {
                message: "Whatcha wanna do?",
                cancelLabel: "Go back!",
              } );
          } catch (error) {
            console.error('Error:', error);
          }
      };
  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Center>
            <Image
            source={require("../../../assets/pics/Email.png")}
            style={{
              height: Dimensions.get("window").width - 200,
              width: Dimensions.get("window").width -200,
              marginTop:10
            }}
          />
            </Center>
            <VStack space={3} mt="2">

            <Center>
            <Heading style={{color:'#07137D', fontWeight:'400'}}>Check your Email</Heading>
            </Center>
              <Text style={{fontWeight:'300'}}>To confirm your email address tap the button in the email we sent to {} </Text>
              <Button
                onPress={() => openGmailApp()}
                style={{backgroundColor:"#07137D", marginTop:35}}
              >Open Email App</Button>
              <Center>
                <Link  _text={{ fontSize: "xs", fontWeight: "500", color: "blue.800"}}  mt="2" onPress={() => openInbox()}>
                Already have an Account?
              </Link>

              </Center>
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
export default EmailConfirmation;
