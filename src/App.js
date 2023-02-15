
import './App.css';
import DropDown from './Components/DropDown';

import ImageSlider from './Components/ImageSlider';
import Navbar from './Components/Navbar';
import { SliderData } from './Components/SliderData';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <DropDown/>
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default App;
