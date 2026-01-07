import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Consultation() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Consultation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CB2B3",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    color: "#ffffff",
  },
});
