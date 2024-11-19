import axios from "axios";

export const translateText = async (text: string, targetLanguage: string) => {
  try {
    const response = await axios.get(
      "https://api.mymemory.translated.net/get",
      {
        params: {
          q: text,
          langpair: `en|${targetLanguage}`,
        },
      }
    );

    return response.data.responseData.translatedText;
  } catch (error) {
    console.error("Erro na tradução:", error);
    throw new Error("Erro ao traduzir o texto.");
  }
};
