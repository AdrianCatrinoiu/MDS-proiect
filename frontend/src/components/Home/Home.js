import React from "react";
import om from './../../om.gif';

export default function Home(){
    return (
        <div
              style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}
            >
              <div>
                <img src = {om} alt = "om"
                    style = {{width:"300%"}}    
                />
              </div>
              <div style = {{fontSize : "150%"}}>
                  <br></br>
                  <p>
                    All progress takes place outside the comfort zone.
                  </p>
                  <p>
                    The last three or four reps is what makes the muscle grow.
                  </p>
                  <p>
                    Healthy does NOT mean starving yourself EVER. Healthy means eating the right food in the right amount
                  </p>
              </div>
            </div>
    )
}