import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const PaymentPage = ({ total, completePayment }) => {
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  const simulatePayment = () => {
    setIsPaymentProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsPaymentProcessing(false);
      completePayment();
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment</Text>
      <Text>Total Amount: ${total.toFixed(2)}</Text>
      <Button
        title={isPaymentProcessing ? "Processing..." : "Pay Now"}
        onPress={simulatePayment}
        disabled={isPaymentProcessing}
      />
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
});

export default PaymentPage;