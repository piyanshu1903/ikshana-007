import React, { useEffect } from 'react';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom';
import '../styles/about_us.css';
import ragFlowchart from '../assets/rag flowchart.gif'; // Make sure to add this image to your assets folder
import TextPlugin from "gsap/TextPlugin"; // Import TextPlugin

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

function AboutUs() {
  
  useEffect(() => {
    
    gsap.to("h1", {
      duration: 2,
      text: "Ikshana chatbot", // Set the text to animate
      ease: "power1.out"
    });

    
    // gsap.from("h1", {
    //   duration: 3,
    //   text: "", // Start with empty text
    //   ease: "power1.out"
    // });
  }, []); // Run once on mount

  return (
    <div className="about-us-container">
      <h1>010101010101</h1>
      
      <Link to="/home" className="continue-button">
        Continue to Chat
      </Link>
      <div className="content-wrapper">
        <p>
        Welcome to Ikshana, where cutting-edge AI technology meets your organizational needs. Whether it's retrieving information from policy documents, getting real-time IT support, or clarifying organizational events, we’ve got you covered.
        Our chatbot, powered by advanced AI technologies, ensures that your employees always get the most relevant and contextually accurate answers. With features like real-time document parsing and summarization, 2-factor authentication for added security, and multi-user scalability, our web app is designed to support your growing workforce efficiently.
        Gone are the days of tedious manual searches and delays—our solution automates responses and supports employee self-service, reducing the workload for your HR and IT teams while improving productivity across the board. By keeping your knowledge base up-to-date and providing intelligent, personalized responses, we aim to enhance employee satisfaction and boost organizational efficiency.
        Ikshana isn't just a tool—it's the next step in revolutionizing your workplace communication. Let us help you drive innovation and success!

          <h2 style={{color: 'Red'}}>Note</h2>
          The chatbot’s knowledge base has been built using publicly available data from:
          <ul>
            <li>GAIL (India) Ltd.: Official policies, IT guidelines, employee handbooks, and organizational procedures.</li>
            <li>Ministry of Petroleum and Natural Gas: Relevant policies, regulatory frameworks, and key operational information sourced from the Ministry’s public documents and official resources.</li>
          </ul>
          All the data used has been retrieved from the official websites and publicly accessible sources. The chatbot uses this data to respond to your queries in real-time, ensuring contextually accurate and up-to-date information.

        </p>
        
        <img src={ragFlowchart} alt="RAG Flowchart" className="rag-flowchart" />
      </div>
      
    </div>
  );
}

export default AboutUs;
