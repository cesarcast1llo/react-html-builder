import React from 'react';

function Td ({ children, className, align, valign, height, style }) {
  return (
      <td align={align} valign={valign} className={className} style={style} height={height}>
         {children}
      </td>
  );
}

export default Td;

