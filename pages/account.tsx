import { useState, useRef, useEffect } from "react";
//import { FaChevronLeft, FaSave } from "react-icons/fa";
import { useAuth } from "../src/context/AuthContext";
import styles from "../styles/Account.module.css";
import { ProtectedRoute } from "../src/components/protectedRoute/ProtectedRoute";
import { useRouter } from "next/router";
import axios from "axios";

export default function Account() {
    const { userId } = useAuth();
    const router = useRouter();
    const [ userProfile, setUserProfile ] = useState({
        id: 0,
        name: "",
        image: "",
        username: "",
    });

    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);
        formData.append("user", `${userId}`);

        try {
            const response = await axios.post("http://localhost:8000/user/profile/image/", formData, {
                withCredentials: true
            });
            setUserProfile({ ...userProfile, image: response.data.image });
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.put("http://localhost:8000/user/profile/", {
                username: userProfile.username,
                name: userProfile.name,
                user: userId
            }, {
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            router.push("/profile");
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        const fetchProfile = async () => {
            if (userId === 0) {
                console.log("Usuário não autenticado");
                router.push("/login");
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8000/user/profile/?user=${userId}`, {
                    withCredentials: true
                });
                setUserProfile(response.data);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchProfile();
    }, [userId]);

    const handleFieldChange = (event, name) => {
        setUserProfile({ ...userProfile, [name]: event.target.value });
    };

    const profileImage = userProfile.image ? "http://localhost:8000" + userProfile.image : "/images/blank_user.jpg";

    return (
        <ProtectedRoute>
            <div className={styles.container}>
                <div className={styles.header}>
            
                </div>
                <div className={styles.fieldsList}>
                    <div className={styles.imageField}>
                        <img
                            src={profileImage}
                            alt="Profile Image"
                            onClick={handleImageClick}
                            className={styles.image}
                        />
                        <div>
                            <button onClick={handleImageClick}>
                                Alterar a imagem de perfil
                            </button>
                        </div>
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <label>
                        Nome:
                        <input
                            placeholder="Nome"
                            value={userProfile.name}
                            name="name"
                            onChange={(e) => handleFieldChange(e, "name")}
                        />
                    </label>
                    <label>
                        Nome de usuário:
                        <input
                            placeholder="Nome de usuário"
                            value={userProfile.username}
                            name="username"
                            onChange={(e) => handleFieldChange(e, "username")}
                        />
                    </label>
                    <label>
                        <button onClick={handleSubmit}>
                          c:\Users\leand\OneDrive\Área de Trabalho\BACKUP SA FITLINK\frontenvio\front\pages\create.tsx
                        </button>
                    </label>
                </div>
            </div>
        </ProtectedRoute>
    );
}