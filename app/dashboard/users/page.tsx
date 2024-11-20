"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import UserTable from "@/components/UserTable";

interface User {
  id: string;
  name: string | null;
  email: string | null;
  role: string;
  status: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/users");
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      }
    };
    fetchUsers();
  }, []);

  const deleteUser = async (id: string) => {
    const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
    if (res.ok) {
      setUsers(users.filter((user) => user.id !== id));
    } else {
      alert("Failed to delete user");
    }
  };

  return (
    <div className="p-4">
      <Breadcrumb />
      <h1 className="text-2xl font-bold mb-4">All Accounts</h1>
      <UserTable users={users} onDelete={deleteUser} />
    </div>
  );
}
