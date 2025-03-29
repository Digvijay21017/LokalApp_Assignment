import { Stack } from "expo-router";
import { BookmarkProvider } from "../context/BookmarkContext";
import { Image } from "react-native";


export default function RootLayout() {
  return (
    <BookmarkProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="jobdescription"
          options={{
            title: "Job Details",
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
            headerRight: () => (
              <Image 
                source={require("../assets/images/icon.png")} 
                style={{ width: 30, height: 30, marginRight: 15, backgroundColor: "white" }} 
              />
            ), 
          }}
        />
        <Stack.Screen name="+not-found" options={{}} />
      </Stack>
    </BookmarkProvider>
  );
}
