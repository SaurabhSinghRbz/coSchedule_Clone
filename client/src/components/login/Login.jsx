// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Heading,
//   FormHelperText,
//   Button,
//   Flex,
//   useMediaQuery,
//   useToast,
//   Spinner,
// } from "@chakra-ui/react";
// import React from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { isLogin } from "../../Redux/logger/action";
// import { useNavigate } from "react-router-dom";

// import { useEffect, useState } from "react";
// export const Login = () => {
//   const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   // add....................
//   const Navigate = useNavigate();
//   const toast = useToast();
//   const dispatch = useDispatch();

//   const onChangeInput = (e) => {
//     // console.log(e.target)
//     const { id, value } = e.target;
//     setUser({ ...user, [id]: value });
//     // console.log("user",user)
//   };
//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 500);
//   }, []);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("https://unit-5-backend-part.herokuapp.com/login", user
//         // email: user.email,
//         // password: user.password,
//       )
//       .then((res) => {
//         localStorage.setItem("loginUser", JSON.stringify(res.data));
//         // console.log("data",res.data)
//         dispatch(isLogin(res.data));
//         setTimeout(() => {
//           Navigate("/register-calendar");
//         }, 1000);
//         setUser({
//           email: "",
//           password: "",
//         });
//         toast({
//           title: "Login Successfull !!!",
//           status: "success",
//           duration: 2000,
//           isClosable: true,
//           position: "top",
//         });
//       })
//       .catch((e) => {

//         toast({
//           title: "Login Failed !!!",
//           status: "error",
//           duration: 2000,
//           isClosable: true,
//           position: "top",
//         });
//         Navigate("/register");
//       });
//   };
//   return (
//     <div className="login">
//       {/* { console.log("user",user)} */}
//       {isLoading ? (
//         <Flex justify="center" mt={"5"}>
//           <Spinner
//             thickness="5px"
//             speed="0.65s"
//             emptyColor="gray.200"
//             color="#3182ce"
//             size="lg"
//           />
//         </Flex>
//       ) : (
//         <Flex
//           justify="center"
//           align="center"
//           direction="column"
//           textAlign="center"
//         >
//           <Heading mt="10" as="h2" size="lg">
//             LogIn
//           </Heading>
//           <FormControl
//             w={isLargerThan992 ? "30%" : "70%"}
//             h="350px"
//             margin="auto"
//             boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
//             borderRadius="lg"
//             p={"3"}
//             cursor="pointer"
//             mt={5}
//           >
//             {/* Email...................... */}
//             <FormLabel htmlFor="email">Email Adress</FormLabel>
//             <Input
//               focusBorderColor="RGBA(0, 0, 0, 0.64)"
//               id="email"
//               type="email"
//               placeholder="Enter email"
//               value={user.email}
//               onChange={(e) => {
//                 onChangeInput(e);
//               }}
//             />
//             {/* Password ................................ */}
//             <FormHelperText>We'll never share your email.</FormHelperText>
//             <FormLabel htmlFor="Password">Password</FormLabel>
//             <Input
//               type="password"
//               id="password"
//               focusBorderColor="RGBA(0, 0, 0, 0.64)"
//               placeholder="Enter password"
//               value={user.password}
//               onChange={(e) => {
//                 onChangeInput(e);
//               }}
//             />

//             <Button
//               mt="20px"
//               w="100%"
//               borderColor="#ccd0d5"
//               colorScheme="RGBA(0, 0, 0, 0.92)"
//               _focus={{
//                 boxShadow:
//                   "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
//               }}
//               transform="scale(0.98)"
//               background="#000000"
//               width="200px"
//               _hover={{
//                 bg: "#f5f6f7",
//                 background: "RGBA(0, 0, 0, 0.80)",
//                 transform: "scale(0.98)",
//               }}
//               onClick={(e) => {
//                 handleSubmit(e);
//               }}

//             >
//               Login
//             </Button>

