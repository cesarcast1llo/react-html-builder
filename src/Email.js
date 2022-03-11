import Body from './Components/Body';
import Table from './Components/Table';
import Td from './Components/Td';
import Img from './Components/Img';

function App() {
  return (
    <Body style={{backgroundColor: "red"}}>
      <Table align="center" className="main" width="700" style={{width: "700px", backgroundColor: "#feffff"}}>
        <Td align="center">
          <Img src="https://d2axdqolvqmdvx.cloudfront.net/6f25960f-c392-4ae8-9149-1386313f1456/RedLogo.png"     alt="abbr" style={{maxWidth: "100px"}} />
        </Td>
      </Table>
    </Body>
  );
}

export default App;
