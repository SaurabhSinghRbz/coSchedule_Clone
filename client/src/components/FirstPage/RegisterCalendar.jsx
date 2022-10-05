import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const RegisterCalendar = () => {
  return (
    <Flex
      width={"32%"}
      flexDirection="column"
      marginTop="6rem"
      alignItems={"center"}
      gap="3rem"
    >
      <h3
        style={{
          fontSize: "24.5px",
          textAlign: "left",
          marginRight: "1.2rem",
          fontWeight: "bolder",
          color: "grey",
        }}
      >
        Before we get started, we just
        <br /> need a few more details
      </h3>
      <Flex flexDirection="column" textAlign="left">
        <label for="name">Full Name</label>
        <Input
          type="text"
          placeholder="Full Name"
          id="name"
          height="42px"
          width="363px"
          marginTop="0.5rem"
          marginBottom="1rem"
        />
        <label for="company">Company Name</label>
        <Input
          type="text"
          placeholder="Company Name"
          marginBottom="1rem"
          marginTop="0.5rem"
          id="company"
        />
        <label for="url">Website Url</label>
        <Input
          type="text"
          placeholder="Company Website URL"
          marginBottom="1rem"
          marginTop="0.5rem"
          id="url"
        />
      </Flex>
      <Box display="flex" flexDirection="column" rowGap={"2.6rem"}>
        <Link to="/welcome">
          {" "}
          <Button
            backgroundColor={"#d17760"}
            color={"white"}
            height="44px"
            width="219px"
          >
            Take me to my Calendar
          </Button>
        </Link>
        <p>
          Have questions?{" "}
          <a
            href="https://coschedule.com/contact-us"
            style={{ color: "#d17760" }}
            target="_blank"
            rel="noreferrer"
          >
            Contact Support
          </a>{" "}
        </p>
      </Box>
    </Flex>
  );
};
