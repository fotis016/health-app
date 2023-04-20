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
  Paragraph,
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
        <div style={{backgroundColor: 'white', width: 800, height: 120, flexDirection: 'row', alignItems: 'center', display: 'flex'}}>
          <div style={{flexDirection: 'column', width: 100, height: 120, padding: 10, marginTop: 10}}>
            <img style={{ float: 'left'}} width={100} height={75} src='https://media.cnn.com/api/v1/images/stellar/prod/230420101423-01-worms-munchies-study.jpg?c=16x9&q=w_800,c_fill' alt='news'/>
            <div style={{height: 20, width: 90}}>
              <Paragraph style={{textAlign: 'center'}}>New York Post</Paragraph>
            </div>
          </div>
          <div style={{height: 160, width: 500, flexDirection: 'column', marginLeft: 50}}>
            <Paragraph style={{fontSize: 20, textAlign: 'start'}}>Worms get the munchies, too, study reveals - CNN</Paragraph>
            <Paragraph style={{fontSize: 14, textAlign: 'start'}}>Researchers found worms, like humans, engage in hedonic feeding — a phenomenon more commonly known as the munchies.</Paragraph>
          </div>
          <div style={{height: 120, width: 100, flexDirection: 'column', marginLeft: 30}}>
            <Paragraph style={{fontSize: 14, textAlign: 'center', marginTop: 100}}>2023-04-20</Paragraph>
          </div>
        </div>
        {/* <Carousel showStatus={false} showArrows={false} showIndicators={true} autoPlay infiniteLoop showThumbs={false}>
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
        </Carousel> */}
      </MainContainer>
    )
}
export default HomePage
