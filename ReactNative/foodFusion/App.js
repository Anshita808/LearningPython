import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuPage from "./components/MenusPage";
import CheckoutPage from "./components/CheckoutPage";

const Stack = createNativeStackNavigator();

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const cartItem = {
      id: item.idMeal,
      name: item.strMeal,
      price: parseFloat(item.price),
    };
    setCartItems([...cartItems, cartItem]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={MenuPage}
          initialParams={{ addToCart }}
          options={{ title: "Menu" }}
        />
        <Stack.Screen name="Checkout">
          {(props) => <CheckoutPage {...props} cartItems={cartItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;