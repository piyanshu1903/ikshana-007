import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about_us.css';
import ragFlowchart from '../assets/rag flowchart.jpg'; // Make sure to add this image to your assets folder

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Our AI-Powered Chatbot Platform</h1>
      <div className="content-wrapper">
        <p>
          Welcome to our AI-powered chatbot platform, designed to streamline how employees interact with their organization. Our solution uses free and open-source technologies, combined with deep learning, natural language processing (NLP), and Retrieval-Augmented Generation (RAG), to provide fast, accurate, and contextually aware responses to a wide range of employee queries, including HR policies, IT support, and company events.

          We use publicly available sample data to simulate real-world organizational scenarios, ensuring that our chatbot can address diverse employee needs.

          RAG technology allows our chatbot to retrieve relevant information from organizational documents while generating precise, context-sensitive responses. Employees can upload confidential documents for real-time text extraction, summarization, and analysis, making it easy to access critical information from internal reports, policies, or other documents.

          To ensure secure access, we've implemented two-factor authentication (2FA) using Firebase, safeguarding the platform from unauthorized access. The chatbot processes queries through semantic search powered by vector databases like FAISS or Pinecone DB, with embeddings generated from organizational documents. Combined with Google Gemini LLMs, this setup delivers precise and relevant responses, even for complex queries.

          Our system is built to handle at least 5 users concurrently, maintaining response times of under 5 seconds. To maintain a professional communication environment, we've also integrated a bad language filter.

          We are committed to delivering a secure, scalable, and user-friendly chatbot solution that enhances productivity and streamlines access to information, all while utilizing free and open-source technologies to maximize accessibility and innovation.
        </p>
        <img src={ragFlowchart} alt="RAG Flowchart" className="rag-flowchart" />
      </div>
      <Link to="/home" className="continue-button">
        Continue to Chat
      </Link>
    </div>
  );
}

export default AboutUs;
