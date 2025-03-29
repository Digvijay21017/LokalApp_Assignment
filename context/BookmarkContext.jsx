import React, { createContext, useContext, useState } from "react";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  const toggleBookmark = (job) => {
    setBookmarkedJobs((prev) => {
      const isBookmarked = prev.some((j) => j.title === job.title);
      if (isBookmarked) {
        return prev.filter((j) => j.title !== job.title);
      } else {
        return [...prev, job];
      }
    });
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedJobs, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

// Custom Hook to use the context
export const useBookmarks = () => useContext(BookmarkContext);

