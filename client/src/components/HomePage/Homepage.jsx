/* eslint-disable no-lone-blocks */
import {
  Flex,
  Box,
  Button,
  Text,
  Popover,
  CircularProgress,
  Image,
  PopoverTrigger,
  PopoverContent,
  Divider,
  CircularProgressLabel,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { IoIosShuffle } from "react-icons/io";
import { SiSimpleanalytics } from "react-icons/si";
import { ImCheckmark } from "react-icons/im";
import { GoPlus } from "react-icons/go";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";
import { RiChatPollFill } from "react-icons/ri";
import {
  BsFillBookmarkStarFill,
  BsQuestionCircle,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import { AiTwotoneCalendar, AiOutlineSetting } from "react-icons/ai";

import { HamburgerIcon, CalendarIcon } from "@chakra-ui/icons";
import React, { useState, useReducer } from "react";
import { useDisclosure } from "@chakra-ui/react";

import "./Home.css";

const Homepage = () => {
  // Days
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date();
  let day = [];
  let from_today = [];
  for (let i = 0; i < weekday.length; i++) {
    day.push(d.getDay() + i);
  }
  for (let i = 0; i < weekday.length; i++) {
    if (i === 0) {
      from_today.push({ id: i, name: "recent" });
    } else if (i === 1) {
      from_today.push({ id: i, name: "TOMORROW" });
    } else if (day[i] < weekday.length) {
      from_today.push({ id: i, name: weekday[day[i]] });
    } else {
      from_today.push({ id: i, name: weekday[day[i] - 7] });
    }
  }

  const [progress, setprogress] = useState(0);
  const handleCheck = (value) =>
    value.target.checked
      ? setprogress(progress + 20)
      : setprogress(progress - 20);
  const [head, sethead] = useState("Home");

  const reducer = (state, { type }) => {
    switch (type) {
      case 0: 
        {
          sethead(`Home`);
        }
        break;
      case 1:
        {
          sethead("Calendar / All");
        }
        break;
      case 2:
        {
          sethead("");
        }
        break;
      case 3:
        {
          sethead("Analytics");
        }
        break;
      case 4:
        {
          sethead("Settings");
        }
        break;
      case 5:
        {
          sethead("Settings");
        }
        break;
      case 6:
        {
          sethead("");
        }
        break;
      default: {
        sethead("Home");
      }
    }
  };
  const [state, setter] = useReducer(reducer);

  //Analytcis data

  const AnData = [
    {
      id: 1,
      color: "blue.600",
      icon: <RiChatPollFill color="white" fontSize="40px" />,
      media: "Social Engagement",
      text: "Understand your engagement on social media. Spot trends and understand what your audience likes now to act quickly!",
    },
    {
      id: 2,
      color: "green.400",
      icon: <TbSpeakerphone color="white" fontSize="40px" />,
      media: "Social Campaign",
      text: "Gauge the success of your social campaigns. Evaluate performance in one place + pinpoint correlations between campaigns with side-by-side comparisons.",
    },
    {
      id: 3,
      color: "blue.700",
      icon: <FaFacebookF color="white" fontSize="35px" />,
      media: "Facebook Report",
      text: " Get comprehensive Facebook data. Track, measure and analyze page performance including page growth, total impressions and more.",
    },
    {
      id: 4,
      color: "blue.400",
      icon: <BsTwitter color="white" fontSize="40px" />,
      media: "Twitter Report",
      text: "Understand the impact of your Twitter profile. Access and evaluate data including audience growth + engagement stats.",
    },
    {
      id: 5,
      color: "cyan.800",
      icon: <FaLinkedinIn color="white" fontSize="40px" />,
      media: "LinkedIn Report",
      text: "Understand the impact of your LinkedIn Company Page. Review data to view, analyze, and identify page and post performance.",
    },
    {
      id: 6,
      color: "red.400",
      icon: <BsInstagram color="white" fontSize="35px" />,
      media: "Instagram",
      text: "Make sense of your Instagram account. And better understand which posts, hashtags and content types reach your audience.",
    },
  ];

  //drawer
  const { onOpen } = useDisclosure();

  return (
    <Box display="block" overflow="clip">
      <Flex alignItems="center">
        <Box>
          <Button variant="ghost" size="md" width="50px" onClick={onOpen}>
            <HamburgerIcon w={6} h={6} color="gray.500" />
          </Button>
        </Box>
        {/* <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}  w='100px'>
                            <DrawerOverlay />
                            <DrawerContent >
                            <DrawerHeader h='40px' alignContent='left' display={'flex'}  borderBottomWidth='1px'>
                                <Button variant='ghost' marginTop='-18px' marginLeft='-28px' onClick={onClose}>
                                    <HamburgerIcon w={6} h={6} color='gray.500'/>
                                </Button>
                            </DrawerHeader>
                            <DrawerBody>
                            </DrawerBody>
                            </DrawerContent>
                        </Drawer> */}
        <Box marginLeft="15px">
          <Popover placement="top-start">
            <PopoverTrigger>
              <Button variant="ghost">
                <Text fontSize={"20px"} color="gray.700">
                  {head}
                </Text>
              </Button>
            </PopoverTrigger>
            <PopoverContent width={"220px"} bg="white" padding={"5px 0px"}>
              <Flex direction="column">
                <Button
                  variant="ghost"
                  justifyContent={"flex-start"}
                  gap="10px"
                >
                  <CalendarIcon w={3.5} h={3.5} />
                  Home
                </Button>
                <Button
                  variant="ghost"
                  justifyContent={"flex-start"}
                  gap="10px"
                >
                  <CalendarIcon w={3.5} h={3.5} />
                  Calendar
                </Button>
                <Button
                  variant="ghost"
                  justifyContent={"flex-start"}
                  gap="10px"
                >
                  <CalendarIcon w={3.5} h={3.5} />
                  Analytics
                </Button>
              </Flex>
            </PopoverContent>
          </Popover>
        </Box>
      </Flex>
      <Tabs
        onChange={(ind) => setter({ type: ind })}
        variant="unstyled"
        display={"flex"}
      >
        <TabList justifyContent={"space-between"}>
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"space-between"}
            height={"570px"}
          >
            <Flex direction={"column"} gap="8px" marginTop={"20px"}>
              <Tab
                _selected={{ color: "white", bg: "red.600" }}
                borderRadius={"0px 5px 5px 0px"}
                w="50px"
                h="35px"
              >
                <BiHomeAlt />
              </Tab>
              <Divider />
              <Link to="/calender">
                <Tab
                  _selected={{ color: "white", bg: "red.600" }}
                  borderRadius={"0px 5px 5px 0px"}
                  w="50px"
                  h="35px"
                >
                  <AiTwotoneCalendar />
                </Tab>
              </Link>
              <Divider />
              <Tab
                isDisabled
                _selected={{ color: "white", bg: "red.600" }}
                borderRadius={"0px 5px 5px 0px"}
                w="50px"
                h="35px"
              >
                <IoIosShuffle />
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "red.600" }}
                borderRadius={"0px 5px 5px 0px"}
                w="50px"
                h="35px"
              >
                <SiSimpleanalytics fontSize={"13px"} />
              </Tab>
              <Tab
                isDisabled
                _selected={{ color: "white", bg: "red.600" }}
                borderRadius={"0px 5px 5px 0px"}
                w="50px"
                h="35px"
              >
                <BsFillBookmarkStarFill />
              </Tab>
            </Flex>
            <Flex direction={"column"} gap="15px" marginTop={"20px"}>
              <Tab
                isDisabled
                _selected={{ color: "white", bg: "red.600" }}
                borderRadius={"0px 5px 5px 0px"}
                w="50px"
                h="35px"
              >
                <AiOutlineSetting />
              </Tab>
              <Tab
                isDisabled
                _selected={{ color: "white", bg: "red.600" }}
                borderRadius={"0px 5px 5px 0px"}
                w="50px"
                h="35px"
              >
                <BsQuestionCircle />
              </Tab>
            </Flex>
          </Box>
        </TabList>
        <TabPanels margin={"20px 20px 0 20px"}>
          <TabPanel h="700px">
            <Flex direction={"row"} gap="10px">
              <Box w="80%" h="700px" overflowY="scroll" padding="15px">
                <Box
                  padding={"15px"}
                  overflowY="scroll"
                  marginBottom="30px"
                  borderRadius={"10px"}
                  height="auto"
                  boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                >
                  <Flex direction={"column"} textAlign="left" gap="8px">
                    <Text fontWeight="semibold" fontSize="20px">
                      🏆Getting Started
                    </Text>
                    <Text fontFamily="sans-serif" fontSize="15px">
                      Successful marketers complete these milestones within
                      their first week.
                    </Text>
                  </Flex>
                  <Flex>
                    <Grid
                      w="85%"
                      height="auto"
                      paddingTop="10px"
                      templateColumns="repeat(2, 1fr)"
                      overflowY="scroll"
                      templateRows="auto"
                      gap="6"
                      className="getting_started"
                    >
                      <Flex
                        borderRadius="5px"
                        w="100%"
                        padding="10px"
                        minH="100px"
                        maxH="auto"
                        border="1px solid gray"
                        gap="10px"
                        className="getting-grid"
                      >
                        <Box>
                          <input
                            className="checkbox-round"
                            type="checkbox"
                            onChange={(value) => handleCheck(value)}
                          />
                        </Box>
                        <Box textAlign="left">
                          <Text fontSize="13px" fontWeight="semibold">
                            View the Getting Started Guide
                          </Text>
                          <Text
                            fontSize="12px"
                            fontWeight="medium"
                            color="gray"
                          >
                            Get tips & best practices to organize all of your
                            marketing on your new calendar.
                          </Text>
                        </Box>
                      </Flex>
                      <Flex
                        borderRadius="5px"
                        w="100%"
                        padding="10px"
                        minH="100px"
                        maxH="auto"
                        border="1px solid gray"
                        gap="10px"
                        className="getting-grid"
                      >
                        <Box>
                          <input
                            className="checkbox-round"
                            type="checkbox"
                            onChange={(value) => handleCheck(value)}
                          />
                        </Box>
                        <Box textAlign="left">
                          <Text fontSize="13px" fontWeight="semibold">
                            Connect an integration
                          </Text>
                          <Text
                            fontSize="12px"
                            fontWeight="medium"
                            color="gray"
                          >
                            Sync content from your favorite tools like
                            WordPress, Mailchimp, Facebook, Twitter, & more.
                          </Text>
                        </Box>
                      </Flex>
                      <Flex
                        borderRadius="5px"
                        w="100%"
                        padding="10px"
                        minH="100px"
                        maxH="auto"
                        border="1px solid gray"
                        gap="10px"
                        className="getting-grid"
                      >
                        <Box>
                          <input
                            className="checkbox-round"
                            type="checkbox"
                            onChange={(value) => handleCheck(value)}
                          />
                        </Box>
                        <Box textAlign="left">
                          <Text fontSize="13px" fontWeight="semibold">
                            Create your first project
                          </Text>
                          <Text
                            fontSize="12px"
                            fontWeight="medium"
                            color="gray"
                          >
                            Add your planned marketing projects to your calendar
                            to get total visibility of all your work.
                          </Text>
                        </Box>
                      </Flex>
                      <Flex
                        borderRadius="5px"
                        w="100%"
                        padding="10px"
                        minH="100px"
                        maxH="auto"
                        border="1px solid gray"
                        gap="10px"
                        className="getting-grid"
                      >
                        <Box>
                          <input
                            className="checkbox-round"
                            type="checkbox"
                            onChange={(value) => handleCheck(value)}
                          />
                        </Box>
                        <Box textAlign="left">
                          <Text fontSize="13px" fontWeight="semibold">
                            Create a social message
                          </Text>
                          <Text
                            fontSize="12px"
                            fontWeight="medium"
                            color="gray"
                          >
                            Schedule & publish social messages on Facebook,
                            Instagram, LinkedIn, Pinterest, & Twitter.
                          </Text>
                        </Box>
                      </Flex>
                      <Flex
                        borderRadius="5px"
                        w="100%"
                        padding="10px"
                        minH="100px"
                        maxH="auto"
                        border="1px solid gray"
                        gap="10px"
                        className="getting-grid"
                      >
                        <Box>
                          <input
                            className="checkbox-round"
                            type="checkbox"
                            onChange={(value) => handleCheck(value)}
                          />
                        </Box>
                        <Box textAlign="left">
                          <Text fontSize="13px" fontWeight="semibold">
                            Customize your calendar
                          </Text>
                          <Text
                            fontSize="12px"
                            fontWeight="medium"
                            color="gray"
                          >
                            Update your settings to visually organize your
                            calendar with color labels, project types, & tags.
                          </Text>
                        </Box>
                      </Flex>
                    </Grid>
                    <Flex
                      w="20%"
                      height="300px"
                      alignItems={"center"}
                      justifyContent="center"
                    >
                      <CircularProgress
                        value={progress}
                        size="120px"
                        thickness="5px"
                        color="green.400"
                      >
                        <CircularProgressLabel
                          textAlign={"center"}
                          marginTop="-10px"
                        >
                          {progress}%
                        </CircularProgressLabel>
                        <Text fontSize={"13px"} color="gray.400">
                          Setup progress
                        </Text>
                      </CircularProgress>
                    </Flex>
                  </Flex>
                </Box>
                <Box
                  borderRadius={"10px"}
                  height="auto"
                  boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                >
                  <Flex justifyContent="space-between">
                    <Box
                      padding="13px"
                      display={"flex"}
                      alignItems="center"
                      gap="10px"
                    >
                      <ImCheckmark />
                      <Text
                        fontSize={"19px"}
                        color="gray.600"
                        fontWeight="bold"
                      >
                        My Upcoming
                      </Text>
                    </Box>
                    <Box padding="13px" display={"flex"} alignItems="center">
                      <Button
                        colorScheme="red"
                        color="white"
                        gap="5px"
                        h="33px"
                      >
                        <GoPlus />
                        <Text>New Task</Text>
                      </Button>
                    </Box>
                  </Flex>
                  <Divider color="gray.700" />
                  <Flex direction="column">
                    {from_today.map((el) => {
                      return (
                        <Box
                          w="100%"
                          padding="15px"
                          h="120px"
                          maxHeight="auto"
                          key={el.id}
                        >
                          <Flex
                            padding="0 10px"
                            direction="row"
                            gap="15px"
                            justifyContent="space-between"
                            w="100%"
                            alignItems="center"
                          >
                            <Box>
                              <Text color="gray.600" fontWeight="bold">
                                {el.name.toUpperCase()}
                              </Text>
                            </Box>
                            <Divider color="gray.700" />
                            <Box>
                              <Button colorScheme="none" variant="ghost">
                                <GoPlus />
                              </Button>
                            </Box>
                          </Flex>
                        </Box>
                      );
                    })}
                  </Flex>
                </Box>
              </Box>
              <Box
                width="35%"
                height={"520px"}
                padding={"15px"}
                borderRadius={"10px"}
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              >
                <Tabs>
                  <TabList gap="23px">
                    <Tab _selected={{ color: "red.600" }} fontWeight="semibold">
                      Notifications
                    </Tab>
                    <Tab _selected={{ color: "red.600" }} fontWeight="semibold">
                      Recent
                    </Tab>
                    <Tab _selected={{ color: "red.600" }} fontWeight="semibold">
                      Favorites
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems={"center"}
                      >
                        <Image
                          w="150px"
                          h="250px"
                          src="https://app.coschedule.com/img/notifications-empty-1888c22fd951298ea32d6524dcd478f6.png"
                        />
                        <Text
                          marginTop="20px"
                          fontWeight="normal"
                          fontSize="2xl"
                          color="gray.600"
                        >
                          All caught up!
                        </Text>
                        <Text marginTop="20px" fontSize="15px" color="gray.600">
                          No new notifications
                        </Text>
                      </Flex>
                    </TabPanel>
                    <TabPanel>
                      <p>two!</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Flex>
          </TabPanel>

          <TabPanel></TabPanel>

          <TabPanel></TabPanel>
          <TabPanel>
            <Flex h="auto" direction="column" overflowY="scroll">
              <Flex
                alignItems="center"
                h="40px"
                justifyContent={"space-between"}
                width="100%"
                padding="10px"
              >
                <Text fontSize={"25px"} fontWeight="semibold" color="gray.600">
                  Social Analytics
                </Text>
                <Text
                  fontSize={"13px"}
                  gap="10px"
                  alignItems="center"
                  fontWeight="semibold"
                  color="gray.600"
                  display={"flex"}
                >
                  <BsQuestionCircle />
                  Get help with analytics
                </Text>
              </Flex>
              <Grid
                padding="30px 10px"
                templateColumns="repeat(4, 1fr)"
                templateRows="auto"
                gap={6}
                w="82%"
                overflowY="scroll"
                className="analytics"
              >
                {AnData.map((el) => {
                  return (
                    <Box
                      w="230px"
                      h="210px"
                      borderRadius="8px"
                      key={el.id}
                      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    >
                      <Box
                        h="60px"
                        borderRadius="8px 8px 0 0"
                        bg={el.color}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {el.icon}
                      </Box>
                      <Flex
                        direction="column"
                        padding="10px 20px"
                        w="100%"
                        textAlign="left"
                        gap="5px"
                      >
                        <Text fontWeight="semibold" color="gray.600">
                          {el.media}
                        </Text>
                        <Text fontSize="12px" color="gray.600">
                          {el.text}
                        </Text>
                      </Flex>
                    </Box>
                  );
                })}
              </Grid>
            </Flex>
          </TabPanel>
          <TabPanel>5</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Homepage;
