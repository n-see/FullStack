import { Avatar, Badge, Box, Button, Flex, Heading, HStack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"
import { AddIcon, DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons"
import { useEffect, useState } from "react";
import { BASE_URL } from "../constant";
import axios from "axios";
import ProductSkeleton from "./ProductSkeleton";

interface Product {
  id: number
  name: string
  price: number
  description: string
  isInStore: boolean
}

const ProductTable = () => {

  const [data, setData] = useState<Product[]>([])
const [isLoading, setIsLoading] = useState<boolean>(false)

const fetchData = () => {
  setIsLoading(true);
  axios
  .get(BASE_URL)
  .then((response) => {
    setData(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    setIsLoading(false);
  });
};
useEffect(() => {
  fetchData()
}, [])

if(isLoading) return <ProductSkeleton/>
  return (
    <>
      <ColorModeSwitch />
      <Box shadow={"md"} m="32">
        <Flex justifyContent={"space-between"} alignItems={'center'} px={'5'} mb={'10'}>
          <Heading fontSize={20}>
            Product List
          </Heading>
          <Button leftIcon={<AddIcon />} color={'teal.300'}>
            Add Product
          </Button>
        </Flex>
        <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Is In Stock</Th>
                <Th isNumeric>Price</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((product:Product) => (
                <Tr key={product.id}>
                  <Td>{product.id}</Td>
                  <Td>
                    <HStack>
                      <Avatar size={'sm'} name={product.name}/>
                      <Text>{product.name}</Text>
                    </HStack>
                  </Td>
                  <Td>{product.description}</Td>
                  <Td>
                    <Badge>{product.isInStore ? "Yes" : "No"}</Badge>
                  </Td>
                  <Td isNumeric>{product.price}</Td>
                  <Td>
                    <HStack>
                      <EditIcon boxSize={22} color={'orange.200'}/>
                      <DeleteIcon  boxSize={22} color={'red.400'}/>
                      <ViewIcon  boxSize={22} color={'green.300'}/>
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>

          </Table>
        </TableContainer>
        {
          data.length == 0 && <Heading p={5} textAlign={'center'} fontSize={14}> NO DATA </Heading>
        }

      </Box>
    </>
  )
}

export default ProductTable