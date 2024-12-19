import React from 'react';

const Tips = () => {

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHlvM2ZnbjM5enl0NDRvbTh0enVlOXBuYmV5bW9lNnN5YTluOGg2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ckr4W2ppxPBeIF8dx4/giphy.webp'})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}
    >
      <iframe
        src="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/13/11/20241213111527-PFLJSM4C.json"
        title="AI Chatbot"
        style={{
          width: '80%',
          height: '80%',
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      ></iframe>
      
    </div>
  );
};

export default Tips;
