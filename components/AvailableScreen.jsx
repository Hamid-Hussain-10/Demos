import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import Categories from "../components/Categories";
import SuggestedDoctors from "../components/SuggestedDoctors";

export default function AvailableScreen() {
  return (
    <LinearGradient
      colors={["#6bbbbd", "#ffffff"]}
      locations={[0.1, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.heading}>Next Appointment</Text>

        {/* Appointment Card */}
        <View style={styles.card}>
          <View style={styles.leftBg} />

          <View style={styles.content}>
            <View style={styles.leftSection}>
              <View style={styles.imageWrapper}>
                <Image
                  source={require("../assets/images/calender.png")}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.doctor}>Dr. John Khan</Text>
                <Text style={styles.date}>January 09</Text>
                <Text style={styles.time}>10:20 am</Text>
              </View>
            </View>

            <View style={styles.iconCircle}>
              <FontAwesome name="angle-right" size={20} color="#121111" />
            </View>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categories}>
          <Categories />
        </View>

        {/* Suggested Doctors */}
        <View style={styles.suggestedDoctors}>
          <SuggestedDoctors />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 6,
    paddingBottom: 40,
  },

  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: "#151414",
    marginBottom: 12,
    marginTop: 10,
    marginLeft: 4,
  },

  card: {
    backgroundColor: "#f7f4f4",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 24,
  },

  leftBg: {
    position: "absolute",
    left: -40,
    top: -10,
    width: 140,
    height: 170,
    backgroundColor: "#38e5d4",
    transform: [{ skewY: "-15deg" }],
    borderRightWidth: 3,
    borderRightColor: "#a1b616",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  imageWrapper: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },

  image: {
    width: 130,
    height: 130,
  },

  textContainer: {
    marginLeft: 16,
  },

  doctor: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  date: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },

  time: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 6,
    color: "#000",
  },

  iconCircle: {
    backgroundColor: "#e7e1e1",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  categories: {
    marginBottom: 25,
  },

  suggestedDoctors: {
    paddingBottom: 30,
  },
});
