
import './App.css';
import ImageSlider from './Components/ImageSlider';
import Navbar from './Components/Navbar';
import { SliderData } from './Components/SliderData';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default App;
