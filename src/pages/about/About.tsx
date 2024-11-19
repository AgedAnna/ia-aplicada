import React from "react";
import img from "../../assets/boy.svg";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src={img} alt="boy" className={styles.image} />
      </div>
      <div className={styles.textSection}>
        <h1 className={styles.title}>Proposta</h1>
        <p className={styles.description}>
          No contexto da disciplina de Inteligência Artificial Aplicada,
          desenvolvemos um projeto em Python focado na geração automática de
          descrições para imagens. Utilizando técnicas avançadas de Visão
          Computacional e Processamento de Linguagem Natural, o sistema recebe
          uma imagem como entrada e retorna uma descrição textual que representa
          o conteúdo visual da mesma.
        </p>
      </div>
    </div>
  );
};

export default About;
