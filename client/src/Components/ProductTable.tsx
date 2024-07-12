import { Box, Button, Flex, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"
import { AddIcon } from "@chakra-ui/icons"
import { useEffect, useState } from "react";
import { BASE_URL } from "../constant";
import axios from "axios";

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
  return (
    <>
      <ColorModeSwitch />
      <Box shadow={"md"} m="32">
        <Flex justifyContent={"space-between"} alignItems={'center'} px={'5'} mb={'10'}>
          <Heading>
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
                <Th>Is In Stock</Th>
                <Th isNumeric>Price</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((product:Product) => (
                <Tr key={product.id}>
                  <Td>{product.id}</Td>
                  <Td>{product.name}</Td>
                  <Td>{product.description}</Td>
                  <Td>{product.isInStore}</Td>
                  <Td isNumeric>{product.price}</Td>
                  <Td>25.4</Td>
                </Tr>
              ))

              }
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