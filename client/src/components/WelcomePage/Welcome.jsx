import { Box, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex backgroundColor="white" height="92vh">
        <Box width="54%" display="flex" justifyContent="center">
          <img
            src="https://app.coschedule.com/img/self-serve-onboarding/multi-tasking-f36990c6139b9497e680f8037f52ec59.svg"
            alt=""
            height="495px"
            width="495px"
          />
        </Box>
        <Flex
          flexDirection={"column"}
          alignContent="center"
          justifyContent="center"
          textAlign="left"
          width={"46%"}
        >
          <h2
            style={{
              fontSize: "24px",
              letterSpacing: "0.4px",
              fontWeight: "bold",
              color: "grey",
            }}
          >
            Learn your CoSchedule calendar product in under 3 <br /> minutes
          </h2>
          <p style={{ fontSize: "17px", marginTop: "1rem", color: "grey" }}>
            Added responsibilty leads to marketing chaos. Discover how to <br />{" "}
            take control when you organize all your marketing in one place
          </p>
        </Flex>
      </Flex>
      <Flex
        height="8vh"
        backgroundColor="white"
        boxShadow={"dark-lg"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box ml="1.4rem">
          <img
            src="https://app.coschedule.com/img/cos-logo-horz-467be180cfc81cc31a93250967b1f710.svg"
            alt=""
            height="25px"
            width="131px"
          />
        </Box>
        <Button
          backgroundColor="#275a9a"
          color="white"
          marginRight="1.8rem"
          borderRadius={"50%"}
          onClick={() => navigate("/home")}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};
