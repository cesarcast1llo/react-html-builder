import React from 'react';

const Td = ({ children, className, align, style = {} }) => {
  return (
    <td
      align={align ? align : 'center'}
      valign="top"
      className={className}
      style={{ ...style }}
    >
      {children}
    </td>
  );
};

export default Td;
