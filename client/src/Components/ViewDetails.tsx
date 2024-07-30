import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody,DrawerFooter,HStack, Avatar, Heading,Text, VStack } from "@chakra-ui/react"
import { Product } from "./ProductTable";

interface ViewDetailProps {
    isOpen: boolean;
    onClose: () => void;
    currentData: Product
}


const ViewDetails = ({isOpen,onClose,currentData}:ViewDetailProps) => {

    
   

  return (
   <>
   
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
     
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>View Details: {currentData.name}</DrawerHeader>

          <DrawerBody>
           <HStack>
                <Avatar name={currentData.name} size={'lg'}/>
                <VStack>
                <Heading fontSize={16}>
                    {currentData.name}
                </Heading>
                <Heading fontSize={20}>
                    ${currentData.price}
                </Heading>
                <Text>
                    {currentData.description}
                </Text>
                    
                </VStack>
           </HStack>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="red" variant='outline' mr={3} onClick={onClose}>
            Close
            </Button>
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
   </>
  )
}

export default ViewDetails