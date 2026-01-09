import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AvailableScreen from "../components/AvailableScreen";
import UnavailableScreen from "../components/UnAvailableScreen";
const Tab = createMaterialTopTabNavigator();
export default function AvailabilityTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarIndicatorStyle: styles.indicator,
        tabBarLabelStyle: styles.label,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#000000",
        tabBarPressColor: "transparent",
        tabBarPressOpacity: 1,
      }}
    >
      <Tab.Screen name="Available" component={AvailableScreen} />
      <Tab.Screen name="Unavailable" component={UnavailableScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#ffffff",
    borderRadius: 40,
    marginHorizontal: 10,
    padding: 2,
    marginTop: 16,
    elevation: 0,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#ffffff",
  },

  indicator: {
    backgroundColor: "#a1b616",
    height: "100%",
    borderRadius: 40,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    textTransform: "none",
  },
});
