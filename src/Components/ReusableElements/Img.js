import React from 'react';

function Img({ alt, className, src, width }) {
  return (
    <img
      alt={alt}
      className={className}
      src={src}
      width={width}
      border="0"
      style={{
        display: 'block',
        width: '100%',
        maxWidth: width + 'px',
      }}
    />
  );
}

export default Img;
