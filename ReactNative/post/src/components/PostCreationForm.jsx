import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function PostCreationForm({ onAddPost }) {
  const [username, setUsername] = useState("");
  const [caption, setCaption] = useState("");

  const handlePostCreation = () => {
    if (username && caption) {
      const newPost = {
        id: Date.now().toString(),
        username,
        caption,
        likes: 0,
        comments: [],
      };
      onAddPost(newPost);
      setUsername("");
      setCaption("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Caption"
        value={caption}
        onChangeText={(text) => setCaption(text)}
        style={styles.input}
      />
      <Button title="Create Post" onPress={handlePostCreation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    padding: 8,
  },
});
