import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Course from "./Course";

const Profile = () => {
  const isLoading = true;
  const enrolledCourses = [1];

  return (
    <div className="pt-24 px-6 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white drop-shadow-md">
        PROFILE
      </h1>

      {/* Profile Info Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl transition-shadow duration-300 hover:shadow-2xl">
        {/* Avatar */}
        <div className="relative group w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg ring-4 ring-purple-500 dark:ring-purple-700 transition-transform duration-500 hover:scale-105">
          <Avatar className="w-full h-full">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="User Avatar"
              className="object-cover"
            />
            <AvatarFallback className="text-3xl">CN</AvatarFallback>
          </Avatar>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-purple-600 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        </div>

        {/* User Info & Edit */}
        <div className="flex-1 space-y-6">
          {/* User Details */}
          <div className="space-y-3">
            {[
              { label: "Name", value: "Ansh Kaushal" },
              { label: "Email", value: "anshkaushal92@gmail.com" },
              { label: "Role", value: "Instructor" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center space-x-3">
                <h2 className="font-semibold text-gray-700 dark:text-gray-300 w-24">
                  {label}:
                </h2>
                <p className="text-gray-900 dark:text-white font-medium">{value}</p>
              </div>
            ))}
          </div>

          {/* Edit Profile Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="md"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-md transition-transform duration-300 hover:scale-105"
              >
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click Save when you are done.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Name" />
                </div>

                <div>
                  <Label htmlFor="profile-photo">Profile Photo</Label>
                  <Input id="profile-photo" type="file" accept="image/*" />
                </div>
              </div>
              <DialogFooter>
                <Button
                  disabled={isLoading}
                  className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
                >
                  {isLoading && <Loader2 className="animate-spin" />}
                  Save Changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Enrolled Courses Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white drop-shadow-md">
          Courses You&apos;re Enrolled In
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {enrolledCourses.length === 0 ? (
            <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
              You have not enrolled in any course yet.
            </p>
          ) : (
            enrolledCourses.map((course, index) => <Course key={index} />)
          )}
        </div>
      </section>
    </div>
  );
};

export default Profile;
