import React from 'react';

function Table ({ children, className, align, width, style, colSpan }) {
  return (
    <table role="presentation" border="0" cellspacing="0" cellpadding="0" className={className} align={align} width={width} style={style}>
      <tr colSpan={colSpan}>
       {children}
       </tr>
    </table>
  );
}

export default Table;

