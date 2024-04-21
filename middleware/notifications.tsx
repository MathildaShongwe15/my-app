import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Button, View } from 'react-native';

export default function App() {
  const Notify = async () =>{
    let userProviderId = await AsyncStorage.getItem("UserServiceKEY");
    await fetch('https://app.nativenotify.com/api/indie/group/notification',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
          subIDs: userProviderId,
          appId: 19822,
          appToken: '5ba8jxbIfqSDiiLwi2SrvX',
          title: 'put your push notification title here as a string',
          message: 'put your push notification message here as a string'
      })
        })
        .then(response => {
          if(!response.ok){
            throw new Error('Network response not ok'),
            console.log(response)
          }
          console.log("response is okay", response)

          return response.json();
        })
        .catch(err => console.log(err))
};
  return (
      <View>
        <Button title='HELLO PRESS ME' onPress={()=>Notify()}></Button>
      </View>
  )
}
