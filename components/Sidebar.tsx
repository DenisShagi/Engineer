"use client";

import {
  HomeIcon,
  CogIcon,
  ChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Главная", icon: HomeIcon },
    { href: "/dashboard/analytics", label: "Аналитика", icon: ChartBarIcon },
    { href: "/dashboard/settings", label: "Настройки", icon: CogIcon },
    { href: "/dashboard/users", label: "Пользователи", icon: UsersIcon },
  ];

  return (
    <div className="w-64 h-screen bg-gray-50 border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">Технолог</h1>
      </div>
      <nav className="flex-1 mt-4 space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative flex items-center p-3 pr-[18px] mr-[18px] rounded-r-full text-sm font-medium transition-all ${
              pathname === link.href
                ? "bg-gradient-to-r from-[#C6A7FE] to-[#9155FD]  text-white border-tl-0 border-bl-0 border-tr-[100px] border-br-[100px]"
                : "text-gray-700 hover:bg-[rgba(58,53,65,0.09)] hover:text-gray-900 border-tl-0 border-bl-0 border-tr-[100px] border-br-[100px]"
            }`}
          >
            <link.icon
              className={`w-5 h-5 mr-3 ${
                pathname === link.href ? "text-white" : "text-gray-400"
              }`}
            />
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="p-4">
        <span className="text-sm text-gray-500">© 2024 Технолог</span>
      </div>
    </div>
  );
}


// Есть интрересный макет https://themeselection.com/item/materio-mui-nextjs-admin-template/