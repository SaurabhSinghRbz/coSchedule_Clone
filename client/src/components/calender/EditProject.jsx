import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  Popover,
  Button,
  Portal,
  Img,
  Editable,
  EditablePreview,
  EditableTextarea,
  Text,
  Avatar,
  Heading,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Select,
  List,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { GrBlog } from "react-icons/gr";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DayContext } from "../../context/DayContext";
import { useSelector, useDispatch } from "react-redux";
import { deleteProject, editProject } from "../../Redux/App_reducer/action";
import Tasks from "./Tasks";
import axios from "axios";
const EditProject = () => {
  const { projectRefNo } = useContext(DayContext);
  const [editText, setEditText] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.App_reducer.project);
  const { email } = useSelector((state) => state.logger.isLogin.data.data);
  const [color, setcolor] = useState("white");
  console.log(data, projectRefNo);

  let project = data.filter((element) => element.refNO === projectRefNo);
  console.log(project);
  let editData = data.find((e) => e.refNO === projectRefNo);

  const navigate = useNavigate();

  const handleClose = async () => {
    await fetch(
      `https://coschedule-api.herokuapp.com/api/tasks/${projectRefNo}/?email=${email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...project[0],
          title: text,
          color: color,
        }),
      }
    );
    dispatch(editProject(projectRefNo, text, color));
    navigate("/calender");
  };

  const handleDelte = async () => {
    console.log("ProjectRedNo", projectRefNo);
    // await axios.delete(`https://coschedule-api.herokuapp.com/tasks/projectRefNo/?email=${email}`)
    fetch(
      `https://coschedule-api.herokuapp.com/api/tasks/${projectRefNo}/?email=${email}`,
      {
        method: "DELETE",
      }
    )
      .then(() => console.log("Successfully deleted projectRefNo"))
      .catch(() => console.log("Error deleting projectRefNo"));
    dispatch(deleteProject(projectRefNo));
    alert("Project Deleted");

    navigate("/calender");
  };
  const [text, setText] = useState(editData.title);

  return (
    <Box
      w="90%"
      m="auto"
      marginTop={"30px"}
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
      h="auto"
      border="1px solid lightgrey"
      mb={"30px"}
    >
      <Box h="5rem" border="1px solid lightgrey">
        <Flex justifyContent={"space-between"} p="20px">
          <Input
            fontSize={"40px"}
            h="50px"
            w="600px"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Flex alignItems={"center"} w={"600px"} justifyContent="space-around">
            <Popover>
              <PopoverTrigger>
                <Avatar border={"1px solid lightgrey"} bg={color} size={"md"} />
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />

                  <PopoverCloseButton />
                  <PopoverBody>
                    <List>
                      <ListItem
                        m="auto"
                        justifyContent="center"
                        alignItem="center"
                      >
                        <Flex m="5" justifyContent="left" alignItem="center">
                          <Button
                            h="10"
                            w="10"
                            borderRadius="full"
                            bg="#B12EEE"
                            m="2"
                            onClick={() => {
                              setcolor("#B12EEE");
                            }}
                          ></Button>
                          <Text m="4">Color label 1</Text>
                        </Flex>
                      </ListItem>
                      <ListItem
                        m="auto"
                        justifyContent="center"
                        alignItem="center"
                      >
                        {" "}
                        <Flex m="5" justifyContent="left" alignItem="center">
                          <Button
                            h="10"
                            w="10"
                            borderRadius="full"
                            bg="#1D84FC"
                            m="2"
                            onClick={() => {
                              setcolor("#1D84FC");
                            }}
                          ></Button>
                          <Text m="4">Color label 2</Text>
                        </Flex>
                      </ListItem>
                      <ListItem
                        m="auto"
                        justifyContent="center"
                        alignItem="center"
                      >
                        <Flex m="5" justifyContent="left" alignItem="center">
                          <Button
                            h="10"
                            w="10"
                            borderRadius="full"
                            bg="#FF8917"
                            m="2"
                            onClick={() => {
                              setcolor("#FF8917");
                            }}
                          ></Button>
                          <Text m="4">Color label 3</Text>
                        </Flex>
                      </ListItem>
                      <ListItem
                        m="auto"
                        justifyContent="center"
                        alignItem="center"
                      >
                        {" "}
                        <Flex m="5" justifyContent="left" alignItem="center">
                          <Button
                            h="10"
                            w="10"
                            borderRadius="full"
                            bg="green"
                            m="2"
                            onClick={() => {
                              setcolor("green");
                            }}
                          ></Button>
                          <Text m="4">Color label 4</Text>
                        </Flex>
                      </ListItem>
                      <ListItem
                        m="auto"
                        justifyContent="center"
                        alignItem="center"
                      >
                        {" "}
                        <Flex m="5" justifyContent="left" alignItem="center">
                          <Button
                            h="10"
                            w="10"
                            borderRadius="full"
                            bg="red"
                            m="2"
                            onClick={() => {
                              setcolor("red");
                            }}
                          ></Button>
                          <Text m="4">Color label 5</Text>
                        </Flex>
                      </ListItem>

                      <ListItem
                        m="auto"
                        justifyContent="center"
                        alignItem="center"
                      >
                        <Flex m="5" justifyContent="left" alignItem="center">
                          <Button
                            h="10"
                            w="10"
                            borderRadius="full"
                            bg="white"
                            m="2"
                            onClick={() => {
                              setcolor("white");
                            }}
                          ></Button>
                          <Text m="4">No label</Text>
                        </Flex>
                      </ListItem>
                    </List>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
            <Button variant="ghost">
              {" "}
              <GrBlog ml="20px" /> Blog Post
            </Button>
            <Avatar
              size={"md"}
              src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png"
            />
            <Button variant="ghost">More Option</Button>
            <DeleteIcon cursor={"pointer"} onClick={handleDelte} />
            <CheckIcon cursor={"pointer"} onClick={handleClose} />
          </Flex>
        </Flex>
      </Box>
      <Flex>
        <Box w="65%" h="40rem">
          {editText ? (
            <Editable
              p="20px"
              textAlign={"start"}
              defaultValue="Write Here Despcription"
            >
              <EditablePreview />
              <EditableTextarea h="300px" />
            </Editable>
          ) : null}

          <Box marginTop="15%">
            <Text fontSize={"25px"} colorScheme="grey">
              Let's get to work!{" "}
            </Text>
            <Text fontSize={"25px"} colorScheme="grey">
              {" "}
              Organize your project by
            </Text>
            <Text fontSize={"25px"} colorScheme="grey">
              {" "}
              adding custom attachments.
            </Text>
            <Text fontSize={"20px"}>Attachment</Text>
            <Popover>
              <PopoverTrigger>
                <Button>
                  <EditIcon />
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent
                  ml="-300px"
                  marginTop="30px"
                  gap="50px"
                  flexDirection="row"
                >
                  <Img
                    onClick={() => {
                      setEditText(true);
                    }}
                    w="100px"
                    h="100px"
                    src="data:image/jpeg;base64,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"
                  />
                  <Img
                    w="100px"
                    h="100px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvcY0agB0VNZfGdh6sdMz_HCH-JU64oeS3w&usqp=CAU"
                  />
                  <Img
                    w="100px"
                    h="100px"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABCQkL7+/v39/dPT0+mpqbGxsbs7OwXFxe2trbJycl3d3fU1NQvLy+jo6M7OzuPj4/j4+NJSUmFhYVvb29VVVVbW1tnZ2fX19dgYGDg4OAgICA8PDxiYmKTk5MoKCh+fn68vLwLCwucnJySkpJeWSrHAAAErUlEQVR4nO3d63KiQBSFURAiFyUqERM1idHJvP8rzkQdoa1Aw4HeRzP7+03RrECkikvjeYwxxhhjjLFbK87SsdMOWajpyzavvvNei7WWL1i4552a6uzHoEABfX+lQpzigL7/rEAcI4F/92KMBoZzrBB/oEb/Bk4jlz2WRPSBev4dnQZuh3nz1YinH9LE8X9HYPwvQA/UYHUcc+54TFMIJQYPxyFHGGGicKBihQ9LPBErfPLwRLQQT4QLS+IGQ8QL0XtRQQgmagixB6qKEErUESIPVCUhkKglLInvrofWEsL+F/WEKKKiEHSgagpL4ovDKwyqQshe1BVWiM72orIQcKBqCytER5ugLnRO1Be6PlBvQFgSCxfEWxC6PVBvQuj0QL0NocsDFST0TsN81A7jjogSnu+kL2sXuDxLMPSBWiPMZp+z1n3OJtatSv9t/6zucZTLvZspQNj92QXrtYj4V/uVpe6Fglv7O9tAv9uv623Qf5lvhavuwifbcRo+tF/ZxLnwvbtwZR0pH7Ve2cK5MLJswTeN7UOFL21XVjgXerOPbr6k3V99UrRb72rIE0bN2SLMOtX6OYd4O2kqOt8qBgiVCkY/XRhSKIhCbBRKohAbhZIoxEahJAqxUSiJQmwUSqIQG06YL0b1vT3tqlee8uVo3rB0U/PRItcR5raLfqOSuO33fu2HQYQJl03bdKy8ALzvBby63wYT2q+/l3fA+r6+OFIRdtmHfd+x1dmHW9vNvsfy/3DdD5hsVYTedvrY0HxZ/XlYF03LWpoaQJ4PRVGIjUJJFGKjUBKF2CiURCE2CiVRiI1CSf+rMEinRTF13d8hUtMCE4ZPPqqrgVHCTxjQ9z9VhLhdePUaDUwInEjRfOIZJsyAwkxF6EWrBNMqMsYFng+DGNMVhWd8SRRio1AShdgolEQhNgolUYiNQkkUYqNQ0hDzYlxPkmGsaT1uWjozh4UJg36P4xWVldkeAjTn84cJ+37yYnZZk33uAmOqApiwwxQW31Y+M7q3LvugIhTMi2H0fFmT/Rs97ypCwbwYRuUEM/anT43Libjf0q7zYhi9Vm9FpI+Ny37MjHGBZ4tw3W1ijErruP2a1tfD8owviEJsFEqiEBuFkijERqEkCrFRKIlCbBRKqhHGkyiKGidx7N/XCFdTSuKEuw6z/vbqlzk7L0x4APm+OqgIn4HC5+rAMKFgpmRxxgTEMGHatEkDZ0zejbszs4cB9zp3Zjxve0gRHcwJB3jGF0UhNgolUYiNQkkUYqNQEoXYKJREITYKJbkX5tu8vh/whmXU/F74m/mNtTsUbht9XxlPFN+hcGcVvlQXv0Ph3irUmXFguOz3B4zHL+9QaP1WpPlpyDsUet5kt6jv90Fp9ha1KJREITYKJVGIjUJJFGKjUBKF2CiURCE2CiUFp6f05jciPH15aNCvx5/nuUxy+5KA8uS4NYV9yQ6d3ycfdqXSztetFoOudHJaqb9JI+3SzXlbJvbN7lDY96Nbwzf0j0LfSTCGb2zf6G4h59Rt0/A/Cdbr0tiKQU8V5+zzc+Aa9nf0UrZJtGXHkk1m31hhcZaOtUuz2L6hjDHGGGOMMXB/AFbjgPStNOjZAAAAAElFTkSuQmCC"
                  />
                  <Img
                    w="100px"
                    h="100px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDfNPHG4Xr6nAHFveVFn2s4Jgq5rfLnqBnw&usqp=CAU"
                  />
                  <Img
                    w="100px"
                    h="100px"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAEHCAMAAADI2meYAAAA4VBMVEX/ugD///8mhPwAZtoAgy0ArEfqQzX/uAD/0XR/r/0ZgPz/vACPniokeegAgS0Wl0IArzsWhrQAY90Ah//xczbaVF3sQTD/xUOCzJgAqT7pNybpNCL/tADtaWDudGzvfHTwgnv/+e3ucGcAXNj/5LT/03//x1D/vh71mmzwbCntZF//7cv/wTL/57zveHHrMRrlf13ZR1DhmaGNsFmF0JNLmdEYiToZb9xJmVxKg+B3r4R4n+arzLIAfRurwu/j7uYAeADj7Po6k1A6e970+P2fxaieue2Mu5aLrOnI3s7I1/S7gwK0AAADDklEQVR4nO3Xa3PSQBiG4V0PAYtajVUUUFvTFrXWs7Zoj4q2+v9/kBxLkADJvkx235n7+cTH695sZoKxqW1t7+y2TXmrvbTSmcnP/XqrUqmUyDe1V69X5t9rt0q1D/wbjacr8lfL1/f9kTRg5H/jQT/wSwOG/rYX/sAvDDD+Tn/klwX0/VVP/JFfFNDz77U88cd+SYDxdvlTfkGAsfvejn/idw8wtu7t+FN+5wCz5e/4037XALPt7/in/FHjhZN/JxS/W4DZDcbvFGDK/N5f4ncJ8Kif9TsEhOUvHhCYv3BAaP6iAcH5CwaE5y8WEKC/UECI/qjxTLe/QECY/vwBgfpzB4TqzxsQrD9nQLj+fAEB+3MFhOzPExC0P0dA2P7lAYH7o8Zb3f5lAcH7lwSE718coMAfNRcEaPAvClDhXxCgwx81n+v2zw3Q4p93hdT45zwBPf7sAEX+zABN/qwAVf6MAF3+2QBl/pkAbf7/A9T5o+ambv90gEL/VIBGfzpApT8VoNM/CVDqvwrQ6h8HqPWPAvT6hwGK/YOAFSgqzqttPBLt3eYK/O26+94/lO3DR/npV2f+E+XfrbUHsq359l8TDj9+/Pjx48ePHz9+/Pjx48ePHz9+/Pjx48ePHz9+/Pjx48ePHz9+/Pjx48ePHz9+/Pjx48ePHz9+/Pjx48ePHz9+/Pjx48ePHz9+/Pjx48ePHz9+/Pjx48ePHz9+/Pjx48ePHz9+/Pjx48e/An9NOOPZf1u6T4+d9/nLHenMXenWnzjv3v34unDmhnTrN52HHz9+/Pjx48ePHz9+/Pjx48ePHz9+/Pjx48ePHz9+/Pjx48ePH79v/1fV/gNzqNrfMd+OFfvj7+ZIsz85Madnmv3nxkpfYJ/+A2us9AJ59CcnPb/V649t338kewP8+XvH3/fbQ9ET8OaPO3bot0rPvzv2n0oegC9/cm7H/l6Ae4EffxwP+CO/tT+cA7z4k59dO+W3v84cCzz44+T3mH3lt/bi2OkWle2Pk/iyazP81v65cPiaLtnfufybJv8DyF7HbV1G1lgAAAAASUVORK5CYII="
                  />
                </PopoverContent>
              </Portal>
            </Popover>
          </Box>
        </Box>
        <Box h="40rem" w="35%" border="1px solid lightgrey">
          <Heading>Tasks</Heading>
          <Tasks />
        </Box>
      </Flex>
    </Box>
  );
};

export default EditProject;
