import React from "react"
import Remove from '../../../components/remove/index'

const FavDrinks = (props) => {
  return (
    <>
      <div className="drinkShop">
        <img src={props.image} alt="image_cocktail" />
        <div className="drinkShop-texts">
          <p>{props.nameDrink}</p>
          <Remove
            removeDrink={props.removeDrink}
            setArray={props.setArrayFavs}
            nameDrink1={props.nameDrink}
            array={props.arrayFavs}

          />
        </div>
      </div>
      <hr />
    </>
  );
}

export default FavDrinks
