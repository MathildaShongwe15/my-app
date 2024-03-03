import React, {createContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({} as any);
type MyComponentProps = React.PropsWithChildren<{}>;


export const AuthProvider = ({children} : MyComponentProps) =>{

  const [isLoading, setIsloading] = useState(false);
  const [userToken, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState('');

  const login =() =>{
    setToken('djkfnejdfj');
    AsyncStorage.setItem('userToken', 'djkfnejdfj')
    const login =() =>{
        setToken('djkfnejdfj');
        const savaData = async () =>{

            const data = {email, password}
           try{
                let result = fetch('http://192.168.1.103:3000/Login',{

                    method: 'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(data)
                    });
                    result = (await result).json();
                    let userInfoToken = result;
                    setUserInfo(userInfo);
                    setToken(userInfo);
                    console.warn(result);

          }
            catch(e){
              console.error(e);

          }
        }
    setIsloading(false);
  }

  const logout = () =>{
    setIsloading(true);
    setToken('');
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');

    setIsloading(false);
  }

  const isLoggedIn = async () =>{
    try{
        setIsloading(true);

        let userToken = await AsyncStorage.getItem('userToken');
        let userInfo = await AsyncStorage.getItem('userInfo');
        userInfo = JSON.parse(userInfo!);

        if(userInfo){
            setToken(userToken!);
            setIsloading(true);
        }
        setIsloading(false);


    }
    catch(e){
        console.log(`isLogged in error ${e}`);

    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

    return (
       <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo}}>
        {children}
       </AuthContext.Provider>

    )
}
}


