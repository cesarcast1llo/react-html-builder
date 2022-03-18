// import Body from './Components/Body';
import Table from './Components/Table';
import Tr from './Components/Tr';
import Td from './Components/Td';
import Spacer from './Components/Spacer';
import Img from './Components/Img';

function App() {
  return (
      <Table align="center" className="main" width="700" style={{width: "700px", backgroundColor: "#feffff"}}>
         <Spacer height="70px"/>
         <Tr>
          <Td align="center">
            <Img src="https://d2axdqolvqmdvx.cloudfront.net/6f25960f-c392-4ae8-9149-1386313f1456/RedLogo.png" alt="abbr" style={{maxWidth: "100px"}} />
          </Td>
        </Tr>
        <Spacer height="50px"/>
        <Tr>
          <Td align="left">
            <Img src="https://d2axdqolvqmdvx.cloudfront.net/6f25960f-c392-4ae8-9149-1386313f1456/RedLogo.png" alt="abbr" style={{maxWidth: "100px"}} />
          </Td>
        </Tr>
      </Table>
  );
}

export default App;
