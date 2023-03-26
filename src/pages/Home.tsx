import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import { Paragraph } from "./Homestyles"
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
// import img1 from '../theme/icons/pic1.jpg'
// import Carousel from "react-responsive-carousel/lib/ts/components/Carousel"
// import { Carousel } from '@sefailyasoz/react-carousel'
import {
  useEffect,
  useState,
} from 'react';

import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';

import {
  Header,
  ImageContainer,
  ImageWrapper,
  MainContainer,
} from './Homestyles';

export const HomePage = () => {
const {t} = useTranslation(['translation']);

  const [screenSize, getDimension] = useState({
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

    return (
      <MainContainer>
        <Header> {t('homeTitle')} </Header>
        <Carousel showStatus={false} showArrows={false} showIndicators={true} autoPlay infiniteLoop showThumbs={false}>
          <ImageWrapper >
            <ImageContainer style={{ height: screenSize.dynamicHeight < 800? "35%" : "100%", width: screenSize.dynamicHeight < 800? "100%" : "auto"}} src="https://i.imgur.com/6HR9Hjt.jpg" alt='image1' />
          </ImageWrapper>
          <ImageWrapper>
            <ImageContainer style={{ height: screenSize.dynamicHeight < 800? "35%" : "100%", width: screenSize.dynamicHeight < 800? "100%" : "auto"}} src="https://i.imgur.com/pqViN5b.jpg" alt='image2'/>
          </ImageWrapper>
          <ImageWrapper>
            <ImageContainer style={{ height: screenSize.dynamicHeight < 800? "40%" : "100%", width: screenSize.dynamicHeight < 800? "100%" : "auto"}} src="https://i.imgur.com/B7EQUTq.jpg" alt='image3'/>
          </ImageWrapper>
          <ImageWrapper>
            <ImageContainer style={{ height: screenSize.dynamicHeight < 800? "35%" : "100%", width: screenSize.dynamicHeight < 800? "100%" : "auto"}} src="https://i.imgur.com/NttHNjM.jpeg" alt='image4'/>
          </ImageWrapper>
        </Carousel>
      </MainContainer>
    )
}
export default HomePage
