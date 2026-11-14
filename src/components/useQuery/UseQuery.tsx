import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Global from "../global/Global";
import type { PageInfo } from "../global/type";

const fetchData = async () => {
  const response = await axios.get("https://swapi.info/api/people/1");
  return response.data;
};

const UseQuery = ({ date, title, module }: PageInfo) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["person"],
    queryFn: fetchData,
  });

  return (
    <Global date={date} title={title} module={module}>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error ocured {error?.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </Global>
  );
};

export default UseQuery;
