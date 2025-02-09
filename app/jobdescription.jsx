// app/jobdescription.jsx
import React from "react";
import { useLocalSearchParams } from "expo-router";
import JobDescription from "../components/JobDescription";

export default function JobDescriptionScreen() {
  // Use useLocalSearchParams to access URL parameters
  const { job } = useLocalSearchParams();

  // The job parameter was passed as a JSON string, so parse it
  let jobObj = {};
  try {
    jobObj = JSON.parse(job);
  } catch (error) {
    console.error("Error parsing job data:", error);
  }

  return <JobDescription job={jobObj} />;
}
