import React from 'react'
import videoFundo from '../../assets/video/fundo3.mp4'
import Typical from 'react-typical'

// style
import './style.css'

const Title = () => {
    return (
        <div className='containerVideo' id='home' >
            <video autoPlay loop muted controls=''>
                <source src={videoFundo} type="video/mp4" />
            </video>
            <Typical
                steps={['PS CAFE', 3000, '', 1000]}
                loop={Infinity}
                wrapper="h1"
                className='tittle-Tittle'
            />
        </div>
    )
}

export default Title