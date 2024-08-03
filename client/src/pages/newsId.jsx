import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NewsId() {
  const { id } = useParams();
  const [newsDetail, setNewsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/news/${id}`);
        setNewsDetail(response.data.article);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!newsDetail) return <p>No news found</p>;

  return (
    <div className="p-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">{newsDetail.name}</h1>
        <img
          src={newsDetail.imageUrl}
          alt={newsDetail.name}
          className="w-full h-96 object-cover mb-4"
        />
        <p className="text-gray-700 mb-4">{newsDetail.content}</p>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-50 text-black px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
