 import React from 'react';
 
 function Signup() {
    return ( 
        <div className='container' id='signup'>
            <div className='text-center mt-5'>
                <h1>Open a free demat and trading account online</h1>
                <p className='text-small text-muted mt-3 mb-5'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>

            <div className='row '>
                <div className='col-5 p-5 text-center'>
                    <img src='media/images/signup.png' alt='signup'/>
                </div>
                <div className='col-1'></div>

                <div className='col-6 p-5 mt-5'>
                    <h3>Signup now</h3>
                    <p className='text-small text-muted'>Or track your existing application</p>
                    <form method='POST' action={"/signup"} >    
                        <span>
                            <img src='media/images/indianflag.png' alt='phone' style={{width:"20px"}} />
                            <span style={{border:"2px muted black", width:"10%", height:"20px"}} className='text-small text-muted'>+91</span> <br></br>
                            <input type="text" className="form-control mb-3" placeholder="Enter your mobile number" required />
                        </span>
                        <button className='p-2 btn btn-primary fs-5 mb-5 mt-3' style={{width:"40%"}} type='submit'>Get OTP</button>
                    </form>
                    <p className='text-small text-muted  mb-5'>By proceeding, you agree to the Zerodha terms & privacy policy</p>
                </div>
            </div>
        </div>
     );
 }
 
 export default Signup;