import React from "react";
import styles from "../styles/Perfil.module.css"; // Certifique-se de criar um arquivo CSS separado para estilos de perfil

export default function ProfilePage() {
  // Substitua os dados de perfil fictícios pelos dados reais do usuário
  const userProfile = {
    username: "Thomas-fit",
    fullName: "Thomas Fourier",
    bio: "-Fisiculturista",
    posts: 6,
    followers: 250_000,
    following: 125_000,
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <img
          src="https://pps.whatsapp.net/v/t61.24694-24/139217683_408699730434565_5860917225673439596_n.jpg?ccb=11-4&oh=01_AdRxSma9pLgRe-UoCQFGf-FxzuZC0YopZqzqqij0yrTEgQ&oe=65458E2E&_nc_sid=000000&_nc_cat=103"
          alt="Profile Image"
          className={styles.profileImage}
        />
        <div className={styles.profileInfo}>
          <h2>{userProfile.fullName}</h2>
          <h3>@{userProfile.username}</h3>
          <p>{userProfile.bio}</p>
          <div className={styles.profileStats}>
            <div className={styles.profileStat}>
              <strong>{userProfile.posts}</strong> posts
            </div>
            <div className={styles.profileStat}>
              <strong>{userProfile.followers}</strong> followers
            </div>
            <div className={styles.profileStat}>
              <strong>{userProfile.following}</strong> following
            </div>
          </div>
        </div>
      </div>

      <div className={styles.userPosts}>
        {/* Aqui você pode mapear e exibir as postagens do usuário */}
        {/* Cada post pode ser um componente separado */}
        {/* Exemplo de mapeamento de postagens fictícias */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={styles.userPost}>
            <img
              src={`/images/logofundotransparente${index + 1}.png`}
              alt={`Post ${index + 1}`}
              className={styles.postImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
