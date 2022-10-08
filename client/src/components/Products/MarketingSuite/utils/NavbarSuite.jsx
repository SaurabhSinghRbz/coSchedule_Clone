import React from 'react'
import {Button, Flex, Image, Spacer, Text} from "@chakra-ui/react"
const NavbarSuite = () => {
    return (
        <Flex boxShadow={"md"}  alignItems="center" gap="2rem" p="0.5rem 1rem">
            <Image src="https://coschedule.com/img/product/coschedule-marketing-suite-logo-color.svg" h="30px"/>
            <Text fontWeight={"semibold"}>Explore</Text>
            <Spacer />
            <Text fontWeight={"semibold"} bgColor={"#f37e5d"} color="white" p="0.5rem 2rem" borderRadius={"5px"} cursor="pointer" >Get A Demo</Text>
        </Flex>
  )
}

export default NavbarSuite