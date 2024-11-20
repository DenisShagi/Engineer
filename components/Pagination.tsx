interface PaginationProps {
  currentPage: number;
  totalUsers: number;
  usersPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalUsers,
  usersPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  if (totalUsers <= usersPerPage) return null; // Пагинация не отображается, если пользователей <= 6

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 mx-1 text-sm rounded ${
          currentPage === 1
            ? "text-gray-400"
            : "text-blue-500 hover:bg-blue-100"
        }`}
      >
        &lt;
      </button>
      <span className="text-sm mx-2">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 mx-1 text-sm rounded ${
          currentPage === totalPages
            ? "text-gray-400"
            : "text-blue-500 hover:bg-blue-100"
        }`}
      >
        &gt;
      </button>
    </div>
  );
}
