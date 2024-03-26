import React, {createContext, useContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Animated, Easing, View,Text,Image } from "react-native";
import LottieView from "lottie-react-native";
import { registerIndieID } from 'native-notify';
import { Box, useToast } from 'native-base';


interface AuthProps{
   authState?: {token:string|null; authenticated:boolean|null;role:string|null}
   onRegister?:(email:string, password:string, serviceProvider:string) => Promise<any>;
   onLogin?:(email:string, password:string) => Promise<any>;
   onLogout?: () => Promise<any>;

}

const TOKEN_KEY = "my-jwt";
export const API_URL = '';
const AuthContext = createContext<AuthProps>({});

export const useAuth = () =>{
  return useContext(AuthContext);
};

export const AuthProvider = ({children}:any) => {

  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
    role: string|null;

  }>({
    token:null,
    authenticated:null,
    role:null

  });


  const [Id, setId] = useState('');
  const [userId, setUserId] = useState('');

  const [role, setRole] = useState('');
  const [statusCode, setStatus] = useState({});

  const login = async (email :string ,password :string) =>{

                await fetch('https://5466-105-224-65-25.ngrok-free.app/Login',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify({Email:email,Password:password})
                    })
                    .then(response => {
                      if(!response.ok){
                        setStatus(response.status);
                        throw new Error('Network response not ok'),
                        console.log(response)
                      }
                      setStatus(response.status);
                      console.log("response is okay", response)

                      return response.json();
                    })
                    .then(async data =>(

                      setAuthState({

                        token: data.token,
                        authenticated:true,
                        role: data.role

                     })

                     ,
                     setId(''),
                     setRole(''),
                     setUserId(''),
                     setId(data.ProviderId),
                     setRole(data.role),
                     setUserId(data.Id),

                     console.log("ROLE?????",role),
                     console.log("USER?????",userId),
                     AsyncStorage.setItem(TOKEN_KEY, data.token),
                     AsyncStorage.setItem("ROLE", role),
                     AsyncStorage.setItem("USERID", userId),
                     AsyncStorage.setItem("PROVID", Id),
                     console.log("HAIBO PROD",Id)

                     ))
                     .then(async () =>{

                      if( role === 'SERVICE PROVIDER'){
                        AsyncStorage.setItem("UserServiceKEYS", userId);
                        registerIndieID(Id, 19822, '5ba8jxbIfqSDiiLwi2SrvX');

                      }
                      if(role ==='CUSTOMER'){

                         AsyncStorage.setItem("UserKEY", userId)
                         console.log("USEKEY?",userId)

                      }})
                     .catch(err => console.log(err))

  };

//   const register = async (email :string ,password :string,first_Name:string,last_Name:string,phone ) =>{

//     await fetch('https://5158-41-76-96-122.ngrok-free.app/Auth',{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json',
//         },
//         body: JSON.stringify({Email:email,Password:password})
//         })
//         .then(response => {
//           if(!response.ok){
//             throw new Error('Network response not ok'),
//             console.log(response)
//           }
//           console.log("response is okay", response)

//           return response.json();
//         })
//         .catch(err => console.log(err))
// };




 useEffect(() =>{
  const loadToken = async() =>{

    const getToken =await AsyncStorage.getItem(TOKEN_KEY);
    const getRole = await AsyncStorage.getItem("ROLE");
    const getUserId  = await AsyncStorage.getItem("UserKEY");

    console.log("STORED USERID", await getUserId)

    console.log("stored token:", getToken);

    if(getToken){
      setAuthState({
         token: getToken,
         authenticated:true,
         role: getRole

      });
    }

    console.log("stored",await AsyncStorage.getItem(TOKEN_KEY))
    console.log("role",await AsyncStorage.getItem("ROLE"))
    console.log("Provider?",await AsyncStorage.getItem("ProdID"))
    console.log("USEKEY?",await AsyncStorage.getItem("UserKEY"))



  }
  loadToken();
},[]);

const logout = async()=>{
//Delete token
  AsyncStorage.removeItem(TOKEN_KEY);
  AsyncStorage.removeItem("ROLE");
  AsyncStorage.removeItem("PROVID");
  AsyncStorage.removeItem("UserKEY");
  AsyncStorage.removeItem("UserServiceKEYS");


  //reset state
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



