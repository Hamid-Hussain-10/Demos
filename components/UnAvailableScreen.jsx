import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UnAvailableScreen = () => {
  return (
    <View style={styles.container}>
      <Text>UnAvailableScreen</Text>
    </View>
  );
};

export default UnAvailableScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CB2B3",
  },
});
