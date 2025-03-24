import React, { Suspense, useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import Displayimage from "./Displayimage";

function Search() {
  const [items, setItems] = useState([]);
  const [filtered, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();
        console.log(data);
        setItems(data);
        setFilteredItems(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handlesearch = (query) => {
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };
  return (
    <div>
      <SearchBox search={handlesearch}></SearchBox>

      {loading ? (
        <h4>Loading.......</h4>
      ) : filtered.length === 0 ? (
        <h4>No results found.......</h4>
      ) : (
        filtered.map((data) => (
          <Displayimage key={data.id} datas={data}></Displayimage>
        ))
      )}
    </div>
  );
}

export default Search;
