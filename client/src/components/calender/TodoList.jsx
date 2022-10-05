import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";

export const TodoList = ({ todolist, setTodoList }) => {
  const handleChange = (id) => {
    let x = todolist.map((e) => {
      if (e.id === id) {
        return { ...e, isStatus: !e.isStatus };
      } else {
        return e;
      }
    });
    setTodoList(x);
  };

  return (
    <Box w="60%" marginTop="100px" m="auto" fontSize={"30px"}>
      {todolist.map((el) => {
        return (
          <Flex key={el.id} justifyContent="space-between">
            <Checkbox onChange={() => handleChange(el.id)} />
            {el.isStatus ? (
              <Text textDecorationLine={"line-through"}>{el.todo} </Text>
            ) : (
              <Text>{el.todo} </Text>
            )}
          </Flex>
        );
      })}
    </Box>
  );
};
