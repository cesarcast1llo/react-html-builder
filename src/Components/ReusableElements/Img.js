import React from 'react';

const Img = ({ alt, className, src, width, style }) => {
  return (
    <img
      alt={alt}
      className={className}
      src={src}
      width={width}
      border="0"
      style={{
        width: '100%',
        maxWidth: width + 'px',
        ...style,
      }}
    />
  );
};

export default Img;
