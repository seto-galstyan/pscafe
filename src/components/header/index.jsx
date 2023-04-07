import React, { useState } from "react"
import Icone from "../../assets/img/logo.png"
import MenuHamb from "./components/MenuHamb"
import IconLinks from "./components/IconsLinks"

// style
import "./style.css"

const Header = (props) => {

  const [openMenu, setOpenMenu] = useState(false)

  const changeMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <header>
        <img src={Icone} alt="iconHeader" />
        <ul>
          <li className='liMenu'><a href='#home'>Home</a></li>
          <li className='liMenu'><a href='#Menu'>Menu</a></li>
          <li className='liMenu'><a href='#contact'>Contact us</a></li>
          <li className='liMenu'><a href='#sendmessage'>Send a message</a></li>
        </ul>
        <IconLinks
          arrayFavs={props.arrayFavs}
          setArrayFavs={props.setArrayFavs}
          removeDrink={props.removeDrink}
          arrayShop={props.arrayShop}
          setArrayShop={props.setArrayShop}
          buysCount={props.buysCount}
          setBuysCount={props.setBuysCount}
        />
        <MenuHamb
          className='componentMenu'
          openMenu={openMenu}
          changeMenu={changeMenu}
          arrayFavs={props.arrayFavs}
          setArrayFavs={props.setArrayFavs}
          removeDrink={props.removeDrink}
          arrayShop={props.arrayShop}
          setArrayShop={props.setArrayShop}
        />
      </header >
    </>
  )
}

export default Header
