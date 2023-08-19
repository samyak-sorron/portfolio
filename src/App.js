import './App.css';
import Desctiption from './component/Desctiption';
import Header from './component/Header';
import Sidebar from './component/sidebar';
// import Mobile_menu from './component/mobile_menu';
import Skills from './component/skills';
import Work from './component/work';

function App() {
  return (
    <div className="App">
      {/* <Mobile_menu/> */}
      <Sidebar/>
      <Header/>
      <Desctiption/>
      <Skills/>
      <Work/>
    </div>
  );
}

export default App;
