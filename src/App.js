
import './App.css';
import TopNavbar from './main-components/top-navbar';
import Selections from './main-components/selections';
// import abnbLogo from './assets/svgexport-1.svg';

function App() {
  return (
    <div className='HomePage'>
      {/* Levi
      <img src={abnbLogo} alt='ABNB-LOGO'></img> */}
      <TopNavbar></TopNavbar>
      <Selections></Selections>
    </div>
  );
}

export default App;
