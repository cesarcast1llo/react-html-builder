import React from 'react';

function Td({ children, className, align, style }) {
  return (
    <td
      align={align ? align : 'center'}
      valign="top"
      className={className}
      style={style}
    >
      {children}
    </td>
  );
}

export default Td;
