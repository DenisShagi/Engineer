import { useState, useRef, useEffect } from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  filters: { name: boolean; role: boolean; status: boolean };
  onFilterChange: (filters: { name: boolean; role: boolean; status: boolean }) => void;
}

export default function SearchBar({
  searchQuery,
  onSearch,
  filters,
  onFilterChange,
}: SearchBarProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search users"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="p-2 bg-gray-200 rounded"
        >
          <Cog6ToothIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {isFilterOpen && (
        <div
          ref={filterRef}
          className="absolute top-full right-0 mt-2 w-64 bg-white p-4 rounded shadow-lg z-10"
        >
          <h2 className="text-lg font-bold mb-4">Search Filters</h2>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={filters.name}
              onChange={(e) => onFilterChange({ ...filters, name: e.target.checked })}
              className="mr-2"
            />
            Name
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={filters.role}
              onChange={(e) => onFilterChange({ ...filters, role: e.target.checked })}
              className="mr-2"
            />
            Role
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={filters.status}
              onChange={(e) => onFilterChange({ ...filters, status: e.target.checked })}
              className="mr-2"
            />
            Status
          </label>
        </div>
      )}
    </div>
  );
}
