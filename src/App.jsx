import fhgruempeliLogo from './assets/Logo-Standard.png'
import './App.css'

function App() {

  return (
    <>
      <img src={fhgruempeliLogo} alt="FH Grümpeli" width={window.innerHeight > window.innerWidth ? window.innerWidth-20 : "auto"} height={window.innerHeight > window.innerWidth ? "auto" : window.innerHeight-20} style={{ alignSelf: 'center' }} />
    </>
  )
}

export default App
