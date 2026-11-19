import css from "./Pagination.module.css";
import RP from "react-paginate";

// Vite отдаёт { default: Компонент } вместо самого компонента — достаём его
const ReactPaginate = (RP as unknown as { default?: typeof RP }).default ?? RP;

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handleChange: (page: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  handleChange,
}: PaginationProps) => {
  return (
    <ReactPaginate
      forcePage={Math.max(0, currentPage - 1)}
      breakLabel="..."
      nextLabel="Next"
      onPageChange={({ selected }) => handleChange(selected + 1)}
      pageRangeDisplayed={4}
      pageCount={totalPages}
      previousLabel="Prev"
      renderOnZeroPageCount={null}
      containerClassName={css.container}
      pageClassName={css.page}
      activeClassName={css.active}
      disabledClassName={css.disabled}
      breakClassName={css.break}
      previousClassName={css.previous}
      nextClassName={css.next}
    />
  );
};

export default Pagination;
