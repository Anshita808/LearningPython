import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter username and password.");
      return;
    }

    try {
      // Send GET request to JSON Server for authentication
      const response = await axios.get(
        `http://localhost:3000/users?username=${username}&password=${password}`
      );

      console.log("Response:", response); // Log the response data

      if (response.data.length > 0) {
        console.log("Login successful:", response.data[0]);
        Alert.alert("Success", "Login successful.");
      } else {
        Alert.alert("Error", "Invalid username or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "An error occurred during login.");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;
