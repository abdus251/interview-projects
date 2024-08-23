import './App.css';
import LoadMoreData from './components/5-load-more-data';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view-6';
import menus from './components/tree-view-6/data';

function App() {
  return (
    <div className="App">
      {/* accordian component */}
      {/* <Accordian /> */}
      {/* {Random color component} */}
      {/* <RandomColor /> */}

      {/* Star rating component */}
      {/* <StarRating /> */}

      {/* Image slider component */}
      {/* <ImageSlider url={'https://restcountries.com/v3.1/all'} 
      limit={'10'}/> */}




{/* Load more products components */}
{/* <LoadMoreData /> */}

{/* tree-view component/menu UI component/ recursive navigation menu */}
{/* <TreeView menus={menus}/> */}

{/* qr code generator component */}
{/* <QRCodeGenerator /> */}

{/* ligth-dark-mode component */}
{/* <LightDarkMode /> */}

{/* scroll indicator component */}
<ScrollIndicator url={
'https://dummyjson.com/products?limit=100'
} />
    </div>
  );
}

export default App;
