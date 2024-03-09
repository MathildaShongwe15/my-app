import React, {createContext, useContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface AuthProps{
   authState?: {token:string|null; authenticated:boolean|null, isLoading:boolean}
   onRegister?:(email:string, password:string, role:string) => Promise<any>;
   onLogin?:(email:string, password:string, role:string) => Promise<any>;
   onLogout?: () => Promise<any>;

}

const TOKEN_KEY = "my-jwt";
export const API_URL = '';
const AuthContext = createContext<AuthProps>({});



export const useAuth = () =>{
  AsyncStorage.removeItem(TOKEN_KEY);
  return useContext(AuthContext);

}



export const AuthProvider = ({children}:any) => {

  console.log( "HELLO",AsyncStorage.getItem(TOKEN_KEY));

  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
    isLoading:boolean |null;

  }>({
    token:null,
    authenticated:null,
    isLoading:null

  });


  const login = async (email :string ,password :string, role: string) =>{

                await fetch('https://c43a-41-76-96-122.ngrok-free.app/Login',{
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
                      isLoading:true
                     }))

                    .catch(err => console.log(err))
  };


 useEffect(() =>{

  const loadToken = async() =>{
    const getToken =await AsyncStorage.getItem(TOKEN_KEY);

    if( getToken){
      setAuthState({
         token:  getToken,
         authenticated:true,
         isLoading:true

      });

    }
    console.log("stored",await AsyncStorage.getItem(TOKEN_KEY))
  }
  loadToken();
},[])

const logout = async()=>{
   AsyncStorage.removeItem(TOKEN_KEY);
   setAuthState({
    token:null,
    authenticated:false,
    isLoading:false
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



