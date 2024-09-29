import React, { useEffect } from "react";
import { gsap } from "gsap"; // Import GSAP
import TextPlugin from "gsap/TextPlugin"; // Import TextPlugin

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

function Header() {
  useEffect(() => {
    // Animate h1 text on mount
    gsap.from("h1", { duration: 3, text: "" }); // Start with empty text
    gsap.to("h1", { duration: 3, text: "IKSHANA", ease: "power1.in" }); // Tween to full text
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
