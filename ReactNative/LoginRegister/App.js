import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import RegistrationScreen from "./components/RegistrationScreen";
import LoginScreen from "./components/LoginScreen";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("Login");

  const renderScreen = () => {
    switch (currentScreen) {
      case "Registration":
        return <RegistrationScreen />;
      case "Login":
        return <LoginScreen />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
      <Button
        title={currentScreen === "Login" ? "Go to Registration" : "Go to Login"}
        onPress={() =>
          setCurrentScreen(currentScreen === "Login" ? "Registration" : "Login")
        }
      />
    </View>
  );
};

export default App;