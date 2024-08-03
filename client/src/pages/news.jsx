import NewsCard from "../components/newsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchNews = async (pageNumber) => {
    try {
      const response = await axios.get(`http://localhost:3000/news?page=${pageNumber}`);
      if (response.data.article.length === 0) {
        setHasMore(false);
      } else {
        setNewsData((prevData) => [...prevData, ...response.data.article]);
        setPage(pageNumber + 1);
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-8">
      <InfiniteScroll
        dataLength={newsData.length}
        next={() => fetchNews(page)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more data to load</p>}
      >
        <div className="flex flex-wrap">
          {newsData.map((news, idx) => (
            <NewsCard
              key={idx} 
              id={news.id}
              title={news.title}
              imageUrl={news.imageUrl}
              content={news.content}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
