
import { Container } from '@mui/material';

import SectionFirst from '/src/components/SectionFirst';
import SectionTwo from '/src/components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import Pie from './components/Pie';

// import fondo from './assets/img/fondo.svg'
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <div className='first-section'>      
        <Container>
        <Navbar />                
        <SectionFirst />
        </Container>
      </div>    

      <Container fixed>
        <SectionTwo />
      </Container>

      <Container fixed>
        <SectionThree />
      </Container>

    <div className='four-section'>
      <Container fixed>
        <SectionFour />
      </Container>
    </div>

    <Container>
      <SectionFive />
    </Container>

    <div className='pie'>
      <Container fixed>
        <Pie />
      </Container>
    </div>
    </>
  )
}
