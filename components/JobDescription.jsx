// components/JobDescription.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const JobDescription = ({ job }) => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>{job.title}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.text2}>📍 {job.location}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.text2}>💰 Salary: {job.salary}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.text2}>📞 Contact: {job.phone}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.text2}>
          {job.details ? job.details : "No description available"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Dark background for the page
    padding: 20,
  },
  block: {
    backgroundColor: "#1e1e1e", // Slightly lighter dark block background
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    // borderColor: "light-yellow", // Yellow border for emphasis
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFEB3B", // Light yellow text
    textAlign: "center", // Ensures the text is centered
  },
  text: {
    fontSize: 16,
    color: "yellow", // Yellow text for other details
  },
  text2 : {
    fontSize: 16,
    color: "white",
  }
});

export default JobDescription;
