import { Avatar, Badge, Box, Button, Flex, Heading, HStack, Skeleton, SkeletonCircle, SkeletonText, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"


const ProductSkeleton = () => {
  return (
    <>
    <Box shadow={'md'} rounded={"md"} m={32}>
        <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        px={'5'}
        mb={10}
        >
            <Heading>
                <Skeleton>
                    Product List
                </Skeleton>
            </Heading>
            <Button leftIcon={<AddIcon />} color={"teal.300"}>
            <Skeleton>
                Add Product
            </Skeleton>
            </Button>
        </Flex>
        <TableContainer>
            <Table variant='striped' colorScheme="teal">
                <Thead>
                    <Tr>
                        <Th>
                            <Skeleton>
                                ID
                            </Skeleton>
                        </Th>
                        <Th>
                            <Skeleton>
                                Name
                            </Skeleton>
                        </Th>
                        <Th>
                            <Skeleton>
                                Description
                            </Skeleton>
                        </Th>
                        <Th>
                            <Skeleton>
                                Is In Stock
                            </Skeleton>
                        </Th>
                        <Th isNumeric>
                            <Skeleton>
                                Is In Stock
                            </Skeleton>
                        </Th>
                        <Th>
                            <Skeleton>
                                Action
                            </Skeleton>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                {Array.from({length:5}).map((_, index) => (
                        <Tr key={index}>
                            <Td><Skeleton>01</Skeleton></Td>
                            <Td>
                            <HStack>
                                <SkeletonCircle>AD</SkeletonCircle>
                                <Text><Skeleton>Product Name</Skeleton></Text>
                            </HStack>
                            </Td>
                            <Td><Skeleton>Product Description</Skeleton></Td>

                            <Td>
                                <Badge><Skeleton>Yes</Skeleton></Badge>
                            </Td>
                            <Td isNumeric><Skeleton>1234</Skeleton></Td>
                            <Td>
                                <HStack>
                                    <SkeletonCircle>1</SkeletonCircle>
                                    <SkeletonCircle>1</SkeletonCircle>
                                    <SkeletonCircle>1</SkeletonCircle>
                                </HStack>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
                    {/* {Array.from({length:5}).map((index) => (
                        <Tr key={product.id}>
                            <Td>01</Td>
                            <Td>
                            <HStack>
                                <Avatar name={'AD'} />
                                <Text>{product.name}</Text>
                            </HStack>
                            </Td>
                            <Td>{product.description}</Td>

                            <Td>
                                <Badge>{product.isInStore ? "Yes":"No"}</Badge>
                            </Td>
                            <Td isNumeric>{product.price}</Td>
                            <Td>25.4</Td>
                        </Tr>
                    ))}
                </Tbody> */}
            </Table>
        </TableContainer>
        {DataTransfer.length == 0 && (
            <Heading p={5} textAlign={"center"} fontSize={14}>
                {" "}
                No Data
            </Heading>
        )}
    </Box>
    </>
  )
}

export default ProductSkeleton