import styles from "../styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../src/components/button/button";

export default function Sobre() {
  return (
    <div className={`${styles.background} ${styles.sobreNosContainer}`}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/logofundotransparente.png"
          alt="Logo"
          width={400}
          height={400}
        />
      </div>
      <div className={`${styles.grayBox} ${styles.sobreNosGrayBox}`}>
        <h2>Sobre nós</h2>
        <p>
          Há alguns anos, no Curso Técnico de Desenvolvimento de Sistemas, Cleandro
          Menezes de Oliveira, Leandro Ciysz de Oliveira e Mathias Murilio dos
          Santos se conheceram e compartilharam uma paixão pelo fitness e saúde.
          Durante uma corrida no parque, surgiu a ideia do FitLink, uma
          plataforma de rede social para entusiastas do fitness.
        </p>
        <p>
          Juntamente com os professores Reneilson, Marcos e Rafael, eles transformaram essa ideia em
          realidade. O FitLink permite que as pessoas compartilhem rotinas de
          exercícios, receitas saudáveis e dicas de saúde. A plataforma cresceu
          e inclui recursos de rastreamento de atividades, eventos de fitness e
          parcerias com academias.
        </p>
        <p>
          Hoje, o FitLink é uma comunidade global dedicada ao bem-estar,
          capacitando as pessoas a alcançar seus objetivos de saúde e fitness. A
          visão dos quatro amigos se tornou realidade, tornando o FitLink uma
          parte fundamental da jornada de muitos em busca de uma vida mais ativa
          e equilibrada.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/login">
          <Button
            className={`${styles.sobreNosButton} ${styles.sobreNosBackButton}`}
          >
            Voltar
          </Button>
        </Link>
      </div>
    </div>
  );
}
