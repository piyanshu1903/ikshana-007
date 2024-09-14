export const uploadFileToServer = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("https://74.225.204.71:8000/uploadlocal", {
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
