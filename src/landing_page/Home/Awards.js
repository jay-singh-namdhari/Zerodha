import React from 'react';

function Awards (){
    return (
       <div className='container  mt-5 '>
       <div className='row'>
        <div className='col-6 p-4'>
            <img src='media/images/largestBroker.svg'/>
        </div>

        <div className='col-6 p-5 mt-3'>
            <h1> Largest stock broker in India</h1>
            <p className='mb-5'> 2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and invest ing in: </p>
           <div className='row'>
            <div className='col-6'>
                <ul>
                    <li><p>Equity</p></li>
                    <li><p>Futures & Options</p></li>
                    <li><p>Currency Derivatives</p>
                    </li>
                </ul>
            </div>
            <div className='col-6'>
                <ul>
                    <li><p>Commodities</p></li>
                    <li><p>Mutual Funds</p></li>
                    <li><p>Direct Equity</p></li>
                </ul>
            </div>
           </div>
           <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
        </div>

        
       </div>

        
       </div>

    );
}

export default Awards;