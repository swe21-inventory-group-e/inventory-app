import React, { useEffect, useState } from "react";

// Prepend the API URL to any fetch calls.
import apiURL from "../api";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch the items
  }, []);
  
  return (
    <>
      <div class ='websitebanner'>
      <h1>Marketplace</h1>
      <div className="buttons">
      <button>Mens</button>
      <button>electronics</button>
      </div>
      </div>
      <div className="item">
        <div className="window-header">
            <h2>Mens Casual Slim Fit</h2>
            <div className="X-button"> _x_</div>
            </div>
            <div className ='description_and_image'>
            <img src='https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' alt='mens clothing'></img>
            <p>The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p>
            
            
            </div>
            <div className='bottom-row'>
            <button className='buy-button'>Buy Now</button>
            <div className="pricetag">Price: $15.99</div>
            
          </div></div>
          <div className='bottom-of-site'>

            <button>Add page</button>
            <button>Remove page</button>
            <button>edit</button>
            
             </div>
    </>
  );
}
export default App;
