function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <div className="mt-12 flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`h-10 w-10 rounded-full border transition border-[#cacdd5]

          ${
            currentPage === index + 1
              ? "bg-[#14B8A6] text-white"
              : "bg-white hover:bg-gray-100"
          }
          `}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;