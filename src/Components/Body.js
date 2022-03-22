import React from 'react';

const bodyStyles = {
  body: {
    WebkitTextSizeAdjust: '100%',
    textSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    margin: '0 auto',
    padding: '0',
    textAlign: 'center',
  },
};

const Body = ({ children, className, style = {}, bgColor }) => {
  return (
    <body
      className={className}
      style={{ ...bodyStyles.body, ...style, backgroundColor: bgColor }}
    >
      {children}
    </body>
  );
};

export default Body;
