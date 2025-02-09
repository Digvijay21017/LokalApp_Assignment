import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useBookmarks } from "../context/BookmarkContext"; // Import global state
import Ionicons from "@expo/vector-icons/Ionicons";

const JobCard = ({ title, location, salary, phone, job }) => {
  const router = useRouter();
  const { bookmarkedJobs, toggleBookmark } = useBookmarks();

  const isBookmarked = bookmarkedJobs.some((j) => j.title === job.title);

  return (
    <TouchableOpacity onPress={() => router.push({ pathname: "/jobdescription", params: { job: JSON.stringify(job) } })}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>📍 {location}</Text>
        <Text style={styles.salary}>💰 Salary: {salary}</Text>
        <Text style={styles.phone}>📞 Contact: {phone}</Text>
        
        {/* Bookmark Button */}
        <TouchableOpacity onPress={() => toggleBookmark(job)} style={styles.bookmarkButton}>
          <Ionicons name={isBookmarked ? "bookmark" : "bookmark-outline"} size={24} color="#FFD700" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2a2a2a",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    position: "relative",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#b0b0b0",
    marginBottom: 5,
  },
  salary: {
    fontSize: 14,
    color: "#4caf50",
    fontWeight: "bold",
    marginBottom: 5,
  },
  phone: {
    fontSize: 14,
    color: "#ffcc00",
    fontWeight: "bold",
  },
  bookmarkButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default JobCard;
