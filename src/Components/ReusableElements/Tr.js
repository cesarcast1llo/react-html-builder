import React from 'react';

function Tr ({ children, colSpan }) {
  return (
    <tr colSpan={colSpan}>
      {children}
   </tr>
  );
}

export default Tr;

