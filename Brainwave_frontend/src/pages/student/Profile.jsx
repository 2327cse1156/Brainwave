import React, { useState, useEffect } from "react";
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
import { Loader2, Sun, Moon } from "lucide-react";
import Course from "./Course";
import { useLoadUserQuery, useUpdateUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";

const Profile = () => {
  const { data, isLoading, refetch } = useLoadUserQuery();
  const [updateUser, { isLoading: updateUserLoading }] = useUpdateUserMutation();

  const [name, setName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (data?.user?.name) {
      setName(data.user.name);
    }
  }, [data]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const onChangeHandler = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePhoto(file);
    }
  };

  const updateUserHandler = async () => {
    const formData = new FormData();
    formData.append("name", name || data.user.name);
    if (profilePhoto) {
      formData.append("profilePhoto", profilePhoto);
    }

    try {
      await updateUser(formData).unwrap();
      await refetch();
      setName("");
      setProfilePhoto(null);
      setOpen(false);
      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update profile.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loader2 className="animate-spin w-10 h-10 text-purple-600" />
      </div>
    );
  }

  if (!data || !data.user) {
    return (
      <h1 className="text-center mt-20 text-xl font-semibold text-red-600 dark:text-red-400">
        Failed to load user data.
      </h1>
    );
  }

  const { user } = data;
  const enrolledCourses = user.enrolledCourses || [];

  return (
    <div className="pt-24 px-6 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <header className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white drop-shadow-md">
          PROFILE
        </h1>
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-900" />
          )}
        </button>
      </header>

      {/* Profile Info Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl transition-shadow duration-300 hover:shadow-2xl">
        {/* Avatar */}
        <div className="relative group w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg ring-4 ring-purple-500 dark:ring-purple-700 transition-transform duration-500 hover:scale-105">
          <Avatar className="w-full h-full">
            <AvatarImage
              src={user.photoUrl || "https://github.com/shadcn.png"}
              alt={`${user.name}'s Avatar`}
              className="object-cover"
            />
            <AvatarFallback className="text-3xl">
              {user.name
                ? user.name
                    .split(" ")
                    .filter(Boolean)
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()
                : "NN"}
            </AvatarFallback>
          </Avatar>
          <div className="absolute inset-0 bg-purple-600 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        </div>

        {/* User Info & Edit */}
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            {[
              { label: "Name", value: user.name },
              { label: "Email", value: user.email },
              { label: "Role", value: user.role },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center space-x-3">
                <h2 className="font-semibold text-gray-700 dark:text-gray-300 w-24">
                  {label}:
                </h2>
                <p className="text-gray-900 dark:text-white font-medium">{value}</p>
              </div>
            ))}
          </div>

          {/* Edit Profile Dialog */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                size="md"
                aria-label="Edit Profile"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg shadow-pink-300/50 hover:shadow-pink-400/70 transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-400 dark:focus:ring-purple-600 rounded-lg font-semibold"
              >
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md animate-fade-in-up">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click Save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="profile-photo">Profile Photo</Label>
                  <Input
                    id="profile-photo"
                    type="file"
                    accept="image/*"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  disabled={updateUserLoading}
                  onClick={updateUserHandler}
                  className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 rounded-md font-medium"
                >
                  {updateUserLoading && <Loader2 className="animate-spin" />}
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
            enrolledCourses.map((course, index) => (
              <Course key={index} course={course} />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Profile;
