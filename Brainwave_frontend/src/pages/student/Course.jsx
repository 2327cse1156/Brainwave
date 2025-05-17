import { AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";
import React from "react";

const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group max-w-sm mx-auto">
      {" "}
      <div className="relative overflow-hidden">
        {" "}
        <img
          src="https://imgs.search.brave.com/FLEmOCfgyRyP7qZ5s2WyRCCxwmgTJTIwgsCN-jmlf3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kM2Yx/aXlmeHh6OGkxZS5j/bG91ZGZyb250Lm5l/dC9jb3Vyc2VzL2Nv/dXJzZV9pbWFnZS8x/MTQ4ZWNhMGUwYzQu/anBn"
          alt="Course"
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />{" "}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 group-hover:to-black/60 transition-all"></div>{" "}
      </div>
      <CardContent className="p-4 space-y-3">
        <h1 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-purple-600 transition-colors">
          Next.JS Complete Course
        </h1>
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="text-sm text-gray-600 dark:text-gray-300">Udemy</h2>
          <Badge className="ml-auto text-xs">Advanced</Badge>
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-semibold text-green-500">₹4999</span>
          {/* <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-700 hover:to-pink-600 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all">
        Enroll Now
      </button> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default Course;
