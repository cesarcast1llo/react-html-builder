import React from 'react';
import Tr from './Tr';
import Td from './Td';
import Container from './Container';

function Table({
  children,
  className,
  align,
  width,
  style,
  colSpan,
  containerClass,
  containerWidth,
}) {
  return (
    <table
      role="presentation"
      border="0"
      cellSpacing="0"
      cellPadding="0"
      className={className}
      align={align}
      width={width}
      style={style}
      colSpan={colSpan}
    >
      <tbody>
        <Tr>
          <Td>
            <Container className={containerClass} width={containerWidth}>
              {children}
            </Container>
          </Td>
        </Tr>
      </tbody>
    </table>
  );
}

export default Table;
