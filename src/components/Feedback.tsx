import React, { useState } from 'react';
import './GoogleDocViewer.css';

interface FeedbackForm {
  message: string;
}

const Feedback: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      
      if (response.ok) {
        alert('Thank you for your feedback!');
        setMessage('');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again.');
    }
  };

  return (
    <div className="doc-container">
      <h2>Feedback</h2>
      <div className="content-section">
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          maxWidth: '500px',
          margin: '0 auto',
          padding: '2rem',
          background: 'rgba(106, 27, 154, 0.1)',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(157, 107, 231, 0.1)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" style={{ color: '#d4b6ff', fontSize: '1.1rem' }}>Talk to me:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              style={{
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid rgba(157, 107, 231, 0.3)',
                background: 'rgba(20, 17, 35, 0.7)',
                color: '#ffffff',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '12px 24px',
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, rgba(157, 107, 231, 0.4) 0%, rgba(106, 27, 154, 0.4) 100%)',
              color: '#d4b6ff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 2px 8px rgba(157, 107, 231, 0.1)',
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: '0.3px',
              fontWeight: '400'
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback; 