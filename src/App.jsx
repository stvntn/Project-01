import Navbar from './components/Navbar';
import Cardmain from '/src/components/Cardmain';
import Caja from '/src/components/Caja';
import fondo from './assets/img/fondo.png'

export default function App() {
  return (
    <>
      <div style={{ backgroundImage: `url(${fondo})`, 
              minWidth: '100vh',
              minHeight: '100vw',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain'
            }}>      
        <Navbar />      
        <Cardmain />      
        <Caja /> 
      </div>         
    </>
  )
}
