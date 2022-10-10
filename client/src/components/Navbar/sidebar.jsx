import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  IconButton,
  Divider,
  Box,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import { FiMenu, FiHome, FiCalendar, FiSettings } from "react-icons/fi";

import NavItem from "./navitem";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("small");
  const { firstName, lastName } = useSelector(
    (state) => state.logger.isLogin.data.data
  );
  let navigate = useNavigate();
  return (
    <Flex
      pos="sticky"
      left="0"
      h="95vh"
      // marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      borderRightRadius="0px"
      w={navSize == "small" ? "75px" : "240px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        flexDir="column"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
        align="center"
        w="85%"
        ml="auto"
        mr="auto"
      >
        <Flex justifyContent="center" alignItems="center">
          <IconButton
            background="none"
            mt={5}
            _hover={{ background: "none" }}
            icon={<FiMenu color="gray" size="lg" />}
            onClick={() => {
              if (navSize == "small") changeNavSize("large");
              else changeNavSize("small");
            }}
          />
          <Box mt="5">
            <Select
              size="sm"
              display={navSize == "small" ? "none" : "inline"}
              border="none"
              onChange={(e) => {
                if (e.target.value === "logout") {
                  localStorage.clear();
                  navigate("/");
                }
              }}
              w="fit-content"
              placeholder={
                <Flex>
                  {/* <Image src="#" borderRadius="full" h="10" w="10"></Image> */}
                  <Text>{firstName + " " + lastName}</Text>
                </Flex>
              }
            >
              <option value="account">Account</option>
              <option value="logout">Logout</option>
            </Select>
          </Box>
        </Flex>
        <NavItem
          onClick={"active"}
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          description="This is the description for the dashboard."
        >
          <Link to="/" />
        </NavItem>
        <Link to="/calender" style={{ width: "100%" }}>
          <NavItem
            navSize={navSize}
            color="white"
            icon={FiCalendar}
            title="Calendar"
          ></NavItem>
        </Link>
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center" w="94%" ml="auto" mr="auto">
          <Link to="/account" style={{ width: "100%" }}>
            <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
