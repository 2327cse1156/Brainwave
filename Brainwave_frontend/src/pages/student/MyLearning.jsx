import React from "react";
import Course from "./Course";
import { Skeleton } from "@/components/ui/skeleton";

const MyLearning = () => {
  const isLoading = false; // Change this to true to see the loading state
  const myLearningCourses = [
    { title: "React Mastery", instructor: "John Doe" },
    { title: "Advanced Node.js", instructor: "Jane Smith" },
    { title: "Full-Stack JavaScript", instructor: "Alex Johnson" },
  ];

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto space-y-6 pt-20">
      <h1 className="text-3xl font-bold text-center mb-6">MY LEARNING</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <MyLearningSkeleton />
        ) : myLearningCourses.length === 0 ? (
          <p className="text-gray-500 text-center col-span-full">
            You are not enrolled in any course.
          </p>
        ) : (
          myLearningCourses.map((course, index) => (
            <Course key={index} course={course} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyLearning;

// Skeleton component for loading state
export const MyLearningSkeleton = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 animate-pulse hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
        >
          <div className="w-24 h-24 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 animate-pulse"></div>
          <div className="space-y-2 flex-grow">
            <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 rounded"></div>
            <div className="h-4 w-1/2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
