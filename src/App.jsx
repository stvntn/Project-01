
import { Container } from '@mui/material';

import SectionFirst from '/src/components/SectionFirst';
import SectionTwo from '/src/components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';

import fondo from './assets/img/fondo.svg'

export default function App() {
  return (
    <>
    <div className='first-section' style={{ backgroundImage: `url(${fondo})` }} >      
      <Container fixed>
         <SectionFirst />
      </Container>
    </ div>

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

    <Container fixed>
      <SectionFive />
    </Container>
    </>
  )
}
