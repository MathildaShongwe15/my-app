import React, {createContext, useContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface AuthProps{
   authState?: {token:string|null; authenticated:boolean|null}
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

  console.log( "HELLO",AsyncStorage.getItem(TOKEN_KEY));

  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;


  }>({
    token:null,
    authenticated:null,


  });


  const login = async (email :string ,password :string, role: string) =>{

                await fetch('https://0c3c-41-76-96-122.ngrok-free.app/Login',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify({Email:email,Password:password,Role:role})
                    })
                    .then(response => {
                      if(!response.ok){
                        throw new Error('Network response not ok'),
                        console.log(response)
                      }
                      console.log("response is okay", response)

                      return response.json();

                    })
                    .then(data =>(AsyncStorage.setItem("ROLE",data.role) ,AsyncStorage.setItem(TOKEN_KEY, data.token) ,(AsyncStorage.setItem("UserID",data.Id))))

                    .then(data =>

                    setAuthState({
                      token: TOKEN_KEY,
                      authenticated:true,

                     }))

                    .catch(err => console.log(err))
  };


 useEffect(() =>{

  const loadToken = async() =>{
    const getToken =await AsyncStorage.getItem(TOKEN_KEY);

    if( getToken){
      setAuthState({
         token: getToken,
         authenticated:true,

      });

    }
    console.log("stored",await AsyncStorage.getItem(TOKEN_KEY))
  }
  loadToken();
},[])

const logout = async()=>{

   setAuthState({
    token:null,
    authenticated:false,

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



