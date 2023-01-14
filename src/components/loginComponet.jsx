import React from 'react'
import logo from '../assests/loginlogo.png'
import './css/loginComponent.css'
// import logo from 
function LoginComponent() {
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
                    <input type='text' placeholder='Company'/>
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
                        <button className='CsizeButton'>1-20</button>
                        <button className='CsizeButton'>21-50</button>
                        <button className='CsizeButton'>51-200</button>
                        <button className='CsizeButton'>201-500</button>
                        <button className='CsizeButton'>500+</button>
                    </div>
                    </div>
                    <button id='submitBtn'>Get Started</button>
                </form>
            </div>
        </div>
    )
}

export default LoginComponent
