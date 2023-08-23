import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const CreateTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      addTodo({
        id: Date.now(),
        title: todoText,
      });
      setTodoText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter todo..."
        value={todoText}
        onChangeText={setTodoText}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    paddingVertical: 5,
  },
});

export default CreateTodo;