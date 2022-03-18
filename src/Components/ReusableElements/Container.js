import React from 'react';
import Tr from './Tr';
import Td from './Td';

function Container({ children, containerClass, containerWidth }) {
  return (
    <table
      role="presentation"
      border="0"
      cellSpacing="0"
      cellPadding="0"
      className="container"
      align="center"
      width="488"
    >
      <tbody>
        <Tr>
          <Td>{children}</Td>
        </Tr>
      </tbody>
    </table>
  );
}

export default Container;
