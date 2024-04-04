import { Pagination } from "react-bootstrap";

import './Pagination.css'

function ListPagination({ totalPages, currentPage, paginate }) {

  return (
      <Pagination className="pagination">
        <Pagination.First onClick={() => paginate(1)}>{"<<"}</Pagination.First>
        <Pagination.Prev onClick={() => paginate(currentPage - 1)}>{"<"}</Pagination.Prev>
        <Pagination.Next onClick={() => paginate(currentPage + 1)}>{">"}</Pagination.Next>
        <Pagination.Last onClick={() => paginate(totalPages)}>{">>"}</Pagination.Last>
      </Pagination>
  );
}

export default ListPagination;