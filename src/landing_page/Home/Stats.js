import react from 'react';

function Stats(){
    return (
       <div className='container p-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <h1 className='fs-5'>Trust with the Confidence</h1>
                <h3 className='fs-2'>Customer-first always</h3>
                <p> That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.</p>
            <h2 className='fs-3'>The Zerodha universe</h2>
            <p>Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.</p>
            <h2 className='fs-3'>Do better with money</h2>
            <p> With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.</p>

            </div>
            <div className='col-6 p-5'>
                <img src='media/images/ecosystem.png' style={{width:"90%"}}/>
                <div className='text-center'>
                      <a href=''className='mx-5' style={{textDecoration:"none"}}>Explore the Products <i class="fa-solid fa-arrow-right"></i></a>
                      <a href=''style={{textDecoration:"none"}}>Kite demo <i class="fa-solid fa-arrow-right"></i></a>

                </div>
              


            </div>

        </div>
       </div>
    )
}

export default Stats;