import React, { useContext } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { Button, NativeBaseProvider,Text} from 'native-base';
import Btn from '../ProgressComponent/ButtonComponent'
import { useStep } from '../../Context/ProgressContext';

const ProgressIndicator= () => {
    const { currentStep} = useStep();

  const labels = ["Request Placed","Accepted","On the way","Arrived","Completed"];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#87A922',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#87A922',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#87A922',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#87A922',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#87A922',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#87A922'
  }

  return (
    <NativeBaseProvider>
    <StepIndicator
    customStyles={customStyles}
    currentPosition={currentStep}
    labels={labels}
/>
</NativeBaseProvider>
  );
};

export default ProgressIndicator;