import React from 'react';

const img = {
   styles: {
      width: '100%',
      display: 'block',
    },
};

function Img ({ alt, className, src, width, style = {} }) {
  return (
    <img alt={alt} className={className} src={src} width={width} border="0" style={{ ...img.styles, ...style }} />
  );
}

export default Img;

