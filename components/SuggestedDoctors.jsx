import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const doctors = [
  {
    id: "1",
    name: "Dr. Olivia Grant",
    specialty: "Family Physician",
    rating: 4.8,
    image: require("../assets/images/doctor1.png"),
  },
  {
    id: "2",
    name: "Dr. Matthew Smith",
    specialty: "Cardiologist",
    rating: 4.6,
    image: require("../assets/images/doctor2.png"),
  },
  {
    id: "3",
    name: "Dr. Sarah Ahmed",
    specialty: "Dermatologist",
    rating: 4.9,
    image: require("../assets/images/doctor3.png"),
  },
  {
    id: "4",
    name: "Dr. John Khan",
    specialty: "Pediatrician",
    rating: 4.7,
    image: require("../assets/images/doctor4.png"),
  },
];

const SuggestedDoctors = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Suggested Doctors</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>

      <FlatList
        data={doctors}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.avatar} />

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.specialty}>{item.specialty}</Text>

            <View style={styles.ratingRow}>
              <FontAwesome name="star" size={14} color="#FFD700" />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default SuggestedDoctors;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 4,
  },

  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: "#010101",
  },

  seeAll: {
    fontSize: 16,
    fontWeight: "500",
    color: "#454242",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 14,
    alignItems: "center",
    marginRight: 12,
    width: 160,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },

  specialty: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
    textAlign: "center",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  rating: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: "600",
  },
});
