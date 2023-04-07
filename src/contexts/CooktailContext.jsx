import React from "react";
import { createContext, useState } from "react";

export const CooktailContext = createContext({});

const dinksss = [{
    strDrink: "A Gilligan's Island",
    strDrinkThumb: require('./../assets/img/coctail1.jpg').default,
    idDrink: "16943"
},
{
    strDrink: "A True Amaretto Sour",
    strDrinkThumb: require('./../assets/img/coctail2.jpg').default,
    idDrink: "17005"
},
{
    strDrink: "A.D.M. (After Dinner Mint)",
    strDrinkThumb: require('./../assets/img/coctail3.jpg').default,
    idDrink: "14560"
},
{
    strDrink: "A1",
    strDrinkThumb: require('./../assets/img/coctail4.jpg').default,
    idDrink: "17222"
},
{
    strDrink: "Abbey Martini",
    strDrinkThumb: require('./../assets/img/coctail5.jpg').default,
    idDrink: "17223"
}]

const CooktailContextProvider = ({ children }) => {
    const [drinks, setDrinks] = useState(dinksss)

    const handleCoktails = () => {
        setDrinks(dinksss)
    }

    return (
        <CooktailContext.Provider value={{
            handleCoktails,
            drinks
        }}>
            {children}
        </CooktailContext.Provider>
    )
}

export default CooktailContextProvider;
