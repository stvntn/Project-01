import Navbar from './components/Navbar';
import Cardmain from '/src/components/Cardmain';
import Caja from '/src/components/Caja';
import fondo from './assets/img/fondo.png'
import { Container } from '@mui/material';

export default function App() {
  return (
    <>
      <div className='first-section' style={{ backgroundImage: `url(${fondo})` }}>
        <Container maxWidth="xl">
          <Navbar />      
          <Cardmain />      
        </Container>    
      </div>  
      <div>
        <Container maxWidth="xl">
          <Caja />  
        </Container>    
      </div> 
    </>
  )
}
