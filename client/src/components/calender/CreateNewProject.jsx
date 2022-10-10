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
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Select,
  List,
  ListItem,
  OrderedList,
  UnorderedList,
  Popover,
  Portal,
} from "@chakra-ui/react";
import { GrBlog } from "react-icons/gr";
import { CalendarIcon } from "@chakra-ui/icons";
import React, { useContext, useState, useRef } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { DayContext } from "../../context/DayContext";
import { addNewProject } from "../../Redux/App_reducer/action";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
const CreateNewProject = () => {
  const { daysechdule } = useContext(DayContext);
  const { setProjectrefNo } = useContext(DayContext);

  //console.log(daysechdule);
  const currentdate = useRef(daysechdule);
  const navigate = useNavigate();
  // console.log(currentdate)
  const dispatch = useDispatch();
  const [color, setcolor] = useState("white");
  const [text, setText] = useState("");
  const { email } = useSelector((state) => state.logger.isLogin.data.data);
  const handleCreateButton = async () => {
    if (text) {
      const payload = {
        title: text,
        color: color,
        date: currentdate.current,

        refNO: uuid(),
      };
      console.log(payload);
      await fetch(`https://coschedule-api.herokuapp.com/api/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          title: text,
          color: color,
          date: currentdate.current,
          refNO: uuid(),
        }),
      })
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
        });
      setProjectrefNo(payload.refNO);
      dispatch(addNewProject(payload));
      //  setNewproject(payload)
      navigate("/calender");
    } else {
      alert("Please Add Project");
    }
  };

  return (
    <Box w="100%" h="28rem">
      <Box m={"auto"} marginTop="30px">
        <Link to="/calender">
          <CloseIcon />
        </Link>
      </Box>

      <Stack w="800px" m="auto" marginTop="15rem">
        <Flex>
          <Box></Box>
          <Box
            w="600px"
            alignItems={"center"}
            ml={"300px"}
            display="flex"
            justifyContent={"space-evenly"}
          >
            <Popover>
              <PopoverTrigger>
                <Avatar border={"1px solid lightgrey"} bg={color} size={"md"} />
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />

                  <PopoverCloseButton />
                  <PopoverBody>
                    <List>
                      <ListItem
                        m="auto"
                        justifyContent="center"
                        alignItem="center"
                      >
                        <Flex m="5" justifyContent="left" alignItem="center">
                          <Button
                            h="10"
                            w="10"
                            borderRadius="full"
                            bg="#B12EEE"
                            m="2"
                            onClick={() => {
                              setcolor("#B12EEE");
                            }}
                          ></Button>
                          <Text m="4">Color label 1</Text>
                        </Flex>
                      </ListItem>
                      <ListItem
                        m="auto"
                        justifyContent="center"
                        alignItem="center"
                      >
                        {" "}
                        <Flex m="5" justifyContent="left" alignItem="center">
                          <Button
                            h="10"
                            w="10"
                            borderRadius="full"
                            bg="#1D84FC"
                            m="2"
                            onClick={() => {
                              setcolor("#1D84FC");
                            }}
                          ></Button>
                          <Text m="4">Color label 2</Text>
                        </Flex>
                      </ListItem>
                      <ListItem
                        m="auto"
                        justifyContent="center"
                        alignItem="center"
                      >
                        {" "}
                        <Flex m="5" justifyContent="left" alignItem="center">
                          <Button
                            h="10"
                            w="10"
                            borderRadius="full"
                            bg="green"
                            m="2"
                            onClick={() => {
                              setcolor("green");
                            }}
                          ></Button>
                          <Text m="4">Color label 3</Text>
                        </Flex>
                      </ListItem>
                      <ListItem
                        m="auto"
                        justifyContent="center"
                        alignItem="center"
                      >
                        {" "}
                        <Flex m="5" justifyContent="left" alignItem="center">
                          <Button
                            h="10"
                            w="10"
                            borderRadius="full"
                            bg="red"
                            m="2"
                            onClick={() => {
                              setcolor("red");
                            }}
                          ></Button>
                          <Text m="4">Color label 4</Text>
                        </Flex>
                      </ListItem>
                      <ListItem
                        m="auto"
                        justifyContent="center"
                        alignItem="center"
                      >
                        <Flex m="5" justifyContent="left" alignItem="center">
                          <Button
                            h="10"
                            w="10"
                            borderRadius="full"
                            bg="#FF8917"
                            m="2"
                            onClick={() => {
                              setcolor("#FF8917");
                            }}
                          ></Button>
                          <Text m="4">Color label 5</Text>
                        </Flex>
                      </ListItem>
                      <ListItem
                        m="auto"
                        justifyContent="center"
                        alignItem="center"
                      >
                        <Flex m="5" justifyContent="left" alignItem="center">
                          <Button
                            h="10"
                            w="10"
                            borderRadius="full"
                            bg="white"
                            m="2"
                            onClick={() => {
                              setcolor("white");
                            }}
                          ></Button>
                          <Text m="4">No label</Text>
                        </Flex>
                      </ListItem>
                    </List>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
            <Avatar
              size={"md"}
              src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png"
            />

            <Box
              p="5px"
              alignItems={"center"}
              w="250px"
              bg="#f7f7f7"
              display="flex"
              justifyContent={"space-evenly"}
            >
              <Text>{currentdate.current} </Text>
              <CalendarIcon />
            </Box>
          </Box>
        </Flex>
        <br />
        <Input
          placeholder="New Project Title"
          w="800px"
          h="70px"
          p="20px 10px"
          fontSize="35px"
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <HStack justifyContent={"space-between"}>
          <Button variant="ghost">
            {" "}
            <GrBlog ml="20px" /> Blog Post
          </Button>
          <Button variant="ghost">More Option</Button>
        </HStack>
        <br /> <br /> <br />
        <VStack>
          <Button
            onClick={handleCreateButton}
            ml={"600px"}
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
