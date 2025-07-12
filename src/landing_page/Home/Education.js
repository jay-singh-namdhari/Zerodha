import React from 'react';

function Education() {

    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' style={{ width: "80%" }} />

                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-2'>Free and open market education</h1>
                    <p className='p-2'>
                          Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
                    </p>
                    <a href=''>Verify <i class="fa-solid fa-arrow-right"></i></a>

                <p className='mt-5'>  TradingQ&A, the most active trading and investment community in
            India for all your market related queries.</p>
            <a href=''>TradingQ/A <i class="fa-solid fa-arrow-right"></i></a>


                </div>
            </div>
        </div>
    )
}

export default Education;