import React from "react";
import { useState, useEffect } from "react" ;
import {
    Flex,
    Box,
    CircularProgress,
    CircularProgressLabel,
    Text,
    Grid,
    Icon,
    Checkbox
  } from '@chakra-ui/react';
  import {FaCheckCircle,FaTimesCircle,FaAngleRight,FaTrophy} from "react-icons/fa"
  
  import {FiX} from 'react-icons/fi'
  
  import './gettingstarted.css'
  
  

  
export const Gettingstarted = ()=> {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
  const [progress, setprogress] = useState(0);
  const handleCheck = (value) =>{
    value.target.checked
      ? setprogress(progress + 20)
      : setprogress(progress - 20);
  }
  function CustomIcon(props) {
    const { isIndeterminate, isChecked, ...rest } = props
  
    const d = isIndeterminate
      ? <FiX/> : FaCheckCircle
  
    return (
      <Icon as={d} left="2.5" top="2.5" size="xl" position="absolute">
        
      </Icon>
    )
  }
    return (

                <Box
                  padding={"15px"}
                  
                  marginBottom="30px"
                  borderRadius={"10px"}
                  height="auto"
                  boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                >
                  <Flex direction={"column"} textAlign="left" gap="8px">
                    <Text fontWeight="semibold" fontSize="20px">
                      🏆Getting Started
                    </Text>
                    <Text fontFamily="sans-serif" fontSize="15px">
                      Successful marketers complete these milestones within
                      their first week.
                    </Text>
                  </Flex>
                  <Flex>
                    <Grid
                      w="85%"
                      height="auto"
                      paddingTop="10px"
                      templateColumns="repeat(2, 1fr)"
                      
                      templateRows="auto"
                      gap="6"
                      className="getting_started"
                    >
                      <Flex
                        borderRadius="5px"
                        w="100%"
                        padding="10px"
                        minH="100px"
                        maxH="auto"
                        border="1px solid gray"
                        gap="10px"
                        className="getting-grid"
                      >
                        <Box>
                          <input
                            className="checkbox-round"
                            type="checkbox"
                            onChange={(value) => handleCheck(value)}
                          />
                        </Box>
                        <Box textAlign="left">
                          <Text fontSize="13px" fontWeight="semibold">
                            View the Getting Started Guide
                          </Text>
                          <Text
                            fontSize="12px"
                            fontWeight="medium"
                            color="gray"
                          >
                            Get tips & best practices to organize all of your
                            marketing on your new calendar.
                          </Text>
                        </Box>
                      </Flex>
                      <Flex
                        borderRadius="5px"
                        w="100%"
                        padding="10px"
                        minH="100px"
                        maxH="auto"
                        border="1px solid gray"
                        gap="10px"
                        className="getting-grid"
                      >
                        <Box>
                          <input
                            className="checkbox-round"
                            type="checkbox"
                            onChange={(value) => handleCheck(value)}
                          />
                        </Box>
                        <Box textAlign="left">
                          <Text fontSize="13px" fontWeight="semibold">
                            Connect an integration
                          </Text>
                          <Text
                            fontSize="12px"
                            fontWeight="medium"
                            color="gray"
                          >
                            Sync content from your favorite tools like
                            WordPress, Mailchimp, Facebook, Twitter, & more.
                          </Text>
                        </Box>
                      </Flex>
                      <Flex
                        borderRadius="5px"
                        w="100%"
                        padding="10px"
                        minH="100px"
                        maxH="auto"
                        border="1px solid gray"
                        gap="10px"
                        className="getting-grid"
                      >
                        <Box>
                          <input
                            className="checkbox-round"
                            type="checkbox"
                            onChange={(value) => handleCheck(value)}
                          />
                        </Box>
                        <Box textAlign="left">
                          <Text fontSize="13px" fontWeight="semibold">
                            Create your first project
                          </Text>
                          <Text
                            fontSize="12px"
                            fontWeight="medium"
                            color="gray"
                          >
                            Add your planned marketing projects to your calendar
                            to get total visibility of all your work.
                          </Text>
                        </Box>
                      </Flex>
                      <Flex
                        borderRadius="5px"
                        w="100%"
                        padding="10px"
                        minH="100px"
                        maxH="auto"
                        border="1px solid gray"
                        gap="10px"
                        className="getting-grid"
                      >
                        <Box>
                          <input
                            className="checkbox-round"
                            type="checkbox"
                            onChange={(value) => handleCheck(value)}
                          />
                        </Box>
                        <Box textAlign="left">
                          <Text fontSize="13px" fontWeight="semibold">
                            Create a social message
                          </Text>
                          <Text
                            fontSize="12px"
                            fontWeight="medium"
                            color="gray"
                          >
                            Schedule & publish social messages on Facebook,
                            Instagram, LinkedIn, Pinterest, & Twitter.
                          </Text>
                        </Box>
                      </Flex>
                      <Flex
                        borderRadius="5px"
                        w="100%"
                        padding="10px"
                        minH="100px"
                        maxH="auto"
                        border="1px solid gray"
                        gap="10px"
                        className="getting-grid"
                      >
                        <Box>
                          <input
                            className="checkbox-round"
                            type="checkbox"
                            onChange={(value) => handleCheck(value)}
                          />
                        </Box>
                        <Box textAlign="left">
                          <Text fontSize="13px" fontWeight="semibold">
                            Customize your calendar
                          </Text>
                          <Text
                            fontSize="12px"
                            fontWeight="medium"
                            color="gray"
                          >
                            Update your settings to visually organize your
                            calendar with color labels, project types, & tags.
                          </Text>
                        </Box>
                      </Flex>
                    </Grid>
                    <Flex
                      w="20%"
                      height="300px"
                      alignItems={"center"}
                      justifyContent="center"
                    >
                      <CircularProgress
                        value={progress}
                        size="120px"
                        thickness="5px"
                        color="green.400"
                      >
                        <CircularProgressLabel
                          textAlign={"center"}
                          marginTop="-10px"
                        >
                          {progress}%
                        </CircularProgressLabel>
                        <Text fontSize={"13px"} color="gray.400">
                          Setup progress
                        </Text>
                      </CircularProgress>
                    </Flex>
                  </Flex>
                </Box>
            
        
      
  
    )
         
            
             
          
          
         
    
}