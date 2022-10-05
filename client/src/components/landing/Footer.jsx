import styles from "../../styles/Footer.module.css";
import {
  Box,
  Container,
  Stack,
  VStack,
  HStack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"8xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <VStack>
            <Box>
              {" "}
              <img
                src="https://coschedule.com/img/cos-logo-icon.svg"
                alt=""
                width={"50px"}
              />
            </Box>
            <Box textAlign= 'left' paddingBottom={'8px'}>
            <Box className={styles.heading}>
              <button>Sign up </button>
            </Box>
            <Box className={styles.heading}>
              <button>Request A Demo </button>
            </Box>
            <Box className={styles.heading}>
              <button>Sign in </button>
            </Box>
            </Box>
            <Box>
              <HStack>
                <img
                  src="	https://coschedule.com/img/testimonials/g2crowd-badge.png"
                  alt=""
                  width="60px"
                />
                <img
                  src="	https://coschedule.com/img/testimonials/gartner-badge.png"
                  alt=""
                  width="60px"
                />
                <img
                  src="	https://coschedule.com/img/testimonials/forbes-badge.png"
                  alt=""
                  width="60px"
                />
              </HStack>
            </Box>
          </VStack>

          <Stack className={styles.heading} align={"flex-start"}>
            <ListHeader>Products</ListHeader>
            <Link href={"#"}>Marketing Calender</Link>
            <Link href={"#"}>Marketing Suite</Link>
            <Link href={"#"}>Headline Studio</Link>
            <Link href={"#"}>Actionable Marketing Institute</Link>
            <br />
            <br />
            <br />

            <ListHeader>Products</ListHeader>
            <Link href={"#"}>Marketing Calender</Link>
            <Link href={"#"}>Marketing Suite</Link>
            <Link href={"#"}>Headline Studio</Link>
            <Link href={"#"}>Actionable Marketing Institute</Link>
          </Stack>

          <Stack className={styles.heading} align={"flex-start"}>
            <ListHeader>WHY COSCHEDULE</ListHeader>
            <Link href={"#"}>Customer Stories</Link>
            <Link href={"#"}>Support</Link>
            <Link href={"#"}>Product Announcements</Link>
            <Link href={"#"}>Pricing</Link>
            <br />
            <br />
            <br />
            <ListHeader>WHY COSCHEDULE</ListHeader>
            <Link href={"#"}>Customer Stories</Link>
            <Link href={"#"}>Support</Link>
            <Link href={"#"}>Product Announcements</Link>
            <Link href={"#"}>Pricing</Link>
          </Stack>

          <Stack className={styles.heading} align={"flex-start"}>
            <ListHeader>COMPANY</ListHeader>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Jobs</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Affiliate Program</Link>
            <br />

            <Stack align={"flex-start"}>
              <ListHeader>TOOLS</ListHeader>
              <Link href={"#"}>Headline Analyzer</Link>
              <Link href={"#"}>Email Subject Line Tester</Link>
              <Link href={"#"}>Social Message Optimizer</Link>
              <Link href={"#"}>Marketing Dictionary</Link>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"5xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={1}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
          opacity="0.4"
        >
          <Text>© All rights reserved</Text>
          <Stack direction={"row"} spacing={3}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"facebook"} href={"#"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"facebook"} href={"#"}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mymjCqy4HaGQhVKPA9XzCKejn8cUvgOWcQ&usqp=CAU"
                alt=""
              />
            </SocialButton>
            <SocialButton>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                alt=""
              />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
  //https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png
}
export default Footer;
