import { MenuIcon, School } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import DarkMode from "../DarkMode";
import { motion } from "framer-motion";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = true;
  const role = "Instructor";

  return (
    <nav className="h-16 bg-white dark:bg-[#0A0A0A] border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-4 md:px-10">
      {/* Desktop */}
      <div className="flex items-center gap-2">
        <School size={30} className="text-primary" />
        <h1 className="hidden md:block font-extrabold text-2xl">E-learning</h1>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <DarkMode />
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 transition-transform origin-top-right">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem><Link to={"my-learning"}>My Learning</Link></DropdownMenuItem>
                <DropdownMenuItem>Edit Profile</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex gap-2">
            <Button variant="outline">Login</Button>
            <Button>SignUp</Button>
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between w-full">
        <h1 className="font-extrabold text-2xl">E-Learning</h1>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              aria-label="Open mobile menu"
              className="rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent aria-describedby="mobile-menu-description" className="p-4">
            <SheetHeader>
              <SheetTitle>E-Learning</SheetTitle>
              <DialogDescription id="mobile-menu-description" className="sr-only">
                Mobile navigation menu with account options.
              </DialogDescription>
              {/* <DarkMode /> */}
            </SheetHeader>
            <Separator className="my-2" />
            <nav className="flex flex-col gap-2">
              <span tabIndex={0} role="button" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">My Learning</span>
              <span tabIndex={0} role="button" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Edit Profile</span>
              <span tabIndex={0} role="button" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Log Out</span>
            </nav>
            {role === "Instructor" && (
              <SheetFooter className="mt-4">
                <SheetClose asChild>
                  <Button type="submit" className="w-full">
                    Dashboard
                  </Button>
                </SheetClose>
              </SheetFooter>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
