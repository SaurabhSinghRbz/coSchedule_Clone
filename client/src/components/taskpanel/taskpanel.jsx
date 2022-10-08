import { useState, useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Month } from "./day";
import { Gettingstarted } from "../task/gettingstarted/gettingstarted";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
const H1 = styled.h1`
  color: #4d4d4d;
  font-size: 25px;
  margin: 10px;
  width: fit-content;
`;
const Home = styled(AiOutlineHome)`
  color: gray;
  font-size: 25px;
  margin-left: 20px;
`;
export const Taskpanel = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <Box display="flex" flexDirection="column" w={matches ? "65%" : "100%"}>
      <Flex style={{ alignItems: "center" }}>
        <Home />
        <H1> Home</H1>
      </Flex>
      <Box
        h="700px"
        overflowY="scroll"
        p="20px"
        alignItems="center"
        justifyContent="center"
      >
        <Gettingstarted />
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          w="full"
        >
          <Month />
        </Box>
      </Box>
    </Box>
  );
};
