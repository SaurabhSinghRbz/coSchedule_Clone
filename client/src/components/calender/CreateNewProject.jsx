import {
  Box,
  Button,
  Input,
  Stack,
  Text,
  VStack,
  Flex,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import { GrBlog } from "react-icons/gr";
import { CalendarIcon } from "@chakra-ui/icons";
import React, { useContext, useState, useRef } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { DayContext } from "../../context/DayContext";
import { addNewProject } from "../../Redux/App_reducer/action";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
const CreateNewProject = () => {
  const { daysechdule } = useContext(DayContext);
  const { setProjectrefNo } = useContext(DayContext);

  //console.log(daysechdule);
  const currentdate = useRef(daysechdule);
  const navigate = useNavigate();
  // console.log(currentdate)
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleCreateButton = () => {
    if (text) {
      const payload = {
        title: text,
        color : "white",
        date: currentdate.current,

        refNO: uuid(),
      };
      //   console.log(payload)
      setProjectrefNo(payload.refNO);
      dispatch(addNewProject(payload));
      //  setNewproject(payload)
      navigate("/editproject");
    } else {
      alert("Please Add Project");
    }
  };

  return (
    <Box w="100%" h="28rem">
      <Box marginLeft={"1500px"} marginTop="30px">
        <Link to="/">
          <CloseIcon />
        </Link>
      </Box>

      <Stack w="800px" m="auto" marginTop="15rem">
        <Flex>
          <Box></Box>
          <Box
            w="600px"
            alignItems={"center"}
            marginLeft={"300px"}
            display="flex"
            justifyContent={"space-evenly"}
          >
            <Avatar border={"1px solid lightgrey"} bg="white" size={"md"} />
            <Avatar size={"md"} src="https://bit.ly/sage-adebayo" />

            <Box
              p="5px"
              alignItems={"center"}
              w="250px"
              bg="#f7f7f7"
              display="flex"
              justifyContent={"space-evenly"}
            >
              <Text marginLeft={" "}>{currentdate.current} </Text>
              <CalendarIcon />
            </Box>
          </Box>
        </Flex>
        <br />
        <Input
          placeholder="New Project Title"
          w="800px"
          h="70px"
          p="20px 5px"
          fontSize="50px"
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <HStack justifyContent={"space-between"}>
          <Button variant="ghost">
            {" "}
            <GrBlog marginLeft="20px" /> Blog Post
          </Button>
          <Button variant="ghost">More Option</Button>
        </HStack>
        <br /> <br /> <br />
        <VStack>
          <Button
            onClick={handleCreateButton}
            marginLeft={"600px"}
            w="220px"
            h="50px"
            fontSize={"30px"}
            bg="#d17760"
            variant="none"
            color={"white"}
          >
            Create Project
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default CreateNewProject;
