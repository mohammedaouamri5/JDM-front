import { useEffect, useState } from "react";
import { fetchList } from "../fetch/List";
import CollapsibleTable from "./CollapsibleTable";
import { iList } from "../interface";

const List = () => {
  const [list, setList] = useState<iList | undefined>(undefined);

  useEffect(() => {
    // Function to fetch data
    const fetchData = () => {
      console.log("fetchingData")
      fetchList(setList);
    };

    // Initial fetch
    fetchData();

    // Set interval to refetch data every 2 seconds
    const interval = setInterval(fetchData, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {list ? (
        <p>{<CollapsibleTable list={list} />}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default List;
