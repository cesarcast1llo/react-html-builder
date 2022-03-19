import React from 'react';
// import Tr from './Tr';
// import Td from './Td';

function Table({
  children,
  className,
  align,
  width,
  bgColor,
  style = {},
  // open,
}) {
  return (
    <table
      role="presentation"
      border="0"
      cellSpacing="0"
      cellPadding="0"
      className={className}
      align={align ? align : 'center'}
      width={width ? width : '100%'}
      style={{ width: width + 'px', backgroundColor: bgColor, ...style }}
    >
      <tbody>
        {/* {open ? (
          <Tr>
            <Td>{children}</Td>
          </Tr>
        ) : (
          ' do nothing'
        )} */}
        {children}
      </tbody>
    </table>
  );
}

export default Table;
