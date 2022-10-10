import React, { useContext } from "react";
import { Box, Text, Avatar } from "@chakra-ui/react";
import { DayContext } from "../../context/DayContext";
import { useNavigate } from "react-router-dom";
import "./day.css";
import { GrBlog } from "react-icons/gr";

const DayProjects = ({ title, refNO, color }) => {
  const { setProjectrefNo } = useContext(DayContext);
  const navigate = useNavigate();
  const handleClick = (refNO) => {
    setProjectrefNo(refNO);
    navigate("/editproject");
  };

  return (
    <Box
      boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      borderRadius="10px"
      h="auto"
      w="160"
      m={2}
      onClick={() => handleClick(refNO)}
      className="pro"
    >
      <Text
        bg="lightyellow"
        display="flex"
        fontSize={"15px"}
        justifyContent="space-around"
        alignItems={"center"}
        fontWeight="500"
        p="10px"
      >
        <GrBlog ml="20px" /> Blog Post
      </Text>
      <Box
        borderRadius="0 0 10px 10px"
        h="fit-content"
        p="5px 10px"
        display="flex"
        fontSize={"15px"}
        justifyContent="space-around"
        alignItems={"center"}
        backgroundColor={color}
      >
        <Text fontSize={"14px"}>{title}</Text>

        <Avatar
          size={"sm"}
          src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png"
        />
      </Box>
    </Box>
  );
};

export default DayProjects;
