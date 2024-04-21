import React, {createContext,useReducer, useContext, useEffect, useState, useCallback} from 'react'

interface ProgressContextProps{
    currentStep?:number,
    updateProgress?:()=>void;
}
const value = {
    setValue :0
}
const ProgressContext = createContext<ProgressContextProps>({
    currentStep:0,
    updateProgress:()=>{}
});

export const ProgressProvider =({children}:any) =>{
    const [currentStep, setProgressValues] = useState(0);
    const UpdateProgress =()=>{
        setProgressValues((c) =>c+1);
      };
      const handleClick = useCallback(UpdateProgress,[currentStep])
const value={
    currentStep,
    updateProgress:handleClick
}
 return(
    <ProgressContext.Provider value={value}>
        {children}
    </ProgressContext.Provider>
 )


}
export const useStep =() =>{ return useContext(ProgressContext)};