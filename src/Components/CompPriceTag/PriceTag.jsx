import React from 'react';

const PriceTag = ({data}) => {
 
    return (
        <>
        
           
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-lg-5 mx-auto my-lg-auto">

            {data.map((element,index)=>
        {
            return(
                <div key={index}>
                    <div className="col-lg-12 my-lg-5 mx-auto">
                    <div className="card ">
                    <div className="card-body">
                               <p className='text-center text-secondary head'>{element.Title}</p>
                               <h3 className='text-center'>{element.Price}</h3>
                               <hr></hr>
                               <p className={element.check}>{element.user}</p>
                               <p className={element.check}>{element.storage}</p>
                               <p className={element.check}>{element.publicproject}</p>
                               <p className={element.check}>{element.access}</p>
                               <p  className={element.text}>{element.pirvateproject}</p>
                               <p  className={element.text}>{element.support}</p>
                               <p  className={element.text}>{element.subdomain}</p>
                               <p className={element.texts}>{element.report}</p>
                               <button className="btn">BUTTON</button>
                           
                        </div>
                    </div>
                </div>
                </div>
            )
        })}
            </div>
        </>
    );
};

export default PriceTag;