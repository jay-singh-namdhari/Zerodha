import React from 'react'

function Team() {
    return ( 
        <div className='container'>
        <div className='row mt-5 mb-5'>
          <h1 className='text-center border-top  '>People </h1>
          
        </div>
        <div className='row p-5 mt-5  text-muted' 
        style={{ fontSize: "1.2rem" }}>
          <div className='col-6 p-5 fs-5 text-center'>
           
           <img src= "media/images/nithinKamath.jpg"  style={{borderRadius:"100%",width:"60%"}}/>
           <p className='fs-3 mt-5'>Nithin Kamath</p>
           <p className=''>Founder & Ceo</p>
           
          </div>
          <div className='col-6 p-5 fs-4'>
            <p>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> 
            /
            <a href="">TradingQnA</a> 
            /
            {" "}
            <a href="">Twitter</a>
          </p>
          
          </div>

          
            


        </div>
       </div>
     );
}


export default Team;