import { useState, useEffect } from "react";

import recent from "../../Assets/TaskHomeImages/recent.png";
import favorite from "../../Assets/TaskHomeImages/favorite.png";
import {
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";

const Hr = styled.hr`
  background: #666;
  width: 100%;
`;

export const Notificationpanel = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <Flex
      mt="70px"
      w="30%"
      display={matches ? "block" : "none"}
      justifyContent="space-around"
    >
      <Box padding={"10px"} boxShadow="2xl" borderTopRadius={"10px"} h="100vh">
        <Tabs>
          <TabList gap="23px" px="10px">
            <Tab _selected={{ color: "#e76642", fontWeight: "semibold" }}>
              Notification
            </Tab>
            <Tab _selected={{ color: "#e76642", fontWeight: "semibold" }}>
              Recent
            </Tab>
            <Tab _selected={{ color: "#e76642", fontWeight: "semibold" }}>
              Favorites
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex gap="" direction={"column"} alignItems="center">
                <Image
                  src="https://app.coschedule.com/img/notifications-empty-1888c22fd951298ea32d6524dcd478f6.png"
                  w="126px"
                  h="216px"
                />
                <Heading mt="3rem" size={"lg"} fontWeight="md">
                  All caught up!
                </Heading>
                <Text mt="1rem">No-new notifications</Text>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex
                gap="2rem"
                direction={"column"}
                alignItems="center"
                justifyContent={"center"}
              >
                <Image src={recent} />
                <Text fontWeight={"semibold"}>
                  Projects and campaigns that you have recently visited will
                  appear here.
                </Text>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex
                gap="2rem"
                direction={"column"}
                alignItems="center"
                justifyContent={"center"}
              >
                <Image src={favorite} />
                <Text fontWeight={"semibold"}>
                  Favorite projects and campaigns that you work on frequently
                  and they will appear here.
                </Text>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};
