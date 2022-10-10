import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  FormHelperText,
  Button,
  Flex,
  Spinner,
  Stack,
  Text,
  useMediaQuery,
  useToast,
  Box,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { Link, Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import googleIcon from "../../Assets/google.png";
export const Register = () => {
  const toast = useToast();
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const onChangeInput = (e) => {
    console.log(e.target);
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log("ee",e)
    axios
      .post(
        "https://coschedule-api.herokuapp.com/api/auth/register",

        {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
        }
      )
      .then((res) => {
        setTimeout(() => {
          Navigate("/login");
        }, 1000);
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        toast({
          title: "Signup Successfull !!!",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((e) => {
        // console.log("e",e);
        toast({
          title: "Put Unique Id !!!",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      });
  };
  return (
    <div className="login">
      {console.log("user", user)}
      {isLoading ? (
        <Flex justify="center" mt={"5"}>
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#3182ce"
            size="lg"
          />
        </Flex>
      ) : (
        <Flex
          minH={"100vh"}
          maxH="auto"
          justify="center"
          align="center"
          direction="column"
          textAlign="center"
        >
          <Heading mt="10" as="h2" size="lg" color="lightpink">
            Create My Marketing Calendar
          </Heading>
          <FormControl
            w={isLargerThan992 ? "30%" : "70%"}
            minH="450px"
            margin="auto"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            borderRadius="lg"
            p={5}
            cursor="pointer"
            mt={5}
          >
            {/* First name..................... */}
            <FormLabel htmlFor="text">First Name</FormLabel>
            <Input
              focusBorderColor="RGBA(0, 0, 0, 0.64)"
              id="firstName"
              type="text"
              placeholder="Enter first name"
              value={user.firstName}
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
            {/* LastName............................ */}
            <FormLabel htmlFor="text">Last Name</FormLabel>
            <Input
              focusBorderColor="RGBA(0, 0, 0, 0.64)"
              id="lastName"
              type="text"
              placeholder="Enter last name"
              value={user.lastName}
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
            {/* Email...................... */}
            <FormLabel htmlFor="email">Email Adress</FormLabel>
            <Input
              focusBorderColor="RGBA(0, 0, 0, 0.64)"
              id="email"
              type="email"
              placeholder="Enter email"
              value={user.email}
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
            {/* Password ................................ */}
            <FormLabel htmlFor="text">Password</FormLabel>
            <Input
              type="password"
              id="password"
              focusBorderColor="RGBA(0, 0, 0, 0.64)"
              placeholder="Enter 8 digit fixed password"
              value={user.password}
              onChange={(e) => {
                onChangeInput(e);
              }}
            />

            <Button
              mt="20px"
              w="100%"
              borderColor="#ccd0d5"
              colorScheme="RGBA(0, 0, 0, 0.92)"
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
              transform="scale(0.98)"
              background="#f37e5d"
              width="100%"
              _hover={{
                bg: "#f5f6f7",
                background: "RGBA(0, 0, 0, 0.80)",
                transform: "scale(0.98)",
              }}
              onClick={(e) => {
                console.log(user);
                handleRegister(e);
              }}
            >
              Submit
            </Button>
            <Stack pt={6}>
              <Button
                borderWidth="1px"
                alignItems="center"
                fontWeight="600"
                justifyContent="center"
                backgroundColor="white"
                w="100%"
              >
                <Image src={googleIcon} w="30px" mr={2} />
                CONTINUE WITH GOOGLE
              </Button>

              <Text align={"center"}>
                Already a user?
                <RouterLink to="/login" color={"blue.400"}>
                  Login
                </RouterLink>
              </Text>
            </Stack>
          </FormControl>
        </Flex>
      )}
    </div>
  );
};
