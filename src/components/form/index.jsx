import React, { useState } from 'react'
import { send } from 'emailjs-com';

// style
import './style.css'

const Form = () => {
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: '',
        subject: 'PS Cafe',
    });
    const [sucess, setSucess] = useState({
        sendMessage: false,
        status: '',
        text: ""
    })

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        send("service_7thx2mb", "ps_cafe", toSend,
            "l0Gr4brnRBv2NCYoF"
        )
            .then((response) => {
                setSucess({
                    sendMessage: true,
                    status: response.status,
                    text: response.text
                })
                setToSend({
                    name: '',
                    email: '',
                    message: '',
                    subject: '',
                })
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            })
    };
    return (
        <form className='containerForm' onSubmit={onSubmit} >
            <input type="hidden" name="accessKey" value="7caa4f10-d692-492c-9aa8-3845a46aa7f8" />
            <input type="hidden" name="redirectTo" value={window.location.toString()} />
            <input type="hidden" name="replyTo" value="@" />

            <div className='inputs'>
                <input type="text" name="name" placeholder='name' required value={toSend.name} onChange={handleChange} />
                <input type="email" name="email" placeholder='E-mail' required value={toSend.email} onChange={handleChange} />
            </div>

            <textarea name="message" cols="30" rows="10" placeholder='Send a message' required value={toSend.message} onChange={handleChange}></textarea>
            {sucess.sendMessage && <p style={{ color: 'green', textAlign: 'center', marginTop: '15px' }}>Success send email message</p>}
            <button type="submit" value="Submit"> Send </button>
        </form>

    )
}

export default Form