import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const editTodo = (todo) => {
    setEditingTodo(todo);
  };

  const saveEditedTodo = (editedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editedTodo.id ? editedTodo : todo
    );
    setTodos(updatedTodos);
    setEditingTodo(null);
  };

  const cancelEdit = () => {
    setEditingTodo(null);
  };

  return (
    <View style={styles.container}>
      <CreateTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      {editingTodo && (
        <EditTodo
          visible={true}
          onSave={saveEditedTodo}
          onCancel={cancelEdit}
          todo={editingTodo}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
