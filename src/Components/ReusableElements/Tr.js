import React from 'react';

const Tr = ({ children, colSpan }) => {
  return <tr colSpan={colSpan}>{children}</tr>;
};

export default Tr;
