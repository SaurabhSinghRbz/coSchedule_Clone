import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Search2Icon,
  SunIcon,
} from "@chakra-ui/icons";
import { Box, Button, Flex, Center, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { Link } from "react-router-dom";
import CreateButton from "./CreateButton";

const CalenderHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext); //global context
  //console.log(monthIndex)
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <Box>
      <Flex
        bgColor="#f7f7f7"
        padding={"15px 5px"}
        justifyContent="space-between"
      >
        <Link to="/home">
          <Button>Home</Button>
        </Link>

        <Box
          display={"flex"}
          ml="5%"
          justifyContent={"space-evenly"}
          w="400px"
        >
          <Button
            colorScheme={"gray"}
            variant="ghost"
            onClick={handlePrevMonth}
          >
            <ChevronLeftIcon />
          </Button>
          <Text
            fontSize="2xl"
            color="
#727272"
          >
            {dayjs(new Date(dayjs().year(), monthIndex)).format(" MMMM YYYY")}
          </Text>
          <Button
            colorScheme={"gray"}
            variant="ghost"
            onClick={handleNextMonth}
          >
            <ChevronRightIcon />
          </Button>
          <Button onClick={handleReset} colorScheme={"gray"} variant="ghost">
            Today
          </Button>
        </Box>
        <Box display={"flex"} justifyContent={"space-evenly"} w="15rem">
          <Center>
            <Search2Icon w={5} h={5} />
          </Center>

          <Button bg="#d17760" variant="none" color={"white"}>
            <CreateButton />
          </Button>
          <Button colorScheme={"black"} variant="outline">
            {<SunIcon marginRight={"0.3rem"} />} Ideas{" "}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default CalenderHeader;
