import React, { useState } from "react"
import "./App.css"
import ContainerComponents from "./Pages/main/index"
import PageFavs from "./Pages/pageFavs/index"
import Shopping from "./Pages/buys/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CooktailContextProvider from "./contexts/CooktailContext"

const App = () => {
  const [arrayFavs, setArrayFavs] = useState([])

  const [arrayShop, setArrayShop] = useState([])

  const [buy, setBuy] = useState(false)

  const [buysCount, setBuysCount] = useState(0)

  const handleFav = (drinkImg, drinkName, qtd) => {
    if (
      arrayFavs
        .map((el) => el.nameDrink)
        .findIndex(
          (drink) => drink.toUpperCase() === drinkName.toUpperCase()
        ) === -1
    ) {
      setArrayFavs([
        ...arrayFavs,
        {
          srcImg: drinkImg,
          nameDrink: drinkName,
          favorited: true,
          qtd,
        },
      ])
    }
  }

  const handleShop = (drinkImg, drinkName, qtd) => {
    if (
      arrayShop
        .map((el) => el.nameDrink)
        .findIndex(
          (drink) => drink.toUpperCase() === drinkName.toUpperCase()
        ) === -1
    ) {
      setArrayShop([
        ...arrayShop,
        {
          srcImg: drinkImg,
          nameDrink: drinkName,
          favorited: true,
          qtd,
        },
      ])
      setBuy(buysCount + 1);
    }
  }

  const removeDrink = (array, setArray, nameDrink) => {
    setBuysCount(buysCount - 1)
    setArray(array.filter((el) => el.nameDrink !== nameDrink))
    arrayShop.length === 1 && (
      setBuy(false)
    )
  }

  return (
    // <>
    //   <form onSubmit={onSubmit}>
    //     <input
    //       type='text'
    //       name='subject'
    //       placeholder='subject'
    //       value={toSend.subject}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type='text'
    //       name='name'
    //       placeholder='name'
    //       value={toSend.name}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type='text'
    //       name='email'
    //       placeholder='email'
    //       value={toSend.email}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type='text'
    //       name='message'
    //       placeholder='Your message'
    //       value={toSend.message}
    //       onChange={handleChange}
    //     />

    //     <input type='submit' />
    //   </form>
    // </>
    <CooktailContextProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContainerComponents
                handleFav={handleFav}
                arrayFavs={arrayFavs}
                setArrayFavs={setArrayFavs}
                removeDrink={removeDrink}
                handleShop={handleShop}
                arrayShop={arrayShop}
                setArrayShop={setArrayShop}
                buy={buy}
                setBuy={setBuy}
                buysCount={buysCount}
                setBuysCount={setBuysCount}
              />
            }
          />

          <Route
            path="/favs"
            exact
            element={
              <PageFavs
                arrayFavs={arrayFavs}
                setArrayFavs={setArrayFavs}
                removeDrink={removeDrink}
              />
            }
          />

          <Route
            path="/shop"
            exact
            element={
              <Shopping
                arrayShop={arrayShop}
                setArrayShop={setArrayShop}
                removeDrink={removeDrink}
                buy={buy}
                setBuy={setBuy}
              />
            }
          />
        </Routes>
      </Router>
    </CooktailContextProvider>
  );
}

export default App;
