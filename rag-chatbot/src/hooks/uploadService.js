// // services/uploadService.js

// export const uploadFileToServer = async (file) => {
//   try {
//     const formData = new FormData();
//     formData.append("file", file);

//     const response = await fetch("https://your-server-url.com/upload", {
//       method: "POST",
//       body: formData,
//     });

//     if (!response.ok) {
//       throw new Error("File upload failed");
//     }

//     const data = await response.json();
//     return data; // Expecting response from server with the uploaded file details
//   } catch (error) {
//     console.error("Upload error: ", error);
//     throw error;
//   }
// };

// services/uploadService.js

// Simulated file upload function
export const uploadFileToServer = async (file) => {
  try {
    // Simulate a delay to mimic a real file upload process
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    // Console log the success message
    console.log(`File "${file.name}" uploaded successfully!`);

    // Return the simulated uploaded file data
    return {
      fileName: file.name, // Simulating response with the file's name
    };
  } catch (error) {
    console.error("Upload error: ", error);
    throw error;
  }
};
