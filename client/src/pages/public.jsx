// Import dependencies
import React, { useEffect, useState } from "react";
import Card from "../components/card";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Public() {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchDataPub = async (pageNumber) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/pub/news?page=${pageNumber}`
      );
      if (res.data.article.length === 0) {
        setHasMore(false);
      } else {
        setData((prevData) => [...prevData, ...res.data.article]);
        setPage(pageNumber + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataPub(page);
  }, []);

  return (
    <div className="p-4">
      <InfiniteScroll
        dataLength={data.length}
        next={() => fetchDataPub(page)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more data to load</p>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.isArray(data) ? (
            data.map((item, idx) => (
              <Card
                key={idx}
                name={item.name}
                imageUrl={item.imageUrl}
                content={item.content}
              />
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
}
