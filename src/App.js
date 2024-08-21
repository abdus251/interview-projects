import './App.css';
import LoadMoreData from './components/5-load-more-data';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
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
<TreeView menus={menus}/>

    </div>
  );
}

export default App;
