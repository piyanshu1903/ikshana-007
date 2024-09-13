# To run the servercopy the below command
# uvicorn incrementalServer:app --host 0.0.0.0 --port 8000 --reload

import json
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import JSONResponse
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import asyncio

import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or use ["*"] to allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Stub function to return a value (this would be the chatbot's response logic)
def getresponse(user_input: str):
    # Prepare the data to send in the request body
    userPrompt = {"prompt": user_input}
    # Make the API call using the POST method
    response = requests.post("http://20.237.17.223:5000/chatbot", json=userPrompt)
    return response.json().get('response')

@app.post("/uploadlocal")
async def upload_file(file: UploadFile = File(...)):
    print(file.filename)
    return JSONResponse({"uploadedFile": file.filename})

# WebSocket endpoint for continuous chat interaction
@app.websocket("/chatbot")
async def websocket_chatbot(websocket: WebSocket):
    await websocket.accept()  # Accept WebSocket connection
    try:
        while True:
            # Wait to receive the user's prompt from the WebSocket

            # Call the getresponse() function to process the prompt and get the response
            user_prompt = await websocket.receive_text()
            # response=""
            responseData =  getresponse(user_prompt)
            # responseData = {
            # "text": getresponse(user_prompt)
            # }
            response = responseData
            responseData = {
            "response": response,
            "responseCompleted":'True'
            }
            await websocket.send_json(responseData)
            # while len(response)>0:
                

            #     responseEnd = {"responseCompleted":'True'}
            #     websocket.send_json(responseEnd)
            #     break


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