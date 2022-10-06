import { useState, useEffect } from "react" ;
import {
    Flex,
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabPanels,
    Image

  } from '@chakra-ui/react';
  import styled from "styled-components"
  
  const Hr = styled.hr`
background : #666;
width : 100%;

`
  
export const Notificationpanel= ()=> {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
    return (
        <Flex mt="5" w="30%" display={matches ? "block" : "none"} justifyContent="space-around" 
        
        >
        <Box
         h="full" borderRadius="10px"
         orderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          w="full"
        >
        <Box
        color="grey"
        
        >
        <Tabs isFitted variant='unstyled'>
  <TabList>
    <Tab _selected={{ color: '#d17760' }}>Notification</Tab>
    <Tab _selected={{ color: '#d17760' }}>Recent</Tab>
    <Tab _selected={{ color: '#d17760' }}>Favorites</Tab>
  </TabList>
  <Hr />
  <TabPanels>
    <TabPanel>
      <Image  src="https://app.coschedule.com/img/notifications-empty-1888c22fd951298ea32d6524dcd478f6.png" />
    </TabPanel>
  </TabPanels>
</Tabs>

        </Box>
        </Box>
      </Flex>
  
    )
         
            
             
          
          
         
    
}