import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='text-center mt-5 border-bottom'>
                <h1>Pricing</h1>
                <p className='text-small text-muted mt-3 mb-5'>Free equity investments and flat ₹20 traday and F&O trades</p>

            </div>
            <div className='row'>
                <div className='col-4 p-5 text-center'>
                    <img src='media/images/pricingEquity.svg' />
                    <h3>Free equity delivery</h3>
                    <p className='text-small text-muted mt-3'>All equity delivery investments(NSE, BSE) <br></br>are absolutely free - ₹0 brokerage</p>
                </div>

                <div className='col-4 p-5 text-center'>
                    <img src='media/images/intradayTrades.svg' />
                    <h3>Free equity delivery</h3>
                    <p className='text-small text-muted'>Flat Rs. 20 or 0.03% (whichever is lower)<br></br> per executed order on intraday trades <br></br> across equity, currency, and commodity<br></br>trades.</p>
                </div>

                <div className='col-4 p-5 text-center'>
                    <img src='media/images/pricingMF.SVG' />
                    <h3>Free direct MF</h3>
                    <p className='text-small text-muted text-center mt-3'>All direct mutual fund investments are absolutely free - ₹0 commissions & Dp <br></br> charges.</p>
                </div>

            </div>

        </div>
     );
}

export default Hero;