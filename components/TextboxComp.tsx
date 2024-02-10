import { Box, Button, Center, FormControl, HStack, Heading, Input, Link, VStack } from "native-base";
import React from "react";


const Example = () => {
    return <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
         <Center>
            <Heading size="lg" fontWeight="700" color="blue.800" _dark={{
            color: "warmGray.50"
            }}>
                Login Here
            </Heading>
            <Heading mt="1" _dark={{
                color: "warmGray.200"
                }} color="blue.800" fontWeight="medium" size="xs">
                    Welcome back you've been missed!
          </Heading>

         </Center>
        
         
  
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input bg="indigo.100" rounded="md" shadow={3}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input bg="indigo.100" rounded="md" shadow={3} type="password" />
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "blue.800"
            }} alignSelf="flex-end" mt="2">
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="3" colorScheme="blue" bordered >
              Sign in
            </Button>
            <HStack mt="3" justifyContent="center">
          
              <Link  _text={{
              color: "blue.800",
              fontWeight: "medium",
              fontSize: "xs"
            }} href="#">
               Don't Have an Account? Sign Up
              </Link>
           
            </HStack>
            <Heading mt="1" _dark={{
                color: "warmGray.200"
                }} color="coolGray.500"  size="2xs">
               By creating or login into an account you are agreeing with our Terms and Conditions and Privacy Statement
              </Heading >
            
          </VStack>
        </Box>
      </Center>;
  };
  function ImageFunc() {
    return <Center>
        {/* <Image size={150} borderRadius={100} source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg"
      }} alt="Alternate Text" /> */}
      </Center>;
  }
  export default Example;