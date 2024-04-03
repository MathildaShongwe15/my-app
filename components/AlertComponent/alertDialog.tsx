import { AlertDialog, Button, Center } from "native-base"
import React from "react";

const AlertDialogComponent = (props:any) => {
    const [isOpen, setIsOpen] = React.useState(false);

   const onClose = () => setIsOpen(false);

   const cancelRef = React.useRef(null);

<Center>

<AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
  <AlertDialog.Content>
    <AlertDialog.CloseButton />
    <AlertDialog.Header>{props.info.Heading}</AlertDialog.Header>
    <AlertDialog.Body>
      {props.info.Description}
    </AlertDialog.Body>
    <AlertDialog.Footer>
      <Button.Group space={2}>
        <Button variant="outline" colorScheme="success" onPress={onClose} ref={cancelRef}>
           {props.info.Btn}
        </Button>
        <Button colorScheme="blue" onPress={onClose}>
        {props.info.Btn2}
        </Button>
      </Button.Group>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog>
</Center>
}
 export default AlertDialogComponent;

