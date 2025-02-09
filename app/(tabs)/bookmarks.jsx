import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import JobCard from "../../components/JobCard";
import { useBookmarks } from "../../context/BookmarkContext";

export default function Bookmarks() {
  const { bookmarkedJobs } = useBookmarks();

  return (
    <View style={styles.container}>
      {bookmarkedJobs.length === 0 ? (
        <Text style={styles.emptyText}>No bookmarks yet.</Text>
      ) : (
        <FlatList
          data={bookmarkedJobs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <JobCard
              title={item.title}
              location={item.location}
              salary={item.salary}
              phone={item.phone}
              job={item}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingVertical: 10,
  },
  emptyText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
});
