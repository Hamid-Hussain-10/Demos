import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [showUser, setShowUser] = useState(true);

  useEffect(() => {}, [count]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="React Native Demo App" />

      <Text style={styles.counter}>Count: {count}</Text>

      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={styles.image}
      />

      {showUser && (
        <UserCard name="Hamid Hussain" role="React Native Developer" add="Korangi Karachi" />
      )}

      <CustomButton
        title="Increase Count"
        onPress={() => setCount(count + 1)}
      />

      <CustomButton
        title={showUser ? "Hide User" : "Show User"}
        onPress={() => setShowUser(!showUser)}
      />
    </ScrollView>
  );
}

/* ---------- Components ---------- */

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

const UserCard = ({ name, role, add }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.role}>{role}</Text>
    <Text style={styles.add}>{add}</Text>
  </View>
);

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    marginVertical: 10,
  },
  header: {
    marginBottom: 15,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  counter: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  card: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  role: {
    fontSize: 14,
    color: "gray",
  },
  button: {
    backgroundColor: "#447007",
    padding: 12,
    borderRadius: 6,
    marginVertical: 6,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
