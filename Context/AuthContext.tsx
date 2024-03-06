import React, {createContext, useContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

// export const AuthContext = createContext({} as any);
// type MyComponentProps = React.PropsWithChildren<{}>;

interface AuthProps{
   authState?: {token:string|null; authenticated:boolean|null}
   onRegister?:(email:string, password:string, role:string) => Promise<any>;
   onLogin?:(email:string, password:string, role:string) => Promise<any>;
   onLogout?: () => Promise<any>;
}

//const TOKEN_KEY = "my-jwt";
export const API_URL = '';
const AuthContext = createContext<AuthProps>({});

export const useAuth = () =>{
  return useContext(AuthContext);
}

// AsyncStorage.setItem('tokenKey', );

export const AuthProvider = ({children}:any) => {

  // const [isLoading, setIsloading] = useState(false);

  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token:null,
    authenticated:null
  });

  useEffect(() =>{
    const loadToken = async() =>{
      const getToken =await AsyncStorage.getItem('tokenKey');
      console.log("stored",getToken)

      if(getToken){

        setAuthState({
           token: getToken,
         authenticated:true
        });

      }
    }
    loadToken();

  },[])

  const login = async (email :string ,password :string, role: string) =>{
     // setIsloading(true);
        try{
            const data = {email, password,role}

                let result = await fetch('http://192.168.1.103:3000/Login',{

                    method: 'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(data)
                    });
                    result = await result.json();
                    let currentToken = await JSON.stringify(result.token);
                    //let currentRole = await JSON.stringify(result.role);

                    setAuthState({
                      token: currentToken,
                      authenticated:true
                    });
                    await AsyncStorage.setItem('token', JSON.stringify(currentToken))
                    // AsyncStorage.setItem('Role', JSON.stringify(currentRole));
                    //setIsloading(false);
                  }
                  catch(e){
                    return {error:true, msg:(e as any).response.msg}
                  }
  };
 //   setIsloading(false);

const logout = async()=>{
   AsyncStorage.removeItem('userToken');

   setAuthState({
    token:null,
    authenticated:false
   })
}

const value ={
  onLogin: login,
  onLogout: logout,
  authState
} ;

    return (
       <AuthContext.Provider value={{}}>
        {children}
       </AuthContext.Provider>

    )
}



