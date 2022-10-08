import {
  Box,
  Text,
  Img,
  List,
  ListItem,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Stack,
  
  
  Container,
 
 
  HStack,
  Icon,
  Link
  
} from "@chakra-ui/react";
// import useNavigate from "react"

import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
//   import {Search2Icon} from"@chakra-ui/icons";
//   import { useNavigate } from "react-router-dom";


function Footer() {
  // const navigate=useNavigate();

  return (
    <Box>
    <Box display={"flex"} width="100%">
      <Box lineHeight="2rem" width="40%" textAlign={'left'} paddingTop="5rem" paddingLeft="11%">
         <Box>
          <Img height={"5rem"} src="https://yt3.ggpht.com/ytc/AMLnZu8mlYlpix3OpMsz3vWSQXk8z9Wv_jjqC0LZLrRRsQ=s176-c-k-c0x00ffffff-no-rj"/>
          <Text>Sign Up</Text>
          <Text>Request A Demo</Text>
          <Text>Sign in</Text>
          <br/>
          <HStack gap={"2rem"}>
              <Img height={"5rem"} src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fg2crowd-badge.png&w=96&q=75"/>
              <Img height={"5rem"} src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fgartner-badge.png&w=64&q=75"/>
              <Img height={"5rem"} src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-badge.png&w=48&q=75"/>
          </HStack>
         </Box>
      </Box>
      <Box  width="60%" textAlign={'left'} >
         <Box paddingTop="3rem" display={"flex"} lineHeight="2rem">
          
          <List>
             <ListItem><Heading fontSize={"1.3rem"}>Products</Heading></ListItem>
             <ListItem>Marketing Calender</ListItem>
             <ListItem>Marketing Suite</ListItem>
             <ListItem>Headline Studio</ListItem>
             <ListItem>Actionable Marketing institute</ListItem>
             
          </List>
          <List paddingLeft={"14%"}> 
          <ListItem ><Heading fontSize={"1.3rem"}>WHY COSCHEDULE</Heading></ListItem>
          <ListItem>Customer Stories</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>Product Announcements</ListItem>
          <ListItem>Pricing</ListItem>
          
          </List>
          <List paddingLeft={"7.5%"}>
          <ListItem><Heading fontSize={"1.3rem"}>Company</Heading></ListItem>
          <ListItem>About</ListItem>
          <ListItem>Jobs</ListItem>
          <ListItem>Press</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>Affilate Program</ListItem>
          </List>
         </Box>
        
         <Box lineHeight="2rem"  display={"flex"} paddingTop="5rem">
          <List>
          <ListItem > <Heading fontSize={"1.3rem"}>RESOURCES</Heading></ListItem>
          <ListItem>Marketing Blog</ListItem>
          <ListItem>CoSchedule Guide</ListItem>
          <ListItem>Marketing Strategy Report</ListItem>
          <ListItem>Agile Marketing Guide</ListItem>
          <ListItem>Actionable Marketing Podcast</ListItem>
          <ListItem>10x Marketing Formula Book</ListItem>
          <ListItem>Get Started With Agile Marketing Book</ListItem>
         
          </List>
          <List paddingLeft={"7%"}>
          <ListItem ><Heading fontSize={"1.3rem"}>TOPIC LIBRARIES</Heading></ListItem>
          <ListItem>Marketing</ListItem>
          <ListItem>Marketing Ideas</ListItem>
          <ListItem>Marketing Strategy</ListItem>
          <ListItem>Content Marketing</ListItem>
          </List>
          <List paddingLeft={"10.5%"}>
          <ListItem><Heading fontSize={"1.3rem"}>TOOLS</Heading></ListItem>
          <ListItem>Headline Analyzer</ListItem>
          <ListItem>Email Subject Line Tester</ListItem>
          <ListItem>Social Message Optimizer</ListItem>
          <ListItem>Marketing Dictionary</ListItem>
          </List>
         </Box>
      </Box>
      

      
    </Box>



    


<Box
      
     
    >
      <Container
        
        maxW={"7xl"}
        py={10}
        display="flex"
       
       
        opacity="0.7"
      >
        <Text>© Copyright 2022, all rights reserved. See our Terms & Policies</Text>
        <Spacer/>
        <Stack direction={"row"} spacing={3} >
        <Box>
            <Link href="https://www.g2.com/products/coschedule-marketing-suite/reviews"><Img  height={"20px"} 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mymjCqy4HaGQhVKPA9XzCKejn8cUvgOWcQ&usqp=CAU"
              alt=""
            /></Link>
          </Box>
          <Box >
            <Link href="https://www.facebook.com/coschedule"><FaFacebook /></Link>
          </Box>
          <Box >
          <Link href="https://twitter.com/coschedule"><FaTwitter /></Link>
          </Box>
          <Box >
          <Link href="https://www.linkedin.com/company/coschedule/"><FaLinkedin /></Link>
          </Box>
          
          <Box>
          <Link href="https://www.pinterest.com/coschedule/"><Img height={"20px"}
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
              alt=""
            /></Link>
          </Box>
          <Box >
          <Link href="https://www.instagram.com/coschedule/"><FaInstagram /></Link>
          </Box>
          
          
          
          
        </Stack>
      </Container>
    </Box>

    </Box>
    
  );
}

export default Footer;
