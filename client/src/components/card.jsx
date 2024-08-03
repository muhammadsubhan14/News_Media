import { Link } from "react-router-dom";

export default function Card({ name, imageUrl, content }) {
  return (
    <div className="card-container flex flex-col rounded-xl bg-white shadow-md w-80">
      <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
        <img src={imageUrl} alt={name} className="object-cover h-full w-full" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h6 className="font-sans text-base font-semibold uppercase text-pink-500 mb-1">
          {name}
        </h6>
        <p className="font-sans text-base font-normal text-gray-700 mb-2 flex-grow">
          {content}
        </p>
        <Link to="/login" className="mt-auto">
          <button
            className="flex items-center gap-2 rounded-lg py-2 px-4 text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30"
            type="button"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
