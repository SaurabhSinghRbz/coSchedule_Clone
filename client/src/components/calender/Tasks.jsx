import { useState } from "react";
import { Input } from "./Input";
import { TodoList } from "./TodoList";

import { v4 as uuid } from "uuid";
import { Box } from "@chakra-ui/react";

export default function Tasks() {
  const [todoLIst, setTodoList] = useState([]);
  //console.log(todoLIst)
  const addTodo = (newtodo) => {
    //console.log(newtodo)
    setTodoList([
      ...todoLIst,
      {
        id: uuid(),
        todo: newtodo,
        isStatus: false,
      },
    ]);
  };
  //  console.log(todoLIst)

  return (
    <Box
      bg={"white"}
      w="70%"
      h="400px"
      m="auto"
      marginTop="30px"
      box-shadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      <Input addTodo={addTodo} />
      <TodoList todolist={todoLIst} setTodoList={setTodoList} />
    </Box>
  );
}
