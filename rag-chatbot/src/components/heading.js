import React, { useEffect } from "react";
import { gsap } from "gsap"; // Import GSAP
import TextPlugin from "gsap/TextPlugin"; // Import TextPlugin

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

function Header() {
  useEffect(() => {
    // Animate h1 text on mount using fromTo
    gsap.fromTo("h1", { text: "" }, { duration: 1.5, text: "IKSHANA", ease: "linear",delay:0.5 });
  }, []); // Run once on mount

  return (
    <div className="header">
      <div className="header__logo">
        <h1>IKSHANA</h1>
      </div>
    </div>
  );
}

export default Header;
