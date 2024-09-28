// Banner.jsx
import React from 'react';

const Banner = () => {
  return (
    <div className="book-importance-container">
      <div className="book-benefits-description">
        <h2>The Importance of Books over Social Media</h2>
        <p>
          Reading books provides numerous benefits, including knowledge acquisition,
          improved cognitive skills, and enhanced creativity. In contrast, excessive
          social media consumption can lead to decreased attention span, increased
          stress, and decreased face-to-face communication skills.
        </p>
        <ul>
          <li>Improves critical thinking and analytical skills</li>
          <li>Enhances vocabulary and communication skills</li>
          <li>Supports personal growth and self-awareness</li>
          <li>Fosters empathy and understanding of different perspectives</li>
        </ul>
      </div>
      <div className="reading-image-illustration">
        <img
          src="https://images.unsplash.com/photo-1492539438225-2666b2a98f93?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Girl reading a book"
        />
      </div>
    </div>
  );
};

export default Banner;