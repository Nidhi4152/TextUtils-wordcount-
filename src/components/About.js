import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
    
  });

  const [btnText, setBtnText] = useState("Enable dark mode");

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '2px solid blue'   // ❌ Missing comma above this line!
      });
      setBtnText("Enable light mode");
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnText("Enable dark mode");
    }
  };

  const boxStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
  };

  return (
    <div className="container" style={myStyle}>
      <h2 className="mb-4 text-center">About TextUtils</h2>

      <div style={boxStyle}>
        <h4>🔠 Convert Text Case</h4>
        <p>You can easily convert your text into <strong>uppercase</strong> or <strong>lowercase</strong> with a single click.</p>
      </div>

      <div style={boxStyle}>
        <h4>📋 Copy & Clear Text</h4>
        <p>Click a button to copy your modified text or clear everything and start fresh!</p>
      </div>

      <div style={boxStyle}>
        <h4>📊 Word & Character Count</h4>
        <p>Know exactly how many <strong>words and characters</strong> your text contains.</p>
      </div>

      <div style={boxStyle}>
        <h4>🧹 Remove Extra Spaces</h4>
        <p>Fix messy spacing issues by removing unnecessary spaces between words.</p>
      </div>

      <div style={boxStyle}>
        <h4>⏱ Read Time Estimator</h4>
        <p>Get an idea of how long it will take to read the entered text based on average reading speed.</p>
      </div>

      <div style={boxStyle}>
        <h4>👩‍💻 Built By</h4>
        <p>This React.js project was created with 💖 by <strong>Nidhi Pal</strong> for practicing frontend development skills.</p>
      </div>

      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
      </div>
    </div>
  );
}

