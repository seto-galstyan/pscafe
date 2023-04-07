import React from 'react'
import { Carousel } from 'react-responsive-carousel';

// Images
import cocktail1 from '../../assets/img/verevi.jpg';
import cocktail2 from '../../assets/img/verevi2.jpg';
import cocktail3 from '../../assets/img/verevi3.jpg';

// style
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css'

const CarouselImgs = () => {
    return (
        <div className='containerCarousel'>
            <h2>The best <span>cafe</span>  in the world!</h2>
            <Carousel
                infiniteLoop={true}
                interval={1500}
                swipeable={true}
                autoPlay={true}
                showThumbs={false}
                dynamicHeight={true}
                emulateTouch={true}
                showArrows={false}
                showStatus={false}
                className='carousel'
            >
                <div>
                    <img src={cocktail1} alt='imagem_Cocktail1' />
                </div>
                <div>
                    <img src={cocktail2} alt='imagem_Cocktail2' />
                </div>
                <div>
                    <img src={cocktail3} alt='imagem_Cocktail3' />
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselImgs