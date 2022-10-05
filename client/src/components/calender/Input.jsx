import { Flex, Button, Input as INput } from "@chakra-ui/react";
import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
export const Input = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleAdd = () => {
    // console.log(text)
    addTodo(text);
  };

  return (
    <Flex h="" diplay="flex" justifyContent={"space-evenly"}>
      <INput
        p="10px 2px"
        fontSize={"25px"}
        focusBorderColor="grey"
        border="3px solid #44505E;"
        placeholder="Add Task"
        onChange={handleChange}
        type="text"
      />
      <Button onClick={handleAdd}>
        <AddIcon />
      </Button>
    </Flex>
  );
};
