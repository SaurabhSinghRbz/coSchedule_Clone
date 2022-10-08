import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Mainpage from "./utils/Mainpage";
import Sidebar from "./utils/Sidebar";
import Footer from "../../landing/Footer";
const MarketingCalendar = () => {
  return (
    <Box>
      <Flex>
        <Mainpage />
        <Sidebar />
      </Flex>
      <Footer />
    </Box>
  );
};

export default MarketingCalendar;
