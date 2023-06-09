import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import IconLinks from './IconsLinks'
import { Link } from "react-router-dom"

const MenuHamb = (props) => {
    return (
        <>
            <div
                className='divMenu'
                style={props.openMenu ? { display: 'block' } : { display: 'none' }}
            >

                <ul className='itensMobile'>
                    <li className='liMenu'><a href='#home'>Home</a></li>
                    <li className='liMenu'><a href='#Menu'>Menu</a></li>
                    <li className='liMenu'><a href='#contact'>Contact us</a></li>
                    <li className='liMenu'><a href='#sendmessage'>Send a message</a></li>
                    <li className='liMenu'>
                        <Link to="/favs"
                            className="link"
                        >
                            Favorited
                        </Link>
                    </li>
                    <li className='liMenu'>
                        <Link to="/shop"
                            className="link"
                        >
                            Shopping
                        </Link>
                    </li>
                </ul>
                <IconLinks />
            </div>
            <AiOutlineMenu
                className='iconHamb'
                onClick={() => props.changeMenu()}
                style={props.openMenu ? { display: 'none' } : { display: 'block' }}
            />
            <AiOutlineClose
                className='iconHamb'
                onClick={() => props.changeMenu()}
                style={props.openMenu ? { display: 'block' } : { display: 'none' }}
            />
        </>
    )
}

export default MenuHamb