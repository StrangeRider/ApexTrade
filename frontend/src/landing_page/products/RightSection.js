import React from 'react';

function RightSection({imageUrl, ProductName, ProductDescription,  learnMore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row '>
                
                <div className='col-6 p-5 mt-5'>
                    <div className='mt-3 p-2'>
                        <h1 className='mt-5'>{ProductName}</h1>
                        <p>{ProductDescription}</p>

                        <div>
                            <a href={learnMore} style={{textDecoration:"none",}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    
                </div>

                <div className='col-6'>
                    <img src={imageUrl} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;