import React from 'react';

function RightSection({ imageURL,
  productName,
  productDescription,
  learnMore,}) 
  {
    return ( 
         <div className="container">
      <div className="row p-2 ">
       
        <div className="col-6 mt-5 p-5">
          <h1 >{productName}</h1>
          <p>{productDescription}</p>
          <div>

          <a href={learnMore}> learnMore</a>
        
          </div>
        </div>
         <div className="col-6  " >
          <img src={imageURL} />
        </div>
      </div>
    </div>
     );
}

export default RightSection;