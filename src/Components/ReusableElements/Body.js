import React from 'react';

const bodyStyles = {
   body: {
      '-webkit-text-size-adjust': '100%',
      '-ms-text-size-adjust': '100%',
      '-webkit-font-smoothing': 'antialiased',
      margin: '0 auto',
      padding: '0',
    },
};

function Body ({ children, style = {} }) {
  return (
    <body style={{ ...bodyStyles.body, ...style }}>
       {children}
    </body>
  );
}

export default Body;

