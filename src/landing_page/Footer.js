
import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor: "rgb(240,240,240)"}}>
      <div className='container border-top mt-5 ' >
        <div className='row mt-5 '>
           <div className='col'>
           <img src="media/images/logo.svg" style={{width:"50%"}} />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
            </div> 
            <div className='col'>
                <p>Company</p>
                <a href='' style={{textDecoration:"none",color:"gray"}}>About</a><br></br>
                <a href=''style={{textDecoration:"none",color:"gray"}}>Product</a><br></br>
                <a href=''style={{textDecoration:"none",color:"gray"}}>Pricing</a><br></br>
                <a href=''style={{textDecoration:"none",color:"gray"}}>Referral programme</a><br></br>
                <a href=''style={{textDecoration:"none",color:"gray"}}>Careers</a><br></br>
                <a href=''style={{textDecoration:"none",color:"gray"}}>Press & media</a><br></br>
                <a href=''style={{textDecoration:"none",color:"gray"}}>Zerodha cares (CSR)</a><br></br>
            </div>
            <div className='col'>
                <p>Support</p>
                <a href=''style={{textDecoration:"none",color:"gray"}}>Contact</a><br></br>
                <a href=''style={{textDecoration:"none",color:"gray"}}>Support portal</a><br></br>
                <a href=''style={{textDecoration:"none",color:"gray"}}>Z-connect blog</a><br></br>
                <a href=''style={{textDecoration:"none",color:"gray"}}> List of charges</a><br></br>
                <a href=''style={{textDecoration:"none",color:"gray"}}>Download & resources</a><br></br>
              
            </div>
            <div className='col'>
                <p>Account</p>
                 <a href=''style={{textDecoration:"none",color:"gray"}}>Open an account</a><br></br>
                <a href=''style={{textDecoration:"none",color:"gray"}}> Fund Transfer</a><br></br>
                <a href=''style={{textDecoration:"none",color:"gray"}}>60 day challenge</a><br></br>
            </div>
        </div>
        <div className='mt-5  text-muted' style={{fontSize:"14px"}}>
        <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
        </p>
         <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
      </footer>
     );
}


export default Footer;