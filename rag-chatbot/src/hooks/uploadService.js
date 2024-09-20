export const uploadFileToServer = async (file, requestBy) => {
  try {
    let apiUrl;
    const formData = new FormData();
    const maxFileSize = 5 * 1024 * 1024;
    if (file.size > maxFileSize) {
      throw new Error("File size should be less than 5 MB.");
    }

    formData.append("file", file);
    if (requestBy === "employee") {
      apiUrl = "https://sih-internals.up.railway.app/uploadlocal";
    }
    if (requestBy === "HR") {
      apiUrl = "https://sih-internals.up.railway.app/uploadknowledge";
    }
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
    throw error;
  }
};
