import React from "react";
import Course from "./Course";
import { Skeleton } from "@/components/ui/skeleton";
const Courses = () => {
  const isLoading = false;
  const courses = [1,2,3,4,5,6];
  return (
    <div className="px-4 py-8 md:px-10">
      <h2 className="text-3xl text-center font-bold mb-8">Our Courses</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <CourseSkeleton key={index} />
          ))
        ) : (
          courses.map((course,index) => <Course key={index}/>)
        )}
      </div>
    </div>
  );
};

export default Courses;

const CourseSkeleton = () => {
  return (
    <div className="bg-white dark:bg-[#1A1A1A] shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <Skeleton className="w-full h-36 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-6 w-3/4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-6 w-6 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
            <Skeleton className="h-4 w-20 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
          </div>
          <Skeleton className="h-4 w-16 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
        </div>
        <Skeleton className="h-4 w-1/4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
      </div>
    </div>
  );
};
