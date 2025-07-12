import React from "react";

function Universe() {
  return (
    <div className="container text-center">
      <div className="row">
        <h1>TheZerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-5">
            <img className="Universe-icons" src="media/images/ZerodhaFundhouse.png" alt="Zerodha Fundhouse" />
            <p className="text-small text-muted Universe-text">Thermatic investment platform</p>
            <div className="col-4 p-5">
            <img className="Universe-icons" src="media/images/goldenpiLogo.png" alt="Goldenpilogo" />
            <p className="text-small text-muted Universe-text">Thermatic investment platform</p>
            </div>
        </div>
        <div className="col-4 p-5">
            <img className="Universe-icons" src="media/images/dittoLogo.png" alt="ZdittoLogo" />
            <p className="text-small text-muted Universe-text">Thermatic investment platform</p>
            <div className="col-4 p-5">
            <img className="Universe-icons" src="media/images/sensibullLogo.svg" alt="sesibullLogo" />
            <p className="text-small text-muted Universe-text">Thermatic investment platform</p>
            </div>
        </div>
        <div className="col-4 p-5">
            <img className="Universe-icons" src="media/images/ZerodhaFundhouse.png" alt="Zerodha Fundhouse" />
            <p className="text-small text-muted Universe-text">Thermatic investment platform</p>
            <div className="col-4 p-5">
            <img className="Universe-icons" src="media/images/goldenpiLogo.png" alt="Goldenpilogo" />
            <p className="text-small text-muted Universe-text">Thermatic investment platform</p>
            </div>
        </div>
        <div >
          <button className="btn btn-primary">Sign Up Now</button>
        </div>
        
      </div>
    </div>
  );
}

export default Universe;
