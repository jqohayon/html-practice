import React from 'react';
import '../GoogleDocViewer.css';

function Education() {
  return (
    <div className="doc-container">
      <h2>Education</h2>
      <iframe
        title="Education"
        className="google-doc"
        src="https://docs.google.com/document/d/14Z5o3InR-2lLqg0WeByzgg0t5_n7xvUSQ0kNxPT_Cx4/preview#heading=h.3"
        frameBorder="0"
        width="100%"
        height="800px"
        allowFullScreen
      />
    </div>
  );
}

export default Education; 