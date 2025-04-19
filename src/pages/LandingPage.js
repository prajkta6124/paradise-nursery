import React from 'react';

const LandingPage = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundImage: 'url(https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.jpg?s=612x612&w=0&k=20&c=jWUMrHgjMY9zQXsAwZFb1jfM6KxZE16-IXI1bvehjQM=)', // Path to the background image in public folder
        backgroundSize: 'cover', // Ensures the image covers the entire background
        backgroundPosition: 'center', // Centers the background image
        minHeight: '100vh', // Full height of the viewport
        color: 'white', // Ensures text is visible on top of the background
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px', // Optional: Adds some padding around the content
      }}
    >
      {/* Company Name */}
      <h1>Paradise Nursery</h1>

      {/* Paragraph About the Company */}
      <p>Welcome to Paradise Nursery, where we bring the beauty of houseplants into your home. 🌿</p>

      {/* Get Started Button Linking to Product Listing Page */}
      <a href="/products">
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
          Get Started
        </button>
      </a>
    </div>
  );
};

export default LandingPage;
