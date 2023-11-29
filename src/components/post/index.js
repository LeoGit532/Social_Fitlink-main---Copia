import React, { useState } from 'react';

const Post = ({ post }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica para enviar o comentário para o back-end aqui
    console.log(`Comentando "${comment}" no post ${post.id}`);
    setComment(''); // Limpar o campo de comentário
  };

  return (
    <div className="post">
      <p>
        <strong>{post.user}</strong>: {post.text}
      </p>
      {post.image && <img src={post.image} alt="Imagem do post" />}
      
      {/* Se houver comentários, exiba-os */}
      {post.comments.length > 0 && (
        <div className="comments">
          <strong>Comentários:</strong>
          {post.comments.map((comment, index) => (
            <p key={index}>
              <strong>{comment.user}</strong>: {comment.text}
            </p>
          ))}
        </div>
      )}

      {/* Formulário para adicionar um comentário */}
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Adicione um comentário"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Comentar</button>
      </form>
    </div>
  );
};

export default Post;
