import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping Cart</Text>
      {cartItems.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Text>
            {item.name} - ${item.price.toFixed(2)}
          </Text>
          <Button title="Remove" onPress={() => removeFromCart(item)} />
        </View>
      ))}
      <Text style={styles.total}>Total: ${calculateTotal().toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "right",
  },
});

export default ShoppingCart;