import React, { useState,useEffect } from "react";
import "./IMC.css";
import imc from "./IMC.png";
import beHealthy from "./BeHealty.bmp";

const AfisareFrumoasa = (props) => {
    return (
        <div className = "afisareFrumoasa">
            <div><p>Your IMC:</p><br/></div>
            <div className = "deAccentuat">
                <div> </div>
                <div className = "interiorImportant">{props.val}</div>
                <div> </div>
            </div>
            <div> <br/></div>
        </div>
    )
}

const IMC = () => {

    const [masa,setMasa] = useState(0);
    const [inaltime,setInaltime] = useState(0); 
    const [valoare,setValoare] = useState(0);
    const [afisare,setAfisare] = useState(false);

    function showIMC(){
        if (inaltime != null && masa != null){
                let h = inaltime / 100;
                console.log(h,h*h,masa);
                if (h > 0 && masa > 0){
                    setValoare(masa / (h * h));
                    setAfisare(true);
                }
            }
        }
    

    function modifyStare(event){
        const val = event.target.value;
        const name = event.target.name;
        console.log(val);
        if (Number.parseInt(val)){
            const value = Number.parseInt(val);
            if (name == "m")
                setMasa(value);
            if (name == "h")
                setInaltime(value);
        }
    
    }

    function resetData(){
        setInaltime(0);
        setMasa(0);
        setValoare(0);
    }

    return (
        <div className = "deCentratChenarele">

            <div></div>

            <div className = "ComponentaDominanta">
                <br/><br/>
                <form class = "afis">
                    <label for ="m"> Weight in kg:</label><br/>
                    <input type = "text" name ="m" id = "mIMC"
                    onChange = {modifyStare}
                    /><br/>
                    <label for ="h"> Height in cm:</label><br/>
                    <input type = "text" name ="h" id = "hIMC"
                        onChange = {modifyStare}
                    /><br/>
                    <br/>
                    <button onClick = {resetData}>reset</button>
                </form>
                <br/>
                <div className = "afis" onPress = {modifyStare}>
                    {
                        afisare ?
                        <AfisareFrumoasa  val = {parseFloat(valoare).toFixed(2)}/>
                        : 
                        <AfisareFrumoasa val = "No values to do imc."/>
                    }

                    <div id = "SpecialEdit">
                        <div></div>

                        <div style = {{width : "30%", borderRadius : "20%", background : "white", border: "1px solid black"}}>
                            <button onClick = {showIMC}>
                                Compute Imc
                            </button>
                        </div>

                        <div></div>
                    </div>
                    <div className = "SaAfisamFrumosIMC">
                        <div style = {{ width : "35%"}}>
                            <br/>
                            <img src = {beHealthy} alt = "Be Healthy"
                                style = {{borderRadius : "100%"}}
                            />
                            <br/>
                        </div>
                        <div>

                            <br/>
                            <img src = {imc} alt = "Image IMC"/>
                            <br/>

                        </div>
                        <div style = {{ width : "35%"}}>
                            <br/>
                            <img src = {beHealthy} alt = "Be Healthy"
                                style = {{borderRadius : "100%"}}
                            />
                            <br/>
                        </div>
                    </div>
                </div>
               
            </div>

            <div></div>

        </div>
    )

};

export default IMC;