import './App.css';
import Desctiption from './component/Desctiption';
import Header from './component/Header';
import Contact from './component/contact';
import Footer from './component/footer';
import Sidebar from './component/sidebar';
// import Mobile_menu from './component/mobile_menu';
import Skills from './component/skills';
import Work from './component/work';

function App() {
  return (
    <div className="App bg-black">
    <div className='container'>

      {/* <Mobile_menu/> */}
      <Sidebar/>
      <Header/>
      <Desctiption/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div></div>
  );
}

export default App;
