// import { useState, useEffect } from "react";

// const useWebSocket = (url) => {
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     const ws = new WebSocket(url);
//     setSocket(ws);

//     return () => {
//       ws.close();
//     };
//   }, [url]);

//   return [socket];
// };

// export default useWebSocket;

import { useState, useEffect, useRef } from "react";

const useWebSocket = (url) => {
  const [socket, setSocket] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    // Function to create and connect the WebSocket
    const createWebSocket = () => {
      const ws = new WebSocket(url);
      socketRef.current = ws;
      setSocket(ws);

      ws.onopen = () => {
        console.log("WebSocket connection established");
      };

      ws.onclose = () => {
        console.log("WebSocket connection closed. Reconnecting...");
        // Attempt to reconnect after a delay
        setTimeout(createWebSocket, 3000); // 3 seconds delay
      };

      ws.onerror = (error) => {
        console.error("WebSocket error observed:", error);
        ws.close(); // Close the connection on error, which will trigger reconnection
      };

      return ws;
    };

    // Create the WebSocket connection
    createWebSocket();

    // Clean up the WebSocket connection on component unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [url]);

  return [socket];
};

export default useWebSocket;
