import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  return (
    <View style={styles.container}>
      <Text>{todo.title}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Edit" onPress={() => editTodo(todo)} />
        <Button title="Delete" onPress={() => deleteTodo(todo.id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default TodoItem;
