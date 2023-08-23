import React, { useState } from "react";
import { View, TextInput, Button, Modal, StyleSheet } from "react-native";

const EditTodo = ({ visible, onSave, onCancel, todo }) => {
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleSave = () => {
    onSave({ ...todo, title: editedTitle });
    onCancel();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          value={editedTitle}
          onChangeText={setEditedTitle}
          style={styles.input}
        />
        <Button title="Save" onPress={handleSave} />
        <Button title="Cancel" onPress={onCancel} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    paddingVertical: 5,
  },
});

export default EditTodo;
