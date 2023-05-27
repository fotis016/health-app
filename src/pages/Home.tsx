/** @jsxImportSource @emotion/react */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { css } from "@emotion/css";
import { css as CSS } from "@emotion/react";
import moment from "moment";
import {
  A,
  Header,
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
interface NewsItemProps {
  backgroundImage?: string;
  children?: React.ReactNode;
}

const NewsItem: React.FC<NewsItemProps> = ({ backgroundImage, children }) => {
  const newsItemStyles = CSS`
    border-radius: 6px;
    padding: 10px;
    background-color: ${colors.primary[30]};
    width: 740px;
    height: 450px;
    flex-direction: row;
    align-items: center;
    display: flex;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 700px) {
      height: 120px;
      width: 500px;
    }
  `;

  const getRandomQueryParameter = () => {
    return `timestamp=${Date.now()}`;
  };
  const fallbackImage =
    "https://umaine.edu/news/wp-content/uploads/sites/3/2019/09/One-Health-news-feature.jpg";
  const fallbackImageUrl = `${fallbackImage}?${getRandomQueryParameter()}`;

  return (
    <div
      css={newsItemStyles}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : `url(${fallbackImageUrl})`,
      }}
    >
      {children}{" "}
    </div>
  );
};
const newsItem = css`
  border-radius: 6px;
  padding: 10px;
  margin-top: 250px;
  background-color: ${colors.primary[60]};
  width: 800px;
  height: 120px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  display: flex;
  @media (max-width: 700px) {
    height: 70px;
    width: 500px;
    margin-top: 50px;
  }
`;
const newsMainContainer = css`
  height: 120px;
  width: 500px;
  flex-direction: column;
  margin-left: 50px;
  @media (max-width: 700px) {
    height: 80px;
    width: 300px;
  }
`;
const newsTimePostedContainer = css`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 120px;
  flex-direction: column;
  margin-left: 30px;
  @media (max-width: 500px) {
    display: none;
  }
`;

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
            <NewsItem backgroundImage={newsData.urlToImage}>
              <div className={newsItem}>
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
                    style={{
                      fontSize: 14,
                      textAlign: "center",
                    }}
                  >
                    {newsData.source.name}
                  </Paragraph>
                  <Paragraph
                    style={{
                      fontSize: 14,
                      textAlign: "center",
                      marginTop: 60,
                    }}
                  >
                    {moment(newsData.publishedAt).utc().format("DD-MM-YYYY")}
                  </Paragraph>
                </div>
              </div>
            </NewsItem>
          ))}
        </MainNewsContainer>
      </Scrollbar>
    </MainContainer>
  );
};
export default HomePage;
