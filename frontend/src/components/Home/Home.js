import React from "react";
import om from './../../om.gif';
import './Home.css';

export default function Home(){
    return (
        <div
              style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}
              className = "back"
            >
              <div>
                <img src = {om} alt = "om"
                    style = {{width:"300%"}}    
                />
              </div>
              <div className = "citate">
                  <br></br>
                  <p>
                    All progress takes place outside the comfort zone.
                  </p>
                  <p>
                    The last three or four reps is what makes the muscle grow.
                  </p>
                  <p>
                    Healthy does NOT mean starving yourself EVER. Healthy means eating the right food in the right amount.
                  </p>
                  <p>
                    If you think lifting is dangerous, try being weak. Being weak is dangerous.
                  </p>
                  <p>
                    A champion is someone who gets up when they can’t.
                  </p>
                  <p>
                    Look in the mirror. That’s your competition.
                  </p>
                  <p>
                    Bodybuilding is much like any other sport.<br/> To be successful, you must dedicate yourself 100% to your training, diet and mental approach.
                  </p>
                  <p>
                    The groundwork for all happiness is good health.
                  </p>
                  <p>
                    The human body is the best picture of the human soul.
                  </p>
                  <p>
                    Exercise is king. Nutrition is queen. Put them together and you’ve got a kingdom.
                  </p>
              </div>
            </div>
    )
}