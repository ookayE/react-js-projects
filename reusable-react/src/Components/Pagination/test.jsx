import { useState } from "react";
import Pagination from ".";

function PaginationTest() {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  console.log(currentListOfItems, indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <Pagination />
    </div>
  );
}

export default PaginationTest;
