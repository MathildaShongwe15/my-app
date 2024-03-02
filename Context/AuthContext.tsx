import React, {createContext, useState} from 'react'


export const AuthContext = createContext({} as any);
type MyComponentProps = React.PropsWithChildren<{}>;
export const AuthProvider = ({children} : MyComponentProps) =>{

  const [isLoading, setIsloading] = useState(false);
  const [userToken, setToken] = useState('');
  const login =() =>{
    setToken('djkfnejdfj');
    setIsloading(false);
  }

  const logout = () =>{
    setToken('');
    setIsloading(false);
  }
    return (
       <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
        {children}
       </AuthContext.Provider>

    )
}


