import { Link } from "gatsby";
import * as React from "react";

const Pagination = (props) => {
  const { currentPage, numPages, basePath = "/" } = props;
  const prevPath =
    currentPage === 2 ? basePath : `${basePath}page/${currentPage - 1}`;
  return (
    <div>
      {currentPage > 1 && <Link to={prevPath}>Previous</Link>}
      {currentPage !== numPages && (
        <Link to={`${basePath}page/${currentPage + 1}`}>Next</Link>
      )}
    </div>
  );
};

export default Pagination;
