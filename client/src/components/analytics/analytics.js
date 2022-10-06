import {
    Flex,
    Box,
    Text,
    Grid,
  } from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";
import { RiChatPollFill } from "react-icons/ri";
import {
  BsQuestionCircle,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";




export const Analytics=()=>{
    const AnData = [
        {
          id: 1,
          color: "blue.600",
          icon: <RiChatPollFill color="white" fontSize="40px" />,
          media: "Social Engagement",
          text: "Understand your engagement on social media. Spot trends and understand what your audience likes now to act quickly!",
        },
        {
          id: 2,
          color: "green.400",
          icon: <TbSpeakerphone color="white" fontSize="40px" />,
          media: "Social Campaign",
          text: "Gauge the success of your social campaigns. Evaluate performance in one place + pinpoint correlations between campaigns with side-by-side comparisons.",
        },
        {
          id: 3,
          color: "blue.700",
          icon: <FaFacebookF color="white" fontSize="35px" />,
          media: "Facebook Report",
          text: " Get comprehensive Facebook data. Track, measure and analyze page performance including page growth, total impressions and more.",
        },
        {
          id: 4,
          color: "blue.400",
          icon: <BsTwitter color="white" fontSize="40px" />,
          media: "Twitter Report",
          text: "Understand the impact of your Twitter profile. Access and evaluate data including audience growth + engagement stats.",
        },
        {
          id: 5,
          color: "cyan.800",
          icon: <FaLinkedinIn color="white" fontSize="40px" />,
          media: "LinkedIn Report",
          text: "Understand the impact of your LinkedIn Company Page. Review data to view, analyze, and identify page and post performance.",
        },
        {
          id: 6,
          color: "red.400",
          icon: <BsInstagram color="white" fontSize="35px" />,
          media: "Instagram",
          text: "Make sense of your Instagram account. And better understand which posts, hashtags and content types reach your audience.",
        },
      ];
    
    return (
        <Flex h="auto" direction="column" overflowY="scroll">
        <Flex
          alignItems="center"
          h="40px"
          justifyContent={"space-between"}
          width="100%"
          padding="10px"
        >
          <Text fontSize={"25px"} fontWeight="semibold" color="gray.600">
            Social Analytics
          </Text>
          <Text
            fontSize={"13px"}
            gap="10px"
            alignItems="center"
            fontWeight="semibold"
            color="gray.600"
            display={"flex"}
          >
            <BsQuestionCircle />
            Get help with analytics
          </Text>
        </Flex>
        <Grid
          padding="30px 10px"
          templateColumns="repeat(4, 1fr)"
          templateRows="auto"
          gap={6}
          w="82%"
          overflowY="scroll"
          className="analytics"
        >
          {AnData.map((el) => {
            return (
              <Box
                w="230px"
                h="210px"
                borderRadius="8px"
                key={el.id}
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              >
                <Box
                  h="60px"
                  borderRadius="8px 8px 0 0"
                  bg={el.color}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {el.icon}
                </Box>
                <Flex
                  direction="column"
                  padding="10px 20px"
                  w="100%"
                  textAlign="left"
                  gap="5px"
                >
                  <Text fontWeight="semibold" color="gray.600">
                    {el.media}
                  </Text>
                  <Text fontSize="12px" color="gray.600">
                    {el.text}
                  </Text>
                </Flex>
              </Box>
            );
          })}
        </Grid>
      </Flex>
    )
}