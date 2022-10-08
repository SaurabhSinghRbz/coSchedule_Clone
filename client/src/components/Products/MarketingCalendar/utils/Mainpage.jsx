import { Box, Flex, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import NavbarCalendar from './NavbarCalendar'
import qoute from "./quotes.png"
import bookmark from "./bookmark.png"
// import Footer from '../../../Footer'
const Mainpage = () => {
    return (
        <Box w="75vw" textAlign={"left"}>
            <NavbarCalendar />  
            <Box>
                <Box  h="70vh"  fontFamily={'sans-serif'} bgGradient="linear-gradient(90deg,#f37e5d 0%,#f9a97d)">
                <Flex direction={"column"} justifyContent="center" w="75%" color={"white"} px="1rem" m="auto"textAlign="left"  h="50%">
                    <Heading fontSize={"5xl"} >Bring Together ALL Your Marketing In One Calendar</Heading>
                    <Text fontSize={"xl"} mt="1rem">Finally see, schedule, & share all your marketing in a forever-free Marketing Calendar</Text>
                </Flex>
            </Box>
                <Box mt="-25%"><Image src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fmarketing-calendar-hero.png&w=1200&q=75" /></Box>
           </Box>
            <Flex  direction={"column"} gap="15px" p="30px" maxW="570px" m="auto">
                <Text fontSize={"3xl"} fontWeight="500" >Wish There Was An Easier Way To Manage Your Marketing?</Text>
                <Text color={"gray"}>
                    You’ve got more marketing to get done. Multiple projects. An endless to-do list. Lots of ideas. Tons of spreadsheets & Google Docs. But you only have a limited amount of time and resources to get it all done.
                </Text>
                <Text color={"gray"}>
                    Having more marketing to coordinate results in marketing chaos. This is total disorganization that leaves you feeling anxious, overwhelmed, and unsure how to handle it all.
                </Text>
            </Flex>
            <Box>
                <Image m="auto" src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fmarketing-chaos.png&w=750&q=75" />
                <Box mt="-220"  bgColor={"#fff5ef"} h="250px">
                </Box>
            </Box>
            <Box  h="100vh" bgColor={"#fff5ef"} pt="2rem" >
                <Flex alignItems={"center"} boxShadow="md" gap="20px" w="80%" m="auto"  p="2rem" bgColor="white" borderRadius={"xl"}>
                    <Image h="150px" src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Ftop-marketers-report-success.png&w=256&q=75 " />
                    <Flex direction={"column"} gap="1rem">
                        <Text fontSize={"xl"}>Marketers are <Text as={"span"} fontWeight="bold">414% more likely to report success </Text>when they document their marketing strategy.</Text>
                        <Text fontStyle={"italic"} fontWeight="hairline"><Link href='https://coschedule.com/marketing-statistics'>Source: CoSchedule's 2022 Report on Marketing Strategy</Link></Text>
                    </Flex>
                </Flex>
                <Flex  direction={"column"} gap="15px" p="30px" maxW="570px" m="3rem auto">
                <Text fontSize={"3xl"} fontWeight="500" >Handle It All In With CoSchedule Marketing Calendar</Text>
                <Text color={"gray"}>
                    It’s your secret weapon that gives you total visibility of your marketing in real-time.
                </Text>
                <Text color={"gray"}>
                   Add all projects, tasks, ideas, social messages, & other marketing to finally have everything in one place.
                </Text>
            </Flex>
            </Box>
            <Box mt="-19.5%">
                <Image m="auto" src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fmarketing-bliss.png&w=750&q=75" />
            </Box>
            <Flex  direction={"column"} gap="15px" p="30px" maxW="570px" m="auto">
                <Text fontSize={"2xl"} fontWeight="500" ><Image src={qoute } h="30px" display={"inline"} mr="0.5rem"/>Before CoSchedule, everything was scattered between emails & spreadsheets. With Marketing Calendar, I can easily organize all of my marketing and keep everyone on the same page.</Text>
                 <Text fontStyle={"italic"} fontWeight="hairline">Beverly Cook, Director of Communications at NYC Leadership Center</Text>
            </Flex>
            <Flex w="80%" borderRadius={"md"} m="3rem auto" p="70px 90px"  bgGradient={"linear-gradient(90deg,#f37e5d 0%,#f9a97d)"}>
                <Heading textAlign={"center"} color="white" fontSize={"3xl"}>Take Control, See All Your Work, & Show Your Progress With Marketing Calendar.</Heading>
            </Flex>
            <Flex direction={"column"} w="80%" m="4rem auto">
                <Flex justifyContent={"center"} alignItems="center">
                    <Image src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fsee-everything-together.png&w=1080&q=75" h="500px"/>
                    <Flex direction={"column"} gap="1rem">
                        <Heading fontSize={"3xl"} fontWeight="600">  See Everything <br/>Together (Finally)</Heading>
                        <Text color={"gray"}>Get instant clarity into all your projects and confirm you’re working on the right priorities.</Text>
                    </Flex>
                </Flex>
                <Flex justifyContent={"center"} alignItems="center">
                    <Flex direction={"column"} gap="1rem">
                        <Heading fontSize={"3xl"} fontWeight="600">  Stay Flexible When <br /> Plans Change</Heading>
                        <Text color={"gray"}>Make rescheduling a breeze by dragging and dropping projects right in the calendar.</Text>
                    </Flex>
                    <Image src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fstay-flexible.png&w=1080&q=75" h="500px"/>
                </Flex>
                <Flex justifyContent={"center"} alignItems="center">
                    <Image src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fplan-social-campaigns.png&w=1080&q=75" h="500px"/>
                    <Flex direction={"column"} gap="1rem">
                        <Heading fontSize={"3xl"} fontWeight="600">  Plan Integrated <br/> Social Campaigns</Heading>
                        <Text color={"gray"}>Create, schedule, & publish social campaigns to promote your blog posts, events, and other initiatives. Then analyze the results with social reports.</Text>
                    </Flex>
                </Flex>
                <Flex justifyContent={"center"} alignItems="center">
                    <Flex direction={"column"} gap="1rem">
                        <Heading fontSize={"3xl"} fontWeight="600">Share Your Progress <br />With Higher-Ups</Heading>
                        <Text color={"gray"}>Easily prove the marketing you do every day makes a difference to your company.</Text>
                    </Flex>
                    <Image src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fshare-progress.png&w=1080&q=75" h="500px"/>
                </Flex>
            </Flex>
            <Box w="80%" m="auto">
                <Heading fontWeight="500" my="1rem">Transform The Way You Work In Just 14 Days (Or Less!)</Heading>
                <Text fontSize={"lg"} textAlign={"center"}>Join thousands of marketers who have totally organized their marketing in just two weeks (or less!).</Text>
                <Image src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Ftransform-the-way-you-work.png&w=1200&q=75" />
            </Box>
            <Flex textAlign={"left"} direction={"column"} gap="15px" p="30px" maxW="570px" m="auto">
                <Text fontSize={"2xl"} fontWeight="500" ><Image src={qoute } h="30px" display={"inline"} mr="0.5rem"/>Completing marketing projects used to be a huge challenge. I love that CoSchedule lets us organize our marketing, helps us get work done, and gives my CEO visibility into everything we do.</Text>
                 <Text fontStyle={"italic"} fontWeight="hairline">iorella Rollins, Marketing Specialist at Joovy</Text>
            </Flex>
            <Box bgColor={"#fff5ef"} pt="2rem"pb="3rem">
                <Box w="90%" m="auto">
                    <Box m="5rem auto" textAlign={"center"} >
                        <Heading fontSize={"3xl"} fontWeight="500" pb="1rem" pt="2rem">Want To Complete Even More Marketing In Less Time?</Heading>
                        <Text fontSize={"md"} color="gray">  Upgrade to Marketing Calendar Pro to unlock these premium features.</Text>
                    </Box>
                    <Box  w="90%" m="auto" >
                        <Flex justifyContent={"center"} alignItems="center">
                            <Flex direction={"column"} gap="1rem">
                                <Text color={"orange"}>TEAM COLABORATION</Text>
                                <Heading fontSize={"3xl"} fontWeight="600"> Collaborate With Your Team To Share Progress In Real-Time</Heading>
                                <Text color={"gray"}>Easily share marketing updates with your boss, provide feedback on projects, & assign out work to your team.</Text>
                            </Flex>
                                <Image src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fteam-collaboration.png&w=1080&q=75" h="500px"/>
                        </Flex>
                        <Grid gridTemplateColumns={"repeat(2,1fr)"} gap="2rem" mt="2rem">
                            <GridItem>
                                <Flex direction={"column"} gap="1rem" >
                                    <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Finvite-your-team.png&w=96&q=75' h="80px" w="80px" />
                                    <Text fontSize={"2xl"} fontWeight={"semibold"}>Invite Your Entire Team</Text>
                                    <Text>Add your interns, coworkers, & other contributors to your Marketing Calendar, so you can easily assign tasks & define priorities for your entire team.</Text>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex direction={"column"} gap="1rem" >
                                    <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fdiscussions.png&w=96&q=75' h="80px" w="80px" />
                                    <Text fontSize={"2xl"} fontWeight={"semibold"}> Discussions</Text>
                                    <Text>Stop wasting time tracking down project updates - there’s a better way to collaborate. Share project updates, feedback, & other details inside each project with discussions.</Text>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex direction={"column"} gap="1rem" >
                                    <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fread-only-views.png&w=96&q=75' h="80px" w="80px" />
                                    <Text fontSize={"2xl"} fontWeight={"semibold"}>Unlimited Read-Only Observer Views</Text>
                                    <Text>Provide project updates to your boss, clients, or anyone on your team. Create & share observer links for any calendar view, project, or social campaign.</Text>
                                </Flex>
                            </GridItem>
                        </Grid>
                         <Flex justifyContent={"center"} alignItems="center">
                            <Flex direction={"column"} gap="1rem">
                                <Text color={"orange"}>PREMIUM TASK MANAGEMENT</Text>
                                <Heading fontSize={"3xl"} fontWeight="600"> Spend Less<br/>Time Coordinating</Heading>
                                <Text color={"gray"}>Automatically assign repetitive & recurring tasks, so you can focus on the work that matters most.</Text>
                            </Flex>
                                <Image src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Ftask-management.png&w=1080&q=75" h="500px"/>
                        </Flex>
                        <Grid gridTemplateColumns={"repeat(2,1fr)"} gap="2rem" mt="2rem">
                            <GridItem>
                                <Flex direction={"column"} gap="1rem" >
                                    <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fexisting-project-duplication.png&w=96&q=75' h="80px" w="80px" />
                                    <Text fontSize={"2xl"} fontWeight={"semibold"}>Existing Project Duplication</Text>
                                    <Text>Duplicate any existing project to add new projects, events, or social campaigns to your calendar in seconds.</Text>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex direction={"column"} gap="1rem" >
                                    <Image src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Freusable-task-templates.png&w=96&q=75" h="80px" w="80px" />
                                    <Text fontSize={"2xl"} fontWeight={"semibold"}> Reusable Task Templates</Text>
                                    <Text>Use Task Templates to assign tasks & keep work moving forward using reusable project checklists.</Text>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex direction={"column"} gap="1rem" >
                                    <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Frecurring-tasks.png&w=96&q=75' h="80px" w="80px" />
                                    <Text fontSize={"2xl"} fontWeight={"semibold"}>Recurring Tasks & Events</Text>
                                    <Text>Set repeating tasks or events on a recurring schedule. Choose the perfect frequency, and they’ll automatically show on your calendar.</Text>
                                </Flex>
                            </GridItem>
                        </Grid>
                         <Flex justifyContent={"center"} alignItems="center">
                            <Flex direction={"column"} gap="1rem">
                                <Text color={"orange"}>ADVANCED SOCIAL PUBLISHING</Text>
                                <Heading fontSize={"3xl"} fontWeight="600"> Never Miss Another <br/>Important Social<br/> Post Again</Heading>
                                <Text color={"gray"}>Plan, create, schedule, & consistently publish to all of your social profiles in one place.</Text>
                            </Flex>
                                <Image src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fsocial-publishing.png&w=1080&q=75" h="500px"/>
                        </Flex>
                         <Grid gridTemplateColumns={"repeat(2,1fr)"} gap="2rem" mt="2rem">
                            <GridItem>
                                <Flex direction={"column"} gap="1rem" >
                                    <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Funlimited-social-messages.png&w=96&q=75' h="80px" w="80px" />
                                    <Text fontSize={"2xl"} fontWeight={"semibold"}>Unlimited Social Messages.</Text>
                                    <Text>Connect all your social profiles to your calendar. Then create & schedule unlimited social messages to build out your entire social strategy alongside the rest of your marketing.</Text>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex direction={"column"} gap="1rem" >
                                    <Image src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fsocial-templates.png&w=96&q=75" h="80px" w="80px" />
                                    <Text fontSize={"2xl"} fontWeight={"semibold"}> Social Templates</Text>
                                    <Text>Eliminate manual social scheduling. Create predefined social sharing plans you can reuse again & again to promote your content, blog posts, events, & other campaigns.</Text>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex direction={"column"} gap="1rem" >
                                    <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fbulk-social-upload.png&w=96&q=75' h="80px" w="80px" />
                                    <Text fontSize={"2xl"} fontWeight={"semibold"}>Bulk Social Upload</Text>
                                    <Text>Use Bulk Social Upload to upload, finalize, & schedule up to 365 social messages on your calendar with a CSV file import.</Text>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex direction={"column"} gap="1rem" >
                                    <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Frequeue-social-automation.png&w=96&q=75' h="80px" w="80px" />
                                    <Text fontSize={"2xl"} fontWeight={"semibold"}>ReQueue - Social Media Automation</Text>
                                    <Text>ReQueue continuously publishes your best content to your social channels for you & automates your recurring social promotions.</Text>
                                </Flex>
                            </GridItem>
                        </Grid>
                        <Box color="white"  borderRadius={"md"} m="3rem auto" p="70px 90px" bgGradient={"linear-gradient(90deg,#f37e5d 0%,#f9a97d)"}>
                            <Heading textAlign={"center"} fontSize="3xl" my="1rem">See Everything In A Marketing Calendar You Can Share</Heading>
                            <Text fontSize={"md"} textAlign={"center"}> Take control of your process. See all your projects together. And show your progress. All with CoSchedule Marketing Calendar.</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
           
      </Box>
  )
}

export default Mainpage