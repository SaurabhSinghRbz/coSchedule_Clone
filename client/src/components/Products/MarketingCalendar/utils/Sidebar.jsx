import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [userDetail, setUserDetail] = useState();
  useEffect(() => {
    axios
      .get("https://rest-api-vaibhav-clone.herokuapp.com/posts")
      .then(({ data }) => {
        setUserDetail(data[data.length - 1]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(userDetail);
  return (
    <Box
      borderLeft={"1px solid rgba(1,1,1,0.3)"}
      pos={"sticky"}
      top="0px"
      h="100vh"
      w="25vw"
    >
      <Box mt="4rem">
        <Heading fontSize={"2xl"} fontWeight={"semibold"} color={"#e76642"}>
          Create Your{" "}
          <Text as={"span"} bgColor={"#fff5ef"}>
            Forever-Free
          </Text>{" "}
          Marketing Calendar
        </Heading>
        <Flex
          gap="1rem"
          direction={"column"}
          justifyContent="center"
          alignItems="center"
          mt="2rem"
        >
          <Avatar />
          <Heading textAlign={"center"} fontSize={"2xl"}>
            Welcome Back <br />
            {userDetail ? `${userDetail.name}!` : "Sign In"}
          </Heading>
          <Text>You're logged in as</Text>
          <Text px="10px" bgColor={"#fff5ef"} color="#e76642">
            {userDetail ? userDetail.email : "Not Found Sign In"}
          </Text>
          <Flex
            h="50px"
            bgColor={"#e76642"}
            p="2rem"
            alignItems={"center"}
            borderRadius="md"
          >
            <Text fontWeight={"bold"} color="white">
              <Link to="/Calender">Open Marketing Calendar</Link>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
