
// import { Paragraph } from "./Homestyles"
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
// import img1 from '../theme/icons/pic1.jpg'
// import Carousel from "react-responsive-carousel/lib/ts/components/Carousel"
// import { Carousel } from '@sefailyasoz/react-carousel'
// import { Carousel } from 'react-carousel-minimal';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const options = {
  rewind: true,
  perPage: 1
};


export const HomePage = () => {
    return (
      <>
        <Splide options={options}>
          <SplideSlide>
            <img src="https://i.imgur.com/NttHNjM.jpeg" alt="test1"/>
          </SplideSlide>
          <SplideSlide>
            <img src="https://i.imgur.com/B7EQUTq.jpg" alt="test2"/>
          </SplideSlide>
        </Splide>
      </>
    )
}
export default HomePage
