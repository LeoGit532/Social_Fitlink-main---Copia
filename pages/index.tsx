import { useState, useEffect } from "react";
import BottomBar from "../src/components/bottomBar/BottomBar";
 import { FaHome, FaSearch, FaUser, FaPlus } from "react-icons/fa";
import Timeline from "../src/components/timeline/Timeline";
import { ProtectedRoute } from "../src/components/protectedRoute/ProtectedRoute";
import { useAuth } from "../src/context/AuthContext";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { userId } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:8000/post/",
          withCredentials: true,
          headers: {
            "content-type": "application/json",
          },
          data: { user_id: userId },
        });

        if (response.status !== 200) throw new Error(response.data);

        setPosts(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchPosts();
  }, []);

  return (
    <ProtectedRoute>
      <Timeline posts={posts} />
      <BottomBar />
    </ProtectedRoute>
  );
}