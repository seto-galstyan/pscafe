import React from 'react'

const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337.6090055893699!2d9.244417421943169!3d51.95415630377503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47baf462f5e835b7%3A0x3c51139446709510!2zSMO2eHRlcnN0cmHDn2UgNCwgMzI2NzYgTMO8Z2RlLCBHZXJtYW55!5e0!3m2!1sen!2sus!4v1680851707818!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

const iframee = () => {
    return {
        __html: iframe
    }
}

const Mapp = () => {
    return <div style={{ width: '100%' }} dangerouslySetInnerHTML={iframee()} />
}

export default Mapp