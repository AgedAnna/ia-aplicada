import React, { useState } from "react";
import styles from "./Ia.module.css";
import InboxOutlined from "@mui/icons-material/InboxOutlined";
import { message, Row, Upload, UploadFile } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload/interface";
import ImgCrop from "antd-img-crop";
import { uploadFile } from "../../services/Ia";

const { Dragger } = Upload;

const Ia: React.FC = () => {
  const [description, setDescription] = useState<string>("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleUpload = async (file: RcFile): Promise<void> => {
    console.log("Arquivo para upload:", file);
    try {
      message.loading("Enviando arquivo...", 0);
      const result = await uploadFile(file);
      setDescription(result.generated_text);
      message.destroy();
      message.success("Arquivo enviado com sucesso!");
    } catch (error: any) {
      message.destroy();
      message.error(error.message || "Erro ao enviar o arquivo!");
    }
  };

  const beforeUpload = async (file: RcFile) => {
    console.log("Arquivo cortado recebido em beforeUpload:", file);
    await handleUpload(file);
    setFileList([]);
    return false;
  };

  const onChange: UploadProps["onChange"] = ({ fileList }) => {
    setFileList(fileList);
  };

  const truncateFileName = (name: string, maxLength: number = 15): string => {
    if (name.length <= maxLength) return name;
    const extensionIndex = name.lastIndexOf(".");
    const extension = extensionIndex !== -1 ? name.slice(extensionIndex) : "";
    const baseName =
      extensionIndex !== -1 ? name.slice(0, extensionIndex) : name;
    const truncatedBaseName = baseName.slice(
      0,
      maxLength - extension.length - 3
    );
    return `${truncatedBaseName}...${extension}`;
  };

  const itemRender: UploadProps["itemRender"] = (_originNode, file) => {
    return (
      <div className="ant-upload-list-item">
        <div className="ant-upload-list-item-info">
          <span className="ant-upload-list-item-name">
            {truncateFileName(file.name)}
          </span>
        </div>
      </div>
    );
  };

  const props: UploadProps = {
    name: "file",
    multiple: false,
    maxCount: 1,
    fileList,
    onChange,
    beforeUpload,
    itemRender,
  };

  return (
    <div className={styles.inicioContainer}>
      <Row>
        <ImgCrop rotationSlider>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Clique ou arraste o arquivo para esta área para enviar.
            </p>
            <p className="ant-upload-hint">
              Apenas um arquivo por vez. Não envie dados confidenciais.
            </p>
          </Dragger>
        </ImgCrop>
      </Row>

      <Row>
        {description && (
          <div className={styles.result}>
            <h4>Descrição Gerada:</h4>
            <p className={styles.description}>{description}</p>
          </div>
        )}
      </Row>
    </div>
  );
};

export default Ia;
