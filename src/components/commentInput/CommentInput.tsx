import React, { useState } from 'react';
import { CommentInputContainer, Input } from './styles';
import { FaPaperPlane } from 'react-icons/fa';

interface CommentInputProps {
    userId: number;
    postId: number;
};

export default function CommentInput({userId, postId}: CommentInputProps) {
    const [comment, setComment] = useState('');
    const handleCommentSubmit = () => {
        const createComment = async () => {
            try {
                const response = await fetch(`http://localhost:8000/post/${postId}/comment/`, {
                    method: "post",
                    credentials: "same-origin",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_id: userId,
                        comment: comment,
                    }),
                });
                const json = await response.json();
                if (response.status !== 200) throw new Error(json);
                setComment('');
            } catch (err) {
                console.log(err.message);
            }
        };
        createComment();
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    return (
        <CommentInputContainer onSubmit={handleCommentSubmit}>
            <Input
                onChange={handleCommentChange}
                value={comment}
                type="text"
                placeholder="Escreva um comentário..."
            />
            <button>
                <FaPaperPlane />
            </button>
        </CommentInputContainer>
    )
}