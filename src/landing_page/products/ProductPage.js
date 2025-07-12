import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/console.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
       imageURL="media/images/console.png"
        productName="Console "
        productDescription= "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        
        learnMore=" " />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription= "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
       imageURL="media/images/kiteconnect.png"
        productName="Kite Connect Api"
        productDescription= "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        
        learnMore="" />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity Mobile"
        productDescription= "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
        <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>

      
      <Universe />
    </>
  );
}

export default ProductPage;
