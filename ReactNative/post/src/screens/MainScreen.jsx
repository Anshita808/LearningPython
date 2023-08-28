import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import PostCreationForm from "../components/PostCreationForm";
import PostList from "../components/PostList";

export default function MainScreen() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const likePost = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <View style={styles.container}>
      <PostCreationForm onAddPost={addPost} />
      <PostList posts={posts} onDeletePost={deletePost} onLikePost={likePost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
