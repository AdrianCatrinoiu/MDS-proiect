import React, { useState,useEffect } from "react";
import "./IMC.css"

const AfisareFrumoasa = (props) => {
    return (
        <div className = "afisareFrumoasa">
            <div><p>IMC tau este:</p><br/></div>
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

    function showIMC(){
        if (inaltime != null && masa != null){
                let h = inaltime / 100;
                console.log(h,h*h,masa);
                if (h > 0 && masa > 0)
                    setValoare(masa / (h * h));
            }
        }
    

    function modifyStare(event){
        const val = event.target.value;
        const name = event.target.name;
        if (Number.parseInt(val)){
            const value = Number.parseInt(val);
            if (name == "m")
                setMasa(value);
            if (name == "h")
                setInaltime(value);
            showIMC();
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
                    <label for ="m"> Masa in kg:</label><br/>
                    <input type = "text" name ="m" id = "mIMC"
                    onChange = {modifyStare}
                    /><br/>
                    <label for ="h"> Inaltime in cm:</label><br/>
                    <input type = "text" name ="h" id = "hIMC"
                        onChange = {modifyStare}
                    /><br/>
                    <br/>
                    <button onClick = {resetData}>reset</button>
                </form>
                <br/>
                <div className = "afis" onPress = {modifyStare}>
                    {
                        <AfisareFrumoasa  val = {parseFloat(valoare).toFixed(2)}/>
                    }
                </div>
            </div>

            <div></div>

        </div>
    )

};

export default IMC;