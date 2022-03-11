import React from 'react';

function Td ({ children, className, align, valign, style }) {
  return (
      <td align={align} valign={valign} className={className} style={style}>
         {children}
      </td>
  );
}

export default Td;

