import React from "react";
import Day from "./Day";

import { SimpleGrid, Box } from "@chakra-ui/react";
import CalenderHeader from "./CalenderHeader";

const Month = ({ month }) => {
  //console.log(month)
  return (
    <Box w="98%" m="auto" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
      <CalenderHeader />
      <Box>
        {month.map((row, i) => (
          <SimpleGrid columns={7} key={i}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i} />
            ))}
          </SimpleGrid>
        ))}
      </Box>
    </Box>
  );
};

export default Month;
