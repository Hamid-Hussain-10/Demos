import { View, Text, FlatList, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function All({ data = [] }) {
  return (
    <LinearGradient
      colors={["#6bbbbd", "#ffffff"]}
      locations={[0.1, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<Text style={styles.heading}>All</Text>}
        renderItem={({ item }) => (
          <View style={[styles.card, !item.read && styles.unreadHighlight]}>
            <Text style={[styles.text, !item.read && styles.unreadText]}>
              {item.message}
            </Text>
          </View>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 100,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    margin: 12,
  },
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    marginHorizontal: 12,
    marginBottom: 10,
  },
  unreadHighlight: {
    backgroundColor: "#f1fbfa",
  },
  text: {
    fontSize: 16,
    color: "#555",
  },
  unreadText: {
    fontWeight: "600",
    color: "#000",
  },
});
