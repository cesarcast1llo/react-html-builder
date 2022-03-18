import React from 'react';

function Spacer({ height }) {
  return (
    <tr>
      <td valign="top" height={height} style={{ height: height + 'px' }}></td>
    </tr>
  );
}

export default Spacer;
