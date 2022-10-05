import { Box, Flex } from "@chakra-ui/react";
import { RegisterCalendar } from  './RegisterCalendar'
import "../../styles/FirstPage.module.css";
export const FirstPage = () => {
  return (
    <Flex height="100vh">
      <Box
        width={"68%"}
        className="image-box"
        bgImage={
          "https://app.coschedule.com/img/company-details-capture/company-details-background-afce3f353ce8f5a9cc3f29f113e183fc.jpg"
        }
        padding = "3.5rem 1rem 1rem 12rem"

      >
        <img src="https://app.coschedule.com/img/company-details-capture/company-details-quote-b78b40f2537508deee8ae7e2ed1e1f51.png" alt=""/>
      </Box>
      {/* <Box width={"32%"} border="1px solid blue">
        Register
      </Box> */}
      <RegisterCalendar/>
    </Flex>
  );
};
