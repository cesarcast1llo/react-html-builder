import React from 'react';
import Spacer from './Spacer';

const Cta = ({ cta, align, bgColor, style = {} }) => {
  return (
    <>
      <Spacer height="32" />
      <tr>
        <td valign="top" align="center">
          <table
            width="272"
            style={{ width: '272px' }}
            cellSpacing="0"
            cellPadding="0"
            border="0"
            align={align ? align : 'center'}
          >
            <tbody>
              <tr>
                <td
                  bgcolor={bgColor}
                  style={{
                    fontFamily: `'Noto Sans', helvetica, arial`,
                    color: '#feffff',
                    fontSize: '16px',
                    fontWeight: 700,
                    borderRadius: '8px',
                    padding: '13px 0',
                    backgroundColor: bgColor,
                    ...style,
                  }}
                  align="center"
                >
                  {cta}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
};

export default Cta;
