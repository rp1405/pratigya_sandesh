import React from "react";

const Loading = () => {
  const loadingContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
    backgroundColor: "#f9f9f9",
  };

  const loadingSpinnerStyle = {
    border: "6px solid rgba(0, 0, 0, 0.3)",
    borderTop: "6px solid black",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 1s linear infinite", // Spinning animation here
  };

  const loadingTextStyle = {
    fontSize: "20px",
    marginTop: "20px",
    color: "black",
    fontFamily: "Times New Roman",
  };

  // Keyframes for the spinning animation
  const spinKeyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={loadingContainerStyle}>
      <style>{spinKeyframes}</style>
      <div style={loadingSpinnerStyle}></div>
      <h2 style={loadingTextStyle}>Loading...</h2>
    </div>
  );
};

export default Loading;
