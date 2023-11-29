import Link from 'next/link';
import { PostContainer, PostHeader, PostFooter } from './styles';
import { FaHeart, FaComment } from 'react-icons/fa';
import { useEffect, useState } from 'react';

interface PostProps {
    postItem: {
        id: number;
        user: {
            id: number;
            name: string;
            username: string;
            image: string;
        };
        description: string;
        created_at: string;
        likes: number;
        image: string;
        comments: string[];
    }
};

export function TimelinePost({ postItem: { id, user, description, created_at, likes, image } }: PostProps) {
    const [comments, setComments] = useState([]);
    function formatDate(date: string) {
        const dateObj = new Date(date);
        const day = dateObj.getDate();
        const month = dateObj.getMonth();
        const year = dateObj.getFullYear();
        const hour = dateObj.getHours();
        const minutes = dateObj.getMinutes();

        return `${day}/${month}/${year} às ${hour}:${minutes}`;
    }

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`http://localhost:8000/post/${id}/comment/`, {
                    method: "GET",
                    credentials: "same-origin",
                    headers: {
                        Accept: "application/json",
                    },
                });
                const json = await response.json();
                if (response.status !== 200) throw new Error(json);

                return json;
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchComments().then((data) => setComments(data));
    }, []);


    const profileLink = `/profile?user=${user.id}`;
    const profileImage = user.image ? "http://localhost:8000" + user.image : "/images/blank_user.jpg";

    return (
        <PostContainer>
            <Link href={`/post?postId=${id}`}>
                <PostHeader href={profileLink}>
                    <div className="user-image">
                        <img src={profileImage} />
                    </div>
                    <div className="user-name">
                        <b>{user.name}</b>
                        <small><i>@{user.username}</i></small>
                    </div>
                </PostHeader>
                <img src={"http://localhost:8000" + image} alt="post" />
            </Link>
            <p>{description}</p>
            <small>{formatDate(created_at)}</small>
            <PostFooter>
                <div className="likes">
                    <FaHeart />
                    <strong>{likes}</strong>
                </div>
                <div className="comments">
                    <FaComment />
                    <strong>{comments?.length}</strong>
                </div>
            </PostFooter>
        </PostContainer>
    )

}