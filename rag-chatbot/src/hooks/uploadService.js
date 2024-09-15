export const uploadFileToServer = async (file, requestBy) => {
  try {
    let apiUrl;
    const formData = new FormData();
    formData.append("file", file);
    if (requestBy === "employee") {
      apiUrl =
        "http://sihserver.ddns.net:8000/update_faiss_vector_database_with_pdf";
    }
    if (requestBy === "HR") {
      apiUrl = "http://sihserver.ddns.net:8000/update_vector_database_with_pdf";
    }
    console.log(apiUrl);
    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });
    const responseData = await response.json();
    return {
      fileName: file.name,
      message: responseData.message,
    };
  } catch (error) {
    console.error("Upload error: ", error);
    throw error;
  }
};
