import { Card, Row, Col } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { pessoas } from "./pessoas";
import styles from "./Gruop.module.css";

const { Meta } = Card;

const CardsGrid = () => {
  return (
    <div className={styles.cardsContainer}>
      <Row
        gutter={[16, 16]}
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
      >
        {pessoas.map((pessoa, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              className={styles.card}
              hoverable
              cover={<img alt={pessoa.nome} src={pessoa.imagem} />}
              actions={[
                <a
                  href={pessoa.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubOutlined />
                </a>,
                <a
                  href={pessoa.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinOutlined />
                </a>,
                <a
                  href={pessoa.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramOutlined />
                </a>,
              ]}
            >
              <Meta title={pessoa.nome} description={pessoa.funcao} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardsGrid;
