"use client";

import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import multiavatar from "@multiavatar/multiavatar";

interface User {
  id: string;
  name: string | null;
  email: string | null;
  role: string;
  status: string;
}

interface UserTableProps {
  users: User[];
  onDelete: (id: string) => void;
}

export default function UserTable({ users, onDelete }: UserTableProps) {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [allSelected, setAllSelected] = useState(false);

  const toggleSelectAll = () => {
    if (allSelected || selectedUsers.length > 0) {
      setSelectedUsers([]);
      setAllSelected(false);
    } else {
      setSelectedUsers(users.map((user) => user.id));
      setAllSelected(true);
    }
  };

  const toggleSelectUser = (id: string) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter((userId) => userId !== id));
      setAllSelected(false);
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  return (
    <div className="relative">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border-b w-12">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={toggleSelectAll}
                className="cursor-pointer w-5 h-5"
              />
            </th>
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Role</th>
            <th className="p-3 border-b">Status</th>
            <th className="p-3 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody >
          {users.map((user) => (
            <tr
              key={user.id}
              className={`transition-colors ${
                selectedUsers.includes(user.id)
                  ? "bg-blue-400 text-white "
                  : "hover:bg-gray-50"
              }`}
            >
              <td className="p-3 border-b w-12">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => toggleSelectUser(user.id)}
                  className="cursor-pointer w-5 h-5"
                />
              </td>
              <td className="p-3 border-b">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-10 h-10 rounded-full overflow-hidden"
                    dangerouslySetInnerHTML={{
                      __html: multiavatar(user.name || "User"),
                    }}
                  />
                  <div>
                    <p className="font-medium">{user.name || "Unnamed"}</p>
                    <p className="text-sm">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="p-3 border-b">{user.role}</td>
              <td className="p-3 border-b">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    user.status === "active"
                      ? "bg-green-100 text-green-600"
                      : user.status === "blocked"
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="p-3 border-b text-center ">
                <div className="flex justify-center space-x-2">
                  <button className="text-gray-600 hover:text-gray-900 relative group">
                    <PencilIcon className="w-5 h-5" />
                    <span className="absolute bottom-full mb-1 text-xs text-white bg-black rounded px-2 py-1 opacity-0 group-hover:opacity-100">
                      Edit
                    </span>
                  </button>
                  <button
                    onClick={() => onDelete(user.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
