import React from "react";

function LeftSection(
 { imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore}
) {
  return (
    <div className="container">
      <div className="row p-2 ">
        <div className="col-6  " >
          <img src={imageURL} />
        </div>
        <div className="col-6 mt-5 p-5">
          <h1 >{productName}</h1>
          <p>{productDescription}</p>
          <a href={tryDemo}>Try Demo</a>
          <a href={learnMore} style={{marginLeft : "50px"}}> learnMore</a>
         <div className="mt-5">
             <a href={googlePlay}>
            {" "}
            <img src="media/images/googlePlayBadge.svg" />
          </a>
          <a href={appStore}>
            {" "}
            <img src="media/images/appStoreBadge.svg" />
          </a>
         </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
