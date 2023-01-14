import React, { useState } from 'react'
import logo from '../assests/loginlogo.png'
import './css/loginComponent.css'
// import logo from 
function LoginComponent() {
    const [focused,setFocused] = useState(0)
    const changeColor=(val)=>{
        // e.preventDefault()
        document.getElementById(val).style.backgroundColor = '#3766E8';
        document.getElementById(val).style.color = 'white';

        for(let i=1;i<6;i++){
            if(i!==parseInt(val)){
            document.getElementById(i).style.backgroundColor = 'rgb(128, 128, 128,0.2)';
            document.getElementById(i).style.color = 'rgb(0, 0, 0,0.5)';
            }
        }
    }
    return (
        <div className='loginContainer'>
            {/* <div> */}
            <div id='imgDiv'>
                <img src={logo} id='loginImg'/>
            </div>
            <h1>Its Delighted to have you onboard</h1>
            <p>Help us know you better.<br/>(This is how we optimize Wobot as per your business needs)</p>
            {/* </div> */}
            <div>
                <form id='form'>
                    <div className='inputContainer'>
                    <label for='Cname'>Company Name</label>
                    <input type='text' placeholder='e.g. Example Inc'/>
                    </div>
                    <div className='inputContainer'>
                    <label for='Industry'>Industry</label>
                    <select name='Industry' id='industrySelect'>
                        <option value='Industry1'>Industry1</option>
                        <option value='Industry2'>Industry2</option>
                        <option value='Industry3'>Industry3</option>
                    </select>
                    </div>
                    <div className='inputContainer'>
                    <label for='Csize'>Company Size</label>
                    <div id='CsizeContainer'>
                        <button className='CsizeButton' id='1' type='button' onClick={()=>changeColor('1')}>1-20</button>
                        <button className='CsizeButton' id='2' type='button' onClick={()=>changeColor('2')}>21-50</button>
                        <button className='CsizeButton' id='3' type='button' onClick={()=>changeColor('3')}>51-200</button>
                        <button className='CsizeButton' id='4' type='button' onClick={()=>changeColor('4')}>201-500</button>
                        <button className='CsizeButton' id='5' type='button' onClick={()=>changeColor('5')}>500+</button>
                    </div>
                    </div>
                    <button id='submitBtn'>Get Started</button>
                </form>
            </div>
        </div>
    )
}

export default LoginComponent
