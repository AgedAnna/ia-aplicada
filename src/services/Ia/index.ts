import axios from "axios";

const API_URL = "https://iaa-back.onrender.com/upload";

interface UploadResponse {
  generated_text: string;
}

/**
 *
 * @param {File} file
 * @returns {Promise<UploadResponse>}
 */
export const uploadFile = async (file: File): Promise<UploadResponse> => {
  if (!file) {
    throw new Error("Nenhum arquivo fornecido!");
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post<UploadResponse>(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.error || "Erro ao enviar o arquivo!";
    throw new Error(errorMessage);
  }
};
