import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import AvailabilityTabs from "../../components/AvailabilityTabsNavigator ";
import Categories from "../../components/Categories";
export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Left section */}
        <View style={styles.leftSection}>
          <View style={styles.iconCircle}>
            <FontAwesome name="calendar" size={18} color="#121111" />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.label}>Today</Text>
            <Text style={styles.date}>January 08, 2026</Text>
          </View>
        </View>

        {/* Right icon */}
        <View style={styles.iconCircle}>
          <FontAwesome name="bell" size={18} color="#121111" />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <AvailabilityTabs />
        <Categories />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4CB2B3",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconCircle: {
    backgroundColor: "#ffffff",
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },

  textContainer: {
    marginLeft: 10,
  },

  label: {
    fontSize: 14,
    color: "#ffffff",
    opacity: 0.9,
  },

  date: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
});
