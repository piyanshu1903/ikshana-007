# To run the servercopy the below command
# uvicorn incrementalServer:app --host 0.0.0.0 --port 8000 --reload

import json
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import JSONResponse
from typing import List
import asyncio

app = FastAPI()

# Stub function to return a value (this would be the chatbot's response logic)
def getresponse(user_input: str):
    # For now, just return 1 (replace this with actual chatbot logic)
    return "hello hi how are you"

# WebSocket endpoint for continuous chat interaction
@app.websocket("/chatbot")
async def websocket_chatbot(websocket: WebSocket):
    await websocket.accept()  # Accept WebSocket connection
    try:
        while True:
            # Wait to receive the user's prompt from the WebSocket

            # Call the getresponse() function to process the prompt and get the response
            user_prompt = await websocket.receive_text()
            # responseData = getresponse(user_prompt)
            # responseData = {
            # "text": getresponse(user_prompt)
            # }
            while True:
                response = input("Enter a message to send to the client (or type 'exit' to close): ")

                responseData = {
                "response": response,
                "responseCompleted":'False'
                }
                if response=='exit()':
                    responseData = {"responseCompleted":'True'}
                    await websocket.send_json(responseData)
                    break
                else:
                    await websocket.send_json(responseData)


            # Send the response back to the client over the WebSocket

    except WebSocketDisconnect:
        # Handle the client disconnecting from the WebSocket
        print("Client disconnected")

    except Exception as e:
        # If any other error occurs, send an error message and close the connection
        await websocket.send_text(f"Error: {str(e)}")
        await websocket.close()

# Error handling for internal server error
@app.exception_handler(500)
async def internal_error_handler(request, exc):
    return JSONResponse(content={"error": "Internal Server Error"}, status_code=500)


