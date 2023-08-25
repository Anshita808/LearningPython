import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CheckoutPage = ({ cartItems, total, proceedToPayment }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>
      {cartItems.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Text>
            {item.name} - ${item.price.toFixed(2)}
          </Text>
        </View>
      ))}
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      <Button title="Proceed to Payment" onPress={proceedToPayment} />
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
    marginBottom: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "right",
  },
});

export default CheckoutPage;