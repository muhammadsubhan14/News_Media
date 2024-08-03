import { Link } from "react-router-dom";

export default function NewsCard({ id, title, imageUrl, content }) {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl mt-4 ml-6">
      <figure>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-ghost">
            <Link to={`/news/${id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
