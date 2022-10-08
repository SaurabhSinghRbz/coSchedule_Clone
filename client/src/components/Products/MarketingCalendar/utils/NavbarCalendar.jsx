import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
const NavbarCalendar = () => {
  return (
    <Flex
      alignItems="center"
      p="2"
      fontWeight={"semibold"}
      color="white"
      bgGradient="linear-gradient(90deg,#f37e5d 0%,#f9a97d)"
    >
      <Flex alignItems={"center"} gap="2rem">
        <Link to="/">
          <Image src={logo} h="2.5rem" />
        </Link>
        <Text>Features</Text>
        <Text>Marketing Calendar Pro</Text>
      </Flex>
      <Spacer />
      <Box>
        <Link to="/login">
          <Text>Sign In</Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default NavbarCalendar;
