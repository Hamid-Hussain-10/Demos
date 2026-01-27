import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

export default function Profile() {
  return (
    <LinearGradient
      colors={["#6bbbbd", "#ffffff"]}
      locations={[0.1, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Pressable style={styles.icon} onPress={() => router.push("/")}>
          <FontAwesome name="user" size={24} color="#ffffff" />
        </Pressable>
        <Text style={styles.text}>Profile</Text>

        <Pressable style={styles.icon}>
          <FontAwesome name="heart" size={20} color="#1d1c1c" />
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    paddingTop: 50,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    color: "#ffffff",
  },
  icon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
});
