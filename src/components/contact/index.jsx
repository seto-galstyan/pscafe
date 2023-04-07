import React from 'react'
import Form from '../form/index'
import Mapp from '../Map/index'

// style
import './style.css'

const Contact = () => {
    return (
        <article id='contact' >
            <h3>Contact <span>Us</span></h3>

            <p className='pContact'>Localization</p>
            <p className='pContact'> <a href="Tel: 49 5281 1637129">Phone number +49 5281 1637129 </a> </p>

            <div className='containerM'>
                <Mapp />
            </div>
           
            <p className='pContact' id='sendmessage'>Send a message</p>
            <Form />
        </article >
    )
}

export default Contact