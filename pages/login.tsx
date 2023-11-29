import Link from "next/link";
import LoginCard from "../src/components/loginCard/loginCard";
import styles from "../styles/Login.module.css";
import Input from "../src/components/input/input";
import Button from "../src/components/button/button";
import Image from "next/image";
import { useState } from "react";
import { setCookie } from "cookies-next";
import { login } from "../services/user";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleFormEdit = (event, name) => {
    setFormData({ ...formData, [name]: event.target.value });
  };
  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await login(formData);
  
      // Adicione o console.log para verificar os dados enviados
      console.log('Dados enviados:', formData);
  
      if (response.token) {
        setCookie("authorization", response.token);
        router.push("/");
        setError(""); // Limpar o estado de erro em caso de sucesso
      } else {
        setError("Falha na autenticação");
      }
    } catch (err) {
      setError("Erro inesperado");
    }
  };
  

  return (
    <div className={styles.background}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/logofundotransparente.png"
          alt="Logo"
          width={400}
          height={400}
        />
        <Link href="/sobrenos">
          <Button className={styles.sobreNosButton}>Sobre nós</Button>
        </Link>
      </div>
      <LoginCard title={"Entre em sua conta"}>
        <form className={styles.form} onSubmit={handleForm}>
          <Input
            placeholder="Seu e-mail"
            value={formData.login}
            onChange={(e) => {
              handleFormEdit(e, "login");
            }}
          />
          <Input
            type="password"
            placeholder="Sua senha"
            value={formData.password}
            onChange={(e) => {
              handleFormEdit(e, "password");
            }}
          />
          {error && <p className={styles.error}>{error}</p>}
          <Button>Entrar</Button>
          <Link href="/cadastro">Ainda não possui conta? Clique aqui</Link>
        </form>
      </LoginCard>
    </div>
  );
}
