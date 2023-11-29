import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PostContainer, PostHeader, PostFooter,  } from "../src/components/timelinePost/styles";
import styles from "../styles/Post.module.css";
import CommentInput from "../src/components/commentInput/CommentInput";
//import { FaChevronLeft, FaComment, FaHeart, FaTrash } from "react-icons/fa";
import { useAuth } from "../src/context/AuthContext";
import { ProtectedRoute } from "../src/components/protectedRoute/ProtectedRoute";
import Link from "next/link";
import axios from "axios";

export default function Post() {
    const router = useRouter();
    const { userId } = useAuth();
    const { postId } = router.query;
    const [ postData, setPostData ] = useState({
        id: 0,
        image: "",
        description: "",
        created_at: "",
        comments: [],
        likes: [],
        user: {
            id: 0,
            name: "",
            username: "",
            image: "",
        }
    });

    const fetchPost = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/post/${postId}/`, {
                withCredentials: true,
                headers: {
                    "content-type": "application/json",
                },
            });
            if (response.status !== 200) throw new Error(response.statusText);

            setPostData(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    const deletePost = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/post/create/`, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: { post_id: postId }, // Axios uses `data` to send a body with DELETE
            });
            if (response.status !== 200) throw new Error("Problema na exclusão do post");
            router.push("/");

        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {        
        fetchPost();
    }, [postId]);

    const likePost = async () => {
        try {
            const response = await axios.post(`http://localhost:8000/post/${postId}/like/`, { user_id: userId }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status !== 200) throw new Error("Problema ao curtir o post");
            fetchPost();

        } catch (err) {
            console.log(err.message);
        }
    };

    function formatDate(date: string) {
        const dateObj = new Date(date);
        const day = dateObj.getDate();
        const month = dateObj.getMonth();
        const year = dateObj.getFullYear();
        const hour = dateObj.getHours();
        const minutes = dateObj.getMinutes();

        return `${day}/${month}/${year} às ${hour}:${minutes}`;
    };

    const userProfileImage = postData.user?.image ? "http://localhost:8000" + postData.user?.image : "/images/blank_user.jpg";

    return (
        <ProtectedRoute>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className="back" onClick={() => router.back()}>
                      
                    </div>
                </div>
                <div className="postContent">
                    <PostContainer>
                        <Link href={`/profile?user=${postData.user?.id}`}>
                            <PostHeader>
                                <div className="user-image">
                                    <img src={userProfileImage} />
                                </div>
                                <div className="user-name">
                                    <b>{postData.user?.name}</b>
                                    <small><i>@{postData.user?.username}</i></small>
                                </div>
                                { postData.user.id == userId ? (
                                    <button onClick={deletePost}>
                                     
                                    </button>
                                ) : null}
                            </PostHeader>
                        </Link>
                        <img src={"http://localhost:8000" + postData?.image} alt={postData.description} />
                        <p>{postData.description}</p>
                        <small>{formatDate(postData.created_at)}</small>
                        <PostFooter>
                            <div className="likes" onClick={likePost}>
                               
                                <strong>{postData.likes?.length}</strong>
                            </div>
                            <div className="comments">
                               
                                <strong>{postData?.comments?.length || 0}</strong>
                            </div>
                        </PostFooter>
                        <hr></hr>
                        <div className={styles.comments}>
                            {postData.comments?.map(comment => (
                                <div className={styles.comment}>
                                    <img className={styles.comment_img} src={"http://localhost:8000" + comment.user.image} alt="Profile Image" />
                                    <b>@{comment.user.username}:</b>
                                    <span>{comment.content}</span>
                                </div>
                            ))}
                        </div>
                        <CommentInput userId={userId} postId={postData.id} />
                    </PostContainer>
                </div>
            </div>
        </ProtectedRoute>
    )
};