import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "react-native";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        style={styles.tabs}
        name="index"
        options={{
          title: "Jobs",
          headerStyle: {
            backgroundColor: "#25292e", 
            shadowColor: "transparent", 
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold",
            color: "#FFD700", 
          },
          headerTitleAlign: "center",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: "Bookmarks",
          headerStyle: {
            backgroundColor: "#25292e", // Dark background for the header
            shadowColor: "transparent", // Removes bottom shadow
          },
          headerTintColor: "#FFFFFF", // White back arrow color
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold",
            color: "#FFD700", // Light yellow title
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <Image 
              source={require("../../assets/images/icon.png")} 
              style={{ width: 30, height: 30, marginRight: 15 }} 
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "bookmark-sharp" : "bookmark-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: "black",
    color: "yellow",
  },
});
