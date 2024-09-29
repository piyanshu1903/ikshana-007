import { useEffect } from 'react'; // Import useEffect
import { gsap, SplitText } from "gsap"; // Import SplitText

// Register the SplitText plugin
gsap.registerPlugin(SplitText);

// Create the SplitText animation
const splitTextAnimation = () => {
    const split = new SplitText("h1", { type: "chars" }); // Split h1 into characters
    gsap.from(split.chars, {
        duration: 5,
        y: 100, // Move from 100px below
        autoAlpha: 0, // Start invisible
        stagger: 0.05 // Stagger the animation
    });
};

// Call the animation function inside useEffect
useEffect(() => {
    splitTextAnimation();
}, []); // Empty dependency array to run once on mount