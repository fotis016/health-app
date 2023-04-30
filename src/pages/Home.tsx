import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { Paragraph } from "./Homestyles"
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
// import img1 from '../theme/icons/pic1.jpg'
// import Carousel from "react-responsive-carousel/lib/ts/components/Carousel"
// import { Carousel } from '@sefailyasoz/react-carousel'
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import { css } from "@emotion/css";
import { Img } from "react-image";
import moment from "moment";
import {
  A,
  Header,
  ImageContainer,
  ImageWrapper,
  MainContainer,
  MainNewsContainer,
  Paragraph,
} from "./Homestyles";
import { Scrollbar } from "react-scrollbars-custom";
import colors from "../theme";
import axios from "axios";
import i18n from "../i18n/i18n";

interface NewsData {
  title: string;
  description: string;
  urlToImage: string;
  source: {
    name: string;
  };
  publishedAt: string;
  url: string;
}

const newsItem = css`
  border-radius: 6px;
  padding: 10px;
  background-color: ${colors.primary[30]};
  width: 800px;
  height: 120px;
  flex-direction: row;
  align-items: center;
  display: flex;
  @media (max-width: 700px) {
    height: 120px;
    width: 500px;
  }
`;
const newsMainContainer = css`
  height: 120px;
  width: 500px;
  flex-direction: column;
  margin-left: 50px;
  @media (max-width: 700px) {
    height: 120px;
    width: 400px;
  }
`;
const newsImageContainer = css`
  flex-direction: column;
  width: 100px;
  height: 120px;
  padding: 15px;
  margin-top: 10px;
  display: flex;
  @media (max-width: 700px) {
    display: none;
  }
`;

const newsTimePostedContainer = css`
  flex-direction: column;
  width: 100px;
  height: 120px;
  flex-direction: column;
  margin-left: 30px;
  @media (max-width: 500px) {
    display: none;
  }
`;
const placeHolderImage =
  "https://umaine.edu/news/wp-content/uploads/sites/3/2019/09/One-Health-news-feature.jpg";
export const HomePage = () => {
  const { t } = useTranslation(["translation"]);
  const [newsData, setNewsData] = useState([]);
  const [screenSize, getDimension] = useState({
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicHeight: window.innerHeight,
    });
  };
  function truncateString(str: string) {
    if (str.length > 140) {
      return str.slice(0, 140) + "...";
    } else {
      return str;
    }
  }
  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const getNews = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${t(
        "newsApiCountry"
      )}&category=health&apiKey=de514915ff0a4f4da501d73a77583b99`
    );
    setNewsData(response.data.articles);
  };

  useEffect(() => {
    getNews();
  }, [i18n.language]);
  return (
    <MainContainer>
      <Header> {t("homeTitle")} </Header>
      <Scrollbar>
        <MainNewsContainer>
          {newsData.map((newsData: NewsData) => (
            <div className={newsItem}>
              <div className={newsImageContainer}>
                <Img
                  style={{ float: "left" }}
                  width={100}
                  height={75}
                  src={[newsData.urlToImage, placeHolderImage]}
                  alt="news"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    height: 20,
                    width: 90,
                  }}
                >
                  <Paragraph
                    style={{
                      fontSize: 14,
                      textAlign: "center",
                    }}
                  >
                    {newsData.source.name}
                  </Paragraph>
                </div>
              </div>
              <div className={newsMainContainer}>
                <A
                  href={newsData.url}
                  target="_blank"
                  style={{
                    fontSize: 20,
                    textAlign: "start",
                  }}
                >
                  {newsData.title}
                </A>
                {newsData.description && (
                  <Paragraph style={{ fontSize: 14, textAlign: "start" }}>
                    {truncateString(newsData.description)}
                  </Paragraph>
                )}
              </div>
              <div className={newsTimePostedContainer}>
                <Paragraph
                  style={{ fontSize: 14, textAlign: "center", marginTop: 100 }}
                >
                  {moment(newsData.publishedAt).utc().format("DD-MM-YYYY")}
                </Paragraph>
              </div>
            </div>
          ))}
        </MainNewsContainer>
      </Scrollbar>
    </MainContainer>
  );
};
export default HomePage;
