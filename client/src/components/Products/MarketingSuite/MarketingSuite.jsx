import { AspectRatio, Avatar, Box, Flex, Heading, Image, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from '../../landing/Footer'
import NavbarSuite from './utils/NavbarSuite'
const MarketingSuite = () => {
  return (
    <Box >
      <NavbarSuite />
      <Box h="75vh" borderTop={"1px solid rgb(240, 240, 240)"} bgColor={"#F8F8F8"}>
        <Flex direction={"column"} w="60%" gap="2rem" m="6rem auto" >
          <Flex direction={"column"} gap="1rem" color={"#4b4b4b"} >
            <Heading fontSize={"5xl"} fontWeight="600" >Take Control Of Your Process And Bring Your Team Together.</Heading>
            <Heading fontSize={"2xl"} fontWeight="md" fontStyle={"italic"} my="1rem">Complete more work. Deliver projects on time. Prove your value.</Heading>
            <Text w="25%" m="auto"  fontWeight={"semibold"} bgColor={"#f37e5d"} color="white" p="1rem" borderRadius={"5px"} cursor="pointer" >Request Your Demo</Text>
          </Flex>
          <Flex  justifyContent={"center"} w="70%" m="auto" >
            <Text fontSize={"lg"} fontStyle="italic" textAlign={"center"}>CoSchedule Marketing Suite is a family of agile marketing products that helps you coordinate your process, projects, and teams.</Text>
          </Flex>
          <Flex mt="20px" justifyContent={"space-around"} zIndex={1}>
            <Flex  bgColor="white"direction={"column"} gap="0.5rem" py="2rem"px="1rem"  alignItems={"center"} boxShadow="2xl">
              <Image src="https://coschedule.com/img/product/marketing-calendar-product-icon.png" h="40px" w="40px" />
              <Heading  fontWeight={"500"}fontSize={"md"}>Calendar Organizer</Heading>
            </Flex>
            <Flex bgColor="white" direction={"column"} gap="0.5rem" py="2rem"px="1rem"  alignItems={"center"} boxShadow="2xl">
              <Image src="https://coschedule.com/img/product/content-organizer-product-icon.png" h="40px" w="40px" />
              <Heading  fontWeight={"500"}fontSize={"md"}>Content Organizer</Heading>
            </Flex>
            <Flex bgColor="white" direction={"column"} gap="0.5rem" py="2rem"px="1rem"  alignItems={"center"} boxShadow="2xl">
              <Image src="https://coschedule.com/img/product/work-organizer-product-icon.png" h="40px" w="40px" />
              <Heading  fontWeight={"500"}fontSize={"md"}>Workshop Organizer</Heading>
            </Flex>
            <Flex bgColor="white" direction={"column"} gap="0.5rem" py="2rem"px="1rem" alignItems={"center"} boxShadow="2xl">
              <Image src="https://coschedule.com/img/product/asset-organizer-product-icon.png" h="40px" w="40px" />
              <Heading fontWeight={"500"} fontSize={"md"}>Calendar Organizer</Heading>
            </Flex>
          </Flex>
        </Flex>
        
      </Box>
      {/* Close the output gap */}
      <Flex w="60%" m="auto" mt="150px ">
        <Flex direction={"column"} w="50%" textAlign={"left"} gap="1rem" mt="2rem">
          <Heading fontWeight={"500"}>Close the output gap<br /> with Marketing Suite</Heading>
          <Text fontSize={"lg"} color="gray" >Marketers are expected to do more without<br/> more resources. 60% of the workweek is <br/>wasted managing work — not <br/>completing it.</Text>
          <Text fontSize={"lg"} color="gray">CoSchedule Marketing Suite removes time <br/>wasters so your team can perform to its <br/>full potential.</Text>
        </Flex>
        <Spacer />
        <Box w="70%">
          <video autoPlay muted loop >
          <source src='https://media.coschedule.com/uploads/2021/08/marketing-suite_output-gap_19.mp4' type='video/mp4'/>
        </video>
        </Box>
      </Flex> 
      {/* start completing more marketing */}
      <Flex justifyContent={"center"} w="65%" m="5rem auto"p="60px 50px" borderRadius={"10px"} bgGradient={"linear-gradient(90deg, #f47f7f 0%, #835ce5 100%)"}>
        <Flex direction={"column"} w="70%"  alignItems={"center"}>
          <Heading fontSize={"3xl"} color="white">Start completing more marketing with Marketing Suite</Heading>
          <Text mt="2rem" mb="0.5rem" w="40%" fontWeight={"semibold"} bgColor={"white"} color="#f37e5d" p="0.8rem 2rem" borderRadius={"5px"} cursor="pointer" >Request Your Demo</Text>
          <Link to="#"color={"white"} fontStyle="italic">or Get Started Free</Link>
        </Flex>
      </Flex>
      {/* Feedback 01 */}
      <Flex direction={"column"} alignContent="center"  w="65%" m="4rem auto" gap="1rem">
        <Text fontSize="lg" fontStyle={"italic"}>"CoSchedule Marketing Suite has been a fabulous tool for managing projects. It’s so seamless.<br /> There’s no more back-and-forth on whether projects have been completed. It’s all right there <br />where everybody can see it, so everybody’s accountable"</Text>
        <Flex gap="1rem"justifyContent="center">
          <Avatar size={"lg"} src="https://coschedule.com/img/testimonials/debora-spano-umass.png"/>
          <Flex direction={"column"} textAlign="left">  
            <Text fontWeight={"semibold"}>DEBORA SPANO</Text>
            <Text fontWeight={"hairline"}>Proactive Media Relations Manager</Text>
          </Flex>
        </Flex>
        <Text fontWeight={"semibold"} color="#f37e5d"><Link isExternal to="https://coschedule.com/customer-stories/umass-memorial">See how UMass Memorial gained back 93 productive hours every month.</Link></Text>
      </Flex>
      {/* pros of using coschedule */}
      <Flex alignItems="center" direction={"column"} w="90%" bgColor={"#f8f8f8"} mt="100px" h="auto" p="5rem">
        <Flex direction={"column"}  w="65%" gap="5rem">
            <Flex justifyContent={"space-between"} >
              <Flex direction={"column"} textAlign="left" gap="0.5rem">
              <Heading fontWeight={"500"}>Complete more work</Heading>
              <Text fontSize={"17px"} lineHeight="tall">Publish more content to generate a higher ROI by increasing <br /> your existing team’s productive work capacity. Eliminate <br /> endless email threads, unnecessary meetings, and desk <br /> drop-bys to <strong>
             complete 125% more work. </strong></Text>
            </Flex>
            <Image src ="https://coschedule.com/img/product/suite/suite-complete-more-work.png" h="200px"/>
          </Flex>
           <Flex justifyContent={"space-between"} >
            <Image src ="https://coschedule.com/img/product/suite/suite-deliver-projects-on-time.png" h="200px"/>
              <Flex direction={"column"} textAlign="left" gap="0.5rem">
              <Heading fontWeight={"500"}>Deliver Projects On Time</Heading>
              <Text fontSize={"17px"} lineHeight="tall">Develop a high-performance team that completes projects on time by balancing the predictability and flexibility of your work. Maintain <strong>on-time task completion rates greater than 90%.</strong></Text>
            </Flex>
          </Flex>
           <Flex justifyContent={"space-between"} >
              <Flex direction={"column"} textAlign="left" gap="0.5rem">
              <Heading fontWeight={"500"}>Prove your value</Heading>
              <Text fontSize={"17px"} lineHeight="tall">Get full visibility into your marketing operations to prioritize, plan, and manage a reliable pipeline of upcoming and in-flight projects. <strong>Focus 100% of your efforts </strong>on work that aligns with strategic business goals.</Text>
            </Flex>
            <Image src ="https://coschedule.com/img/product/suite/suite-prove-your-value.png" h="200px"/>
            </Flex>
        </Flex>
      </Flex>
      {/* Explore marketing suites */}
      <Box w="75%" m="5rem auto">
        <Heading my="2rem">Explore the Marketing Suite</Heading>
        <Flex>
          <Image src="https://coschedule.com/img/product/suite/suite-marketing-calendar2.png" h="630px" />
          <Flex direction="column" textAlign={"left"} gap="1rem" justifyContent="center">
            <Flex alignItems={"center"} gap="1rem">
              <Image src="https://coschedule.com/img/product/coschedule-marketing-calendar-product-icon.svg" h="50px" w="50px"/>
              <Text fontWeight={"semibold"}>CALENDAR ORGANIZER</Text>
            </Flex>
            <Heading>Visualize everything in <br/>real time</Heading>
            <Text> See every project on a unified calendar of record. Keep<br/> stakeholders "in the know.” Manage marketing requests<br/> and pivot quickly when priorities change.</Text>
            <Text border={"2px solid #f8f8f8"} p="0.5rem 1rem" color={"#f8f8f8"}>Explore More</Text>
          </Flex>
        </Flex>
        <Flex>
          <Flex direction="column" textAlign={"left"} gap="1rem" justifyContent="center">
            <Flex alignItems={"center"} gap="1rem">
              <Image src="https://coschedule.com/img/product/coschedule-content-organizer-product-icon.svg" h="50px" w="50px"/>
              <Text fontWeight={"semibold"}>CONTENT ORGANIZER</Text>
            </Flex>
            <Heading>Eliminate content <br/>bottlenecks from idea<br/>to promotion</Heading>
            <Text>Optimize your editorial process to save time and deliver <br />more. Centralize publishing and promotion by <br />connecting your tools.</Text>
            <Text border={"2px solid #f8f8f8"} p="0.5rem 1rem" color={"#f8f8f8"}>Explore More</Text>
          </Flex>
          <Image src="https://coschedule.com/img/product/suite/suite-content-organizer.png" h="630px" />

        </Flex>
        <Flex>
          <Image src="https://coschedule.com/img/product/suite/suite-work-organizer.png" h="630px" />
          <Flex direction="column" textAlign={"left"} gap="1rem" justifyContent="center">
            <Flex alignItems={"center"} gap="1rem">
              <Image src="https://coschedule.com/img/product/coschedule-work-organizer-product-icon.svg" h="50px" w="50px"/>
              <Text fontWeight={"semibold"}>WORK ORGANIZER</Text>
            </Flex>
            <Heading>Maximize resources to <br/>increase output</Heading>
            <Text>Implement consistent, defined workflows to speed up <br/>production and identify how urgent changes impact <br/>proactively planned work.</Text>
            <Text border={"2px solid #f8f8f8"} p="0.5rem 1rem" color={"#f8f8f8"}>Explore More</Text>
          </Flex>
        </Flex>
        <Flex>
          <Flex direction="column" textAlign={"left"} gap="1rem" justifyContent="center">
            <Flex alignItems={"center"} gap="1rem">
              <Image src="https://coschedule.com/img/product/coschedule-asset-organizer-product-icon.svg" h="50px" w="50px"/>
              <Text fontWeight={"semibold"}>ASSET  ORGANIZER</Text>
            </Flex>
            <Heading>Catalog and maintain control<br/> of brand assets</Heading>
            <Text>Customize taxonomies to quickly find, update, and share <br/>files. Securely share folders and files with stakeholders to<br/> make sure your work is up-to-date.</Text>
            <Text border={"2px solid #f8f8f8"} p="0.5rem 1rem" color={"#f8f8f8"}>Explore More</Text>
          </Flex>
          <Image src="https://coschedule.com/img/product/suite/suite-asset-organizer.png" h="630px" />

        </Flex>
      </Box>
      <Flex justifyContent={"center"} w="65%" m="5rem auto"p="60px 50px" borderRadius={"10px"} bgGradient={"linear-gradient(90deg, #f47f7f 0%, #835ce5 100%)"}>
        <Flex direction={"column"} w="70%"  alignItems={"center"}>
          <Heading fontSize={"3xl"} color="white">Take Control Of Your Process And<br /> Bring Your Team Together</Heading>
          <Text color={"white"} fontSize="lg" mt="1rem">Complete more work. Deliver projects on time. And prove your<br/> marketing value. All with the CoSchedule Marketing Suite.</Text>
          <Text mt="2rem" mb="0.5rem" w="40%" fontWeight={"semibold"} bgColor={"white"} color="#f37e5d" p="0.8rem 2rem" borderRadius={"5px"} cursor="pointer" >Request Your Demo</Text>
          <Link to="#"color={"white"} fontStyle="italic">or Get Started Free</Link>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  )
}

export default MarketingSuite