//             {/* <div>or</div>
//             <Button
//               mt="20px"
//               w="100%"
//               borderColor="#ccd0d5"
//               colorScheme="RGBA(0, 0, 0, 0.92)"
//               _focus={{
//                 boxShadow:
//                   "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
//               }}
//               transform="scale(0.98)"
//               background="#000000"
//               width="200px"
//               _hover={{
//                 bg: "#f5f6f7",
//                 background: "RGBA(0, 0, 0, 0.80)",
//                 transform: "scale(0.98)",
//               }}
//               //  onClick={
//               // window.location.href = "./register"

//               //  }
//             >
//               Signup
//             </Button> */}
//           </FormControl>
//         </Flex>
//       )}
//     </div>
//   );
// };
import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  FormHelperText,
  Button,
  Flex,
  Stack,
  Text,
  useMediaQuery,
  useToast,
  Spinner,
  Image,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isLogin } from "../../Redux/logger/action";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import googleIcon from "../../Assets/google.png";
import { useEffect, useState } from "react";
export const Login = () => {
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // add....................
  const Navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    // console.log(e.target)
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
    // console.log("user",user)
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://coschedule-api.herokuapp.com/api/auth/login",
        user
        // email: user.email,
        // password: user.password,
      )
      .then((res) => {
        localStorage.setItem("loginUser", JSON.stringify(res.data));
        localStorage.setItem("data", res.data.data.data.email);
        dispatch(isLogin(res.data));
        setTimeout(() => {
          Navigate("/register-calendar");
        }, 1000);
        setUser({
          email: "",
          password: "",
        });
        toast({
          title: "Login Successfull !!!",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((e) => {
        toast({
          title: "Login Failed !!!",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        Navigate("/register");
      });
  };
  return (
    <div className="login">
      {/* { console.log("user",user)} */}
      {isLoading ? (
        <Flex justify="center" mt={"5"}>
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#3182ce"
            size="lg"
          />
        </Flex>
      ) : (
        <Flex
          justify="center"
          align="center"
          direction="column"
          textAlign="center"
        >
          <Heading mt="10" as="h2" size="lg" color="lightpink">
            CoSchedule
          </Heading>
          <FormControl
            w={isLargerThan992 ? "30%" : "70%"}
            h="auto"
            margin="auto"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            borderRadius="lg"
            p={5}
            cursor="pointer"
            mt={5}
          >
            {/* Email...................... */}
            <FormLabel htmlFor="email">Email Adress</FormLabel>
            <Input
              focusBorderColor="RGBA(0, 0, 0, 0.64)"
              id="email"
              type="email"
              placeholder="Enter email"
              value={user.email}
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
            {/* Password ................................ */}
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel htmlFor="Password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              focusBorderColor="RGBA(0, 0, 0, 0.64)"
              placeholder="Enter password"
              value={user.password}
              onChange={(e) => {
                onChangeInput(e);
              }}
            />

            <Button
              mt="20px"
              w="100%"
              borderColor="#ccd0d5"
              colorScheme="RGBA(0, 0, 0, 0.92)"
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
              transform="scale(0.98)"
              background="#f37e5d"
              width="100%"
              _hover={{
                bg: "#f5f6f7",
                background: "RGBA(0, 0, 0, 0.80)",
                transform: "scale(0.98)",
              }}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Login
            </Button>
            <Button
              borderWidth="1px"
              alignItems="center"
              fontWeight="600"
              justifyContent="center"
              backgroundColor="white"
              w="100%"
              mt={5}
            >
              <Image src={googleIcon} w="30px" mr={2} />
              CONTINUE WITH GOOGLE
            </Button>
            <Stack pt={6}>
              <Text align={"center"}>
                Don't have account?{" "}
                <RouterLink to="/register" color={"red.400"}>
                  Signup
                </RouterLink>
              </Text>
            </Stack>
          </FormControl>
        </Flex>
      )}
    </div>
  );
};
