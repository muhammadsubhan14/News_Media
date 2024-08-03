import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  console.log(id, "id profile");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("access_token");

        if (!token) {
          return;
        }

        const response = await axios.get(`http://localhost:3000/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response.data.user);
        // console.log(id, "id profile");
        setUserData(response.data.user);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!userData) return <p>No user data available</p>;

  return (
    <div className="p-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <div className="mb-4">
          <strong>Name:</strong> {userData.name}
        </div>
        <div className="mb-4">
          <strong>Phone:</strong> {userData.telp}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {userData.email}
        </div>
      </div>
    </div>
  );
}
