import Global from "../global/Global";
import css from "./Cars.module.css";
import type { PageInfo } from "../global/type";
import SearchForm from "./SearchForm/SearchForm";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getCars } from "../services/carService";
import CarList from "./CarList/CarList";
import { useState } from "react";
import Pagination from "./Pagination/Pagination";

const Cars = ({ module, date, title }: PageInfo) => {
  const [make, setMake] = useState("");
  const [page, setPage] = useState(1);

  const carQuery = useQuery({
    queryKey: ["car", { make, page }],
    queryFn: () => getCars({ make, page, perPage: 4 }),
    placeholderData: keepPreviousData,
    enabled: make !== "",
  });

  const cars = carQuery.data?.items || [];
  const pageCount = carQuery.data?.totalPages || 1;
  const { isLoading, isError } = carQuery;

  const handleSubmit = (make: string) => {
    setPage(1);
    setMake(make);
  };

  return (
    <Global date={date} module={module} title={title}>
      <div className={css["cars"]}>
        <SearchForm callback={handleSubmit} />
        {isLoading && <p>Loading content...</p>}
        {isError && <p>Whoops! Something error, try again</p>}
        <CarList items={cars} />

        <Pagination
          currentPage={page}
          totalPages={pageCount}
          handleChange={setPage}
        />
      </div>
    </Global>
  );
};

export default Cars;
