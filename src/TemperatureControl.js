import React, {useState} from 'react';
import './TemperatureControl.css';

function TemperatureControl(){
    const [count, setCount] = useState(14);
    const [temperature, setTemperature] = useState("cold"); 

    const increase = () =>{
        const newTemperature = count + 1
        if(newTemperature >= 19){
            setTemperature('hot');
        }
        setCount(newTemperature);
    };

    const decrease = () =>{
        const newTemperature = count - 1
        if(newTemperature < 19){
            setTemperature('cold  ');
        }
        setCount(newTemperature);
    };

    return(
        <div>
            <div className='container'>
                <div className={`value ${temperature}`}><h2>{count}°C</h2></div>
                    <div className='driver'>
                        <div className='temperature-plus'>
                            <button className='right' onClick={() => decrease()} >
                                - 
                            </button>
                        </div>
                        <div className='temperature-minus'>
                            <button className='left' onClick={() => increase()} > 
                                +
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default TemperatureControl;