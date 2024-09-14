export const uploadFileToServer = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("https://rag-chatbot.up.railway.app/uploadlocal", {
      method: "POST",
      body: formData,
    });
    const responseData = await response.json();
    return {
      fileName: responseData.uploadedFile,
    };
  } catch (error) {
    console.error("Upload error: ", error);
    throw error;
  }
};
