import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Navigate, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const AddCourse = () => {
  const navigate = useNavigate();
  const [courseTitle,setCourseTitle] = useState("")
  const [category,setCategory] = useState("")
  const isLoading = false;
  const getSelectedCategory = (value) =>{
    setCategory(value)
  }
  const createCourseHandler = async () => {
    
  }
  
  return (
    <div className="flex-1 mx-4 md:mx-10 my-6 p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          Let's add a Course
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Add some basic course details for your new course.
        </p>
      </div>

      <div>
        <div>
          <Label>Title</Label>
          <Input
            type={"text"}
            name="courseTitle"
            placeholder="Your course name.."
            value={courseTitle}
            onChange={(e)=>setCourseTitle(e.target.value)}
          ></Input>
        </div>
        <div>
          <Label>Category</Label>
          <Select onValueChange={getSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="apple">Next JS</SelectItem>
                <SelectItem value="banana">Data Science</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div>
            <Button
              variant={"outline"}
              onClick={() => navigate("/admin/course")}
            >
              Back
            </Button>
            <Button disabled={isLoading} onClick={createCourseHandler}>
              {isLoading ? (
                <>
                  <Loader2>Please Wait</Loader2>
                </>
              ) : (
                "Create"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
