import React from "react";

const CircleGradientBackground: React.FC = () => {
  const gradientStyle: React.CSSProperties = {
    background:
      "linear-gradient(to right, rgb(96, 165, 250), rgb(52, 211, 153))",
    borderRadius: "50%",
    width: "100px", // Adjust the size as needed
    height: "100px", // Adjust the size as needed
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    // Add any other styles you need
  };

  return (
    <div className="gradient" style={gradientStyle}>
      {/* Add your content inside the circle if needed */}
    </div>
  );
};

export default CircleGradientBackground;
