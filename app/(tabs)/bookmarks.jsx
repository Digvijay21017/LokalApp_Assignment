import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { useBookmarks } from "../../context/BookmarkContext";
import JobCard from "../../components/JobCard";

const BookmarkedScreen = () => {
  const { bookmarkedJobs } = useBookmarks();

  if (bookmarkedJobs.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={{ padding: 20, color: "#fff" }}>
          No bookmarked jobs yet.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={bookmarkedJobs}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <JobCard {...item} job={item} />}
      />
    </View>
  );
};

export default BookmarkedScreen;

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
