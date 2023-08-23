import React from "react";
import { View, FlatList } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem todo={item} deleteTodo={deleteTodo} editTodo={editTodo} />
        )}
      />
    </View>
  );
};

export default TodoList;
