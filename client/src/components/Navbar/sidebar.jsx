import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, IconButton, Divider } from "@chakra-ui/react";
import { FiMenu, FiHome, FiCalendar, FiSettings } from "react-icons/fi";

import NavItem from "./navitem";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("small");
  return (
    <Flex
      pos="sticky"
      left="0"
      h="95vh"
      // marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      borderRightRadius="0px"
      w={navSize == "small" ? "75px" : "200px"}
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
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu color="gray" />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
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
