import React from 'react';
import Tr from './Tr';
import Td from './Td';

function Spacer ({ height }) {
   return (
      <Tr>
         <Td height={height}>
            
         </Td>
      </Tr>
   );
}

export default Spacer;