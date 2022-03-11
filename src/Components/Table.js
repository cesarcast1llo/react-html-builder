import React from 'react';

function Table ({ children, className, align, width, style, colSpan }) {
  return (
    <table role="presentation" border="0" cellspacing="0" cellpadding="0" className={className} align={align} width={width} style={style}>
      {children}
    </table>
  );
}

export default Table;

