import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { StatusBar, View } from "react-native";

export default function TabLayout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#4CB2B3" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#a1b616",
          backgroundColor: "#00dfdf",
          tabBarStyle: {
            backgroundColor: "#edf4f4",
            marginVertical: 20,
            marginHorizontal: 30,
            borderRadius: 40,
            height: 70,
            paddingTop: 15,
            position: "absolute",
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarIcon: ({ focused, color, size }) => (
              <View
                style={{
                  backgroundColor: focused ? "#4CB2B3" : "transparent",
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome
                  name="home"
                  size={size}
                  color={focused ? "#fff" : color}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="consultation"
          options={{
            title: "",
            tabBarIcon: ({ focused, color, size }) => (
              <View
                style={{
                  backgroundColor: focused ? "#4CB2B3" : "transparent",
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome
                  name="user-md"
                  size={size}
                  color={focused ? "#fff" : color}
                />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="inbox"
          options={{
            title: "",
            tabBarIcon: ({ focused, color, size }) => (
              <View
                style={{
                  backgroundColor: focused ? "#4CB2B3" : "transparent",
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome
                  name="envelope"
                  size={size}
                  color={focused ? "#fff" : color}
                />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "",
            tabBarIcon: ({ focused, color, size }) => (
              <View
                style={{
                  backgroundColor: focused ? "#4CB2B3" : "transparent",
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome
                  name="user"
                  size={size}
                  color={focused ? "#fff" : color}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
