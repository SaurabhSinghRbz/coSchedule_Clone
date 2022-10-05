import React from "react";
import { CalendarIcon, ChatIcon } from "@chakra-ui/icons";
import { MenuItem, MenuList, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CreateButtonMenuItem = ({ day }) => {
  return (
    <MenuList
      color={"black"}
      textAlign={"start"}
      h="210px"
      w="250px"
      paddingLeft="5px"
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
    >
      <Text color="grey" p="10px 5px" fontSize={"2xl"}>
        Create New
      </Text>

      <hr />

      <MenuItem>
        {" "}
        <Link to="/newproject">
          <Box fontSize={"20px"} m="2px" p="2px">
            <CalendarIcon marginRight={"5px"} />
            Project
          </Box>
        </Link>
      </MenuItem>
      <MenuItem>
        <Box fontSize={"20px"} m="2px" p="2px">
          <ChatIcon marginRight={"5px"} />
          Soical Media
        </Box>
      </MenuItem>
      <hr />
      <Text p="2px" fontSize={"20px"} cursor="pointer">
        More Option
      </Text>
    </MenuList>
  );
};

export default CreateButtonMenuItem;
