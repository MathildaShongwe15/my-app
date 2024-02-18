import { AlertDialog, Button, Center, NativeBaseProvider } from "native-base"
import React from "react";

const AlertDialogComponent = () => {
    const [isOpen, setIsOpen] = React.useState(false);

   const onClose = () => setIsOpen(false);
 
   const cancelRef = React.useRef(null);
  
<Center>
     
<AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
  <AlertDialog.Content>
    <AlertDialog.CloseButton />
    <AlertDialog.Header>Order Petrol</AlertDialog.Header>
    <AlertDialog.Body>
      Fuel delivery to your pinned location
    </AlertDialog.Body>
    <AlertDialog.Footer>
      <Button.Group space={2}>
        <Button variant="outline" colorScheme="success" onPress={onClose} ref={cancelRef}>
           Schedule
        </Button>
        <Button colorScheme="success" onPress={onClose}>
         Order Now
        </Button>
      </Button.Group>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog>
</Center>
}

