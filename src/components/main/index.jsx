import React, { useEffect, useContext } from 'react'
import Drinks from '../drinks/index'
import { CooktailContext } from '../../contexts/CooktailContext'

// style
import './style.css'

const Main = (props) => {
    const {
        handleCoktails,
        drinks
    } = useContext(CooktailContext)

    useEffect(() => {
        handleCoktails()
    }, [handleCoktails])

    return (
        <main id='Menu'>
            <h3>See our <span>menu</span></h3>
            <Drinks
                drinks={drinks}
                handleFav={props.handleFav}
                arrayFavs={props.arrayFavs}
                setArrayFavs={props.setArrayFavs}
                buy={props.buy}
                setBuy={props.setBuy}
                buysCount={props.buysCount}
                setBuysCount={props.setBuysCount}

                handleShop={props.handleShop}
                arrayShop={props.arrayShop}
                setArrayShop={props.setArrayShop}
            />
        </main>
    )
}

export default Main