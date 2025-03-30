// context/BookmarkContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        const stored = await AsyncStorage.getItem("bookmarkedJobs");
        if (stored) {
          setBookmarkedJobs(JSON.parse(stored));
        }
      } catch (err) {
        console.error("Failed to load bookmarks", err);
      }
    };
    loadBookmarks();
  }, []);

  const saveToStorage = async (jobs) => {
    try {
      await AsyncStorage.setItem("bookmarkedJobs", JSON.stringify(jobs));
    } catch (err) {
      console.error("Failed to save bookmarks", err);
    }
  };

  const toggleBookmark = (job) => {
    setBookmarkedJobs((prev) => {
      const isAlreadyBookmarked = prev.some((j) => j.title === job.title);
      const updated = isAlreadyBookmarked
        ? prev.filter((j) => j.title !== job.title)
        : [...prev, job];
      saveToStorage(updated);
      return updated;
    });
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedJobs, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => useContext(BookmarkContext);
