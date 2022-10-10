import React, { useContext } from "react";
import { Box, Text, Flex, MenuButton, Menu } from "@chakra-ui/react";
import dayjs from "dayjs";
import { AddIcon } from "@chakra-ui/icons";
import "./day.css";
import CreateButtonMenuItem from "./CreateButtonMenuItem";
import { DayContext } from "../../context/DayContext";
import { useSelector } from "react-redux";
import DayProjects from "./DayProjects";

const Day = ({ day, rowIdx }) => {
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "#e9f0f4"
      : "";
  }
  // console.log(day)

  const { setDayschdule } = useContext(DayContext);
  // console.log(daysechdule)
  const data = useSelector((state) => state.App_reducer.project);
  //console.log(data)

  const dayTask = data.filter((e) => e.date === day.format("DD-MMMM-YYYY"));
  // console.log(dayTask);
  return (
    <Box
      className="myDIV"
      p="10px"
      border={"1px solid lightgrey"}
      w="167"
      minH="200px"
      textAlign="start"
      bgColor={`${getCurrentDayClass()}`}
    >
      {rowIdx === 0 && (
        <Text fontSize="lg" color={"grey"}>
          {day.format("dddd").toUpperCase()}
        </Text>
      )}

      <Flex color={"grey"} justifyContent="space-between">
        <Text>{day.format("MMM-DD")}</Text>

        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                // isActive={isOpen}
                onClick={() => {
                  // console.log(day.format("MMM-DD"))
                  setDayschdule(`${day.format("DD-MMMM-YYYY")}`);
                }}
              >
                {<AddIcon marginRight={"0.3rem"} className="hide" />}
              </MenuButton>
              <CreateButtonMenuItem />
            </>
          )}
        </Menu>
      </Flex>
      <Box>
        {dayTask.map((e, idx) => (
          <DayProjects key={idx} {...e} />
        ))}
      </Box>
    </Box>
  );
};

export default Day;
