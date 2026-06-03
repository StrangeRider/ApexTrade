import React from 'react';

function LeftSection({imageUrl, ProductName, ProductDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 '>
                    <img src={imageUrl} />
                </div>

                <div className='col-6 p-5 '>
                    <h1>{ProductName}</h1>
                    <p>{ProductDescription}</p>

                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{textDecoration:"none",marginLeft:"50px"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    
                    <div className='mt-3'>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
                        <a href={appStore}> <img src='media/images/appStoreBadge.svg' /></a>
                    </div>
                    

                </div>
            </div>
        </div>
     );
}

export default LeftSection;