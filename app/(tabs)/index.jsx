import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Loading from "../loading";
import JobCard from "../../components/JobCard"; // Import the JobCard component

export default function Index() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false); // Track if more data is loading

  async function getJobs(newPage = 1) {
    try {
      if (newPage === 1) setLoading(true);
      else setIsFetchingMore(true);

      const response = await fetch(
        `https://testapi.getlokalapp.com/common/jobs?page=${newPage}`
      );
      const data = await response.json();

      let newJobs = data.results.map((job) => ({
        title: job.title,
        location: job?.primary_details?.Place || "Unknown",
        salary: job?.primary_details?.Salary || "Unknown", 
        phone: job?.primary_details?.whatsapp_no || "Unknown",
        details: job?.other_details, 
      }));

      setJobs((prevJobs) => (newPage === 1 ? newJobs : [...prevJobs, ...newJobs]));
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
      setIsFetchingMore(false);
    }
  }

  useEffect(() => {
    getJobs(); // Load first page
  }, []);

  const loadMoreJobs = () => {
    if (!isFetchingMore) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        getJobs(nextPage);
        return nextPage;
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <JobCard
            title={item.title}
            location={item.location}
            salary={item.salary}
            phone={item.phone}
            job = {item}
          />
        )}
        onEndReached={loadMoreJobs} // Trigger when reaching the end
        onEndReachedThreshold={0.5} // Load more when 50% from the bottom
        ListFooterComponent={isFetchingMore ? <Loading /> : null} // Show loader when fetching more data
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingVertical: 10,
  },
});

