import React from 'react';
 // Adjust the path as necessary

const AnimatedBackground = () => {
    const boxes = Array.from({ length: 10 }); // Create an array for 10 boxes

    return (
        <div>
            {boxes.map((_, index) => (
                <div
                    key={index}
                    className="box"
                    style={{
                        left: `${Math.random() * 100}vw`, // Random horizontal position
                        animationDelay: `${Math.random() * 5}s`, // Random delay for each box
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedBackground;
