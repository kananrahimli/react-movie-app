import React, { useState } from 'react'
const initial_placeholders=[
    {test:''},{test:''},{test:''},{test:''},{test:''},{test:''},{test:''},{test:''}
  ]
   
export default function Loading() {
  const [placeholders,setPlaceholders]  = useState (initial_placeholders)

  return (
    <div>
       
      <div className="movies px-4 mt-5 pt-4">
      
      
      <div className="row ">
        {
          placeholders.map((movie) => {
            return (
              <div className="col-md-3 px-0 mx-0 mt-5">
                  <div className="trending-movies notSlider" >
                    <div className="trending-movies-item-img " >
                    {<div className="skeleton skeleton-img" ></div>}
                    </div>
                    <div className="trending-movies-item-name">
                      
                    {  <div className="skeleton skeleton-text"></div>} 
                    </div>
                  </div>
              
              </div>
            );
          })}

      </div>
    </div>

    </div>
  )
}
