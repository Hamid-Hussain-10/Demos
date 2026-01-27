import { Text, FlatList, Pressable, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

export default function Unread({ data = [], onRead }) {
  const unreadData = data.filter((item) => !item.read);

  return (
    <LinearGradient
      colors={["#6bbbbd", "#ffffff"]}
      locations={[0.1, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <FlatList
        data={unreadData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<Text style={styles.heading}>Unread</Text>}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No unread notifications</Text>
        }
        renderItem={({ item }) => (
          <Pressable style={styles.unreadCard} onPress={() => onRead(item.id)}>
            <FontAwesome name="circle" size={10} color="#4CB2B3" />
            <Text style={styles.text}>{item.message}</Text>
          </Pressable>
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
    paddingBottom: 40,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    margin: 12,
  },
  unreadCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eaf7f6",
    padding: 14,
    borderRadius: 14,
    marginHorizontal: 12,
    marginBottom: 10,
    gap: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 14,
    color: "#666",
  },
});
