import React, { useContext } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { ProgressProvider, useStep } from '../../Context/ProgressContext';
import { Button, NativeBaseProvider } from 'native-base';

 const ButtonComp = () => {
    const { updateProgress} = useStep();


  return (
    <NativeBaseProvider>

          <Button width={100}height={10} onPress={updateProgress}>Hello</Button>

</NativeBaseProvider>
  );
};
export default ButtonComp;
