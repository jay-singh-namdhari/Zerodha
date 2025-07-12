import React from 'react';

function Hero() {
    return (
       <div className='container p-8 mb-5'>
        <div className='row text-center'>
            <img src='media/images/homeHero.png' alt='hero-image' className='mb-5'/>
            
                <h1 className='mt-5'>Invest in Everything</h1>
                <p> online platform to invest in stock  </p>
                <button className='p-3 btn btn-primary mb-5'  style={{width:"30%" ,margin: "0 auto"  }}> SignUp Now </button>

            
        </div>

       </div>
    )
}

export default Hero;