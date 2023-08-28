import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function PostList({ posts, onDeletePost, onLikePost }) {
  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Text>{item.username}</Text>
      <Text>{item.caption}</Text>
      <Text>Likes: {item.likes}</Text>
      <TouchableOpacity onPress={() => onLikePost(item.id)}>
        <Text>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDeletePost(item.id)}>
        <Text>Delete</Text>
      </TouchableOpacity>
      {/* Render comments */}
    </View>
  );

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={renderPost}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  postContainer: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
  },
});
