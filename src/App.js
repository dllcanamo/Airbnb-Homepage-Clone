
import './App.css';
import TopNavbar from './main-components/top-navbar';
import Selections from './main-components/selections';
import MobileUIBottom from './main-components/mobile-UI-Bottom';
import MainContent from './main-components/main-content';

// import abnbLogo from './assets/svgexport-1.svg';

function App() {
  return (
    <div className='HomePage'>
      {/* Levi
      <img src={abnbLogo} alt='ABNB-LOGO'></img> */}
      <TopNavbar></TopNavbar>
      <Selections></Selections>
      <MainContent></MainContent>
      <div className='MUIBCONT'>
        <MobileUIBottom></MobileUIBottom>
      </div>
    </div>
  );
}

export default App;
