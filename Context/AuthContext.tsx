import React, {createContext, useContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Animated, Easing, View,Text,Image } from "react-native";
import LottieView from "lottie-react-native";


interface AuthProps{
   authState?: {token:string|null; authenticated:boolean|null;role:string|null}
   onRegister?:(email:string, password:string, role:string) => Promise<any>;
   onLogin?:(email:string, password:string, role:string) => Promise<any>;
   onLogout?: () => Promise<any>;

}

const TOKEN_KEY = "my-jwt";
export const API_URL = '';
const AuthContext = createContext<AuthProps>({});

export const useAuth = () =>{
  return useContext(AuthContext);
}


export const AuthProvider = ({children}:any) => {

  const [loop, setLoop] = useState(true);
  console.log( "HELLO",AsyncStorage.getItem(TOKEN_KEY));
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
    role: string|null;

  }>({
    token:null,
    authenticated:null,
    role:null

  });


  const login = async (email :string ,password :string) =>{

                await fetch('https://5158-41-76-96-122.ngrok-free.app/Login',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify({Email:email,Password:password})
                    })
                    .then(response => {
                      if(!response.ok){
                        throw new Error('Network response not ok'),
                        console.log(response)
                      }
                      console.log("response is okay", response)

                      return response.json();
                    })
                    .then(data =>(AsyncStorage.setItem("ROLE",data.role) ,AsyncStorage.setItem(TOKEN_KEY, data.token) ,(AsyncStorage.setItem("UserID",data.Id),AsyncStorage.setItem("ProdID",data.ProviderId))))
                    .catch(err => console.log(err))
  };

 useEffect(() =>{
  const loadToken = async() =>{

    const getToken =await AsyncStorage.getItem(TOKEN_KEY);
    const getRole = await AsyncStorage.getItem("ROLE");


    console.log(getRole);
    if(getToken != null){
      setAuthState({
         token: getToken,
         authenticated:true,
         role: getRole

      });
    }

    console.log("stored",await AsyncStorage.getItem(TOKEN_KEY))
    console.log("role",await AsyncStorage.getItem("ROLE"))
    console.log("Provider?",await AsyncStorage.getItem("ProdID"))

  }
  loadToken();
},[]);

const logout = async()=>{

   setAuthState({
    token:null,
    authenticated:false,
    role:null

   })
}
const value ={
  onLogin: login,
  onLogout: logout,
  authState
} ;

    return (
       <AuthContext.Provider value={value}>
        {children}
       </AuthContext.Provider>

    )
}



