import React, {createContext, useContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { registerIndieID } from 'native-notify';

interface AuthProps{

   authState?: {token:string|null; authenticated:boolean|null;role:string|null;Id:string|null;providerId:string|null;}
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
    Id:string|null;
    providerId:string|null;

  }>({
    token:null,
    authenticated:null,
    role:null,
    Id:null,
    providerId:null

  });


  const [Id, setId] = useState('');
  const [userId, setUserId] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmailAddress] = useState('');
  const [statusCode, setStatus] = useState({});
  const [data, setData] = useState({});


  const login = async (email :string ,password :string) =>{

            await fetch('https://mutt-one-calf.ngrok-free.app/Login',{
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


                      await AsyncStorage.setItem("USERID", data.Id),
                      await AsyncStorage.setItem("PROVID", data.ProviderId?? "empty"),

                      setAuthState({
                        token: data.token,
                        authenticated:true,
                        role: data.role,
                        Id:data.Id,
                        providerId:data.ProviderId
                     }),


                     setId(data.ProviderId),
                     setRole(data.role),
                     setUserId(data.Id),
                     setEmailAddress(data.Email),


                     AsyncStorage.setItem(TOKEN_KEY, data.token),
                     AsyncStorage.setItem("ROLE", role)
                     ))



                     .catch(err => console.log(err))

  };

 useEffect(() =>{
  const loadToken = async() =>{


    const getToken =await AsyncStorage.getItem(TOKEN_KEY);
    const getRole = await AsyncStorage.getItem("ROLE");
    const getUserId  = await AsyncStorage.getItem("UserKEY");
    const getProd  = await AsyncStorage.getItem("PROVID");

    if(getToken){
      setAuthState({
         token: getToken,
         authenticated:true,
         role: getRole,
         Id:userId,
         providerId:getProd
      });
    }
  }
   loadToken();
}
,[]);

const logout = async()=>{
   setData('')
   setId('')
   setRole('')
   setUserId('')
   setEmailAddress('')

  AsyncStorage.removeItem(TOKEN_KEY);
  AsyncStorage.removeItem("ROLE");
  AsyncStorage.removeItem("PROVID");
  AsyncStorage.removeItem("UserKEY");
  AsyncStorage.removeItem("USERID");
  AsyncStorage.removeItem("UserServiceKEYS");

   setAuthState({
    token:null,
    authenticated:false,
    role:null,
    Id:null,
    providerId:null
   });



}


const value ={
  onLogin: login,
  onLogout: logout,
  authState,

} ;
    return (
       <AuthContext.Provider value={value}>
        {children}
       </AuthContext.Provider>
    )
}


