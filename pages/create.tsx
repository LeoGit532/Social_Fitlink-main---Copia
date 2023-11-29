import { useState } from "react";
import BottomBar from "../src/components/bottomBar/BottomBar";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useAuth } from "../src/context/AuthContext";
import { ProtectedRoute } from "../src/components/protectedRoute/ProtectedRoute";
import axios from "axios";

const CreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CreateInput = styled.input`
    width: 90%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    margin-bottom: 10px;
    padding: 10px;
`;

const CreateButton = styled.button`
    width: 90%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #FE6513;
    color: white;
    font-weight: bold;
    cursor: pointer;
    justify-self: flex-end;
`;

const CreateForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
`;

export default function Create() {
    const router = useRouter();
    const { userId } = useAuth();
    const [formData, setFormData] = useState({
        image: "",
        description: "",
    });

    const handleChange = (event, name) => {
        if (name === "image") {
            setFormData({ ...formData, [name]: event.target.files[0] });
            return;
        }
        setFormData({ ...formData, [name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = new FormData();
            data.append("image", formData.image);
            data.append("description", formData.description);
            data.append("user_id", `${userId}`);

            const response = await axios.post("http://localhost:8000/post/create/", data, {
                withCredentials: true,
                headers: {
                    'Accept': 'application/json'
                },
            });

            if (response.status !== 200) {
                throw new Error("Erro ao criar postagem");
            }
            router.push("/");
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <ProtectedRoute>
            <CreateContainer>
                <h1>Adicionar Publicação</h1>
                <CreateForm onSubmit={handleSubmit}>
                    <CreateInput
                        onChange={(e) => handleChange(e, "image")}
                        type="file"
                        placeholder="Imagem"
                    />
                    <CreateInput
                        onChange={(e) => handleChange(e, "description")}
                        type="text"
                        placeholder="Legenda"
                    />
                    <CreateButton>Postar</CreateButton>
                </CreateForm>
                <BottomBar />
            </CreateContainer>
        </ProtectedRoute>
    )
}