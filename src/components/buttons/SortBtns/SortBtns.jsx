import { useEffect } from "react";

function SortBtns({ sortOption, setSortOption }) {
  useEffect(() => {
    setContent((prevContent) =>
      [...prevContent].sort((a, b) => {
        if (sortOption === "name") {
          return a[0].localeCompare(b[0]);
        } else if (sortOption === "value") {
          return a[1].localeCompare(b[1]);
        }
        return 0;
      })
    );
  }, [sortOption]);

  return (
    <div>
      <button onClick={() => setSortOption("name")}>Sort by Name (A-Z)</button>
      <button onClick={() => setSortOption("value")}>
        Sort by Value (A-Z)
      </button>
    </div>
  );
}

export default SortBtns;
