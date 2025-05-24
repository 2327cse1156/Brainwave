import { ChartBar, Library } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: "Dashboard",
      icon: <ChartBar size={20} />,
      path: "/admin/dashboard",
    },
    {
      label: "Courses",
      icon: <Library size={20} />,
      path: "/admin/course",
    },
  ];

  return (
    <div className="flex pt-16 min-h-screen">
      {/* Sidebar (Desktop) */}
      <aside className="hidden lg:flex w-[250px] flex-col bg-white dark:bg-zinc-900 border-r dark:border-zinc-800 px-4 py-6 space-y-4 fixed top-16 left-0 bottom-0 z-20">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={clsx(
              "flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-100 dark:hover:bg-zinc-800",
              location.pathname === item.path && "bg-gray-100 dark:bg-zinc-800 font-semibold"
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </aside>

      {/* Mobile Sheet */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 h-14 flex items-center justify-between px-4 border-b bg-white dark:bg-zinc-900 dark:border-zinc-800">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] p-4 space-y-4">
            <h2 className="text-xl font-bold">Admin Panel</h2>
            {navItems.map((item) => (
              <SheetClose asChild key={item.path}>
                <Link
                  to={item.path}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-100 dark:hover:bg-zinc-800",
                    location.pathname === item.path && "bg-gray-100 dark:bg-zinc-800 font-semibold"
                  )}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </SheetClose>
            ))}
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-semibold">Admin</h1>
      </div>

      {/* Main content area (add marginLeft on lg to account for fixed sidebar) */}
      <main className="flex-1 p-4 lg:ml-[250px] mt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
