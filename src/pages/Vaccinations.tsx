import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import { css } from "@emotion/css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import $ from "jquery";
import moment from "moment";
import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";

import {
  Button,
  ButtonContainer,
  DatePickersContainer,
  GraphContainer,
  H2,
  H2Alt,
  MainContainer,
  Paragraph,
  ParagraphContainer,
  SecondaryContainer,
} from "./VaccinationsStyles";
import colors from "../theme";

const datePicker = css`
  height: 25px;
  width: 150px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  color: ${colors.neutral.w};
  background-color: ${colors.primary[30]};
  border-width: 0px;
  border-color: ${colors.neutral.w};
`;

export const Vaccinations = () => {
  const { t } = useTranslation(["translation"]);

  const [xAxis, setXAxis] = useState<string[]>([]);
  const [yAxis, setYAxis] = useState<number[]>([]);
  const vaccinationsPerDay: number[] = [];
  const datesArray: string[] = [];
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const data = {
    date_from: startDate?.toISOString().split("T")[0],
    date_to: endDate?.toISOString().split("T")[0],
  };
  var sortedData: any[];

  const options = {
    xAxis: {
      categories: xAxis,
    },
    title: {
      text: t("statisticsTableTitle"),
    },
    series: [
      {
        name: t("statisticsTableLegend"),
        data: yAxis,
      },
    ],
  };

  const handleClick = () => {
    setXAxis([]);
    setYAxis([]);
    $.when(
      $.ajax({
        url: "https://data.gov.gr/api/v1/query/mdg_emvolio_weekly",
        data: data,
        dataType: "json",
        headers: {
          Authorization: "Token 7ed90049128c5ce939b1077baac37612e5e1dd63",
        },
        success: function (data) {
          sortedData = data.sort((a: any, b: any) => {
            return (
              new Date(a.weekreferencedate).getTime() -
              new Date(b.weekreferencedate).getTime()
            );
          });
          let i = 0;
          let flag = false;
          sortedData.map((item: any) => {
            if (item.weekreferencedate !== datesArray[datesArray.length - 1]) {
              datesArray.push(item.weekreferencedate);
              if (flag === false) {
                flag = true;
                vaccinationsPerDay.push(item.totalvaccinations);
              } else {
                i++;
                vaccinationsPerDay.push(item.totalvaccinations);
              }
            } else {
              vaccinationsPerDay[i] =
                vaccinationsPerDay[i] + item.totalvaccinations;
            }
          });
          datesArray.map((date) => {
            setXAxis((old) => [
              ...old,
              moment(date).utc().format("DD-MM-YYYY"),
            ]);
          });
          vaccinationsPerDay.map((value) => {
            setYAxis((old) => [...old, value]);
          });
        },
      })
    );
  };

  return (
    <>
      <ParagraphContainer>
        <H2Alt>{t("statisticsHeader")}</H2Alt>
        <H2>{t("statisticsHeader")}</H2>
      </ParagraphContainer>
      <GraphContainer>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </GraphContainer>
      <MainContainer>
        <DatePickersContainer>
          <SecondaryContainer data-testid="test">
            <Paragraph style={{ paddingRight: 10 }}>
              {t("statisticsStartDate")}
            </Paragraph>
            <DatePicker
              className={datePicker}
              dateFormat={"yyyy-MM-dd"}
              maxDate={endDate}
              selected={startDate}
              filterDate={(d) => {
                return new Date() > d;
              }}
              onChange={(date) => setStartDate(date)}
            />
          </SecondaryContainer>
          <SecondaryContainer data-testid="test">
            <Paragraph style={{ paddingRight: 10 }}>
              {t("statisticsEndDate")}
            </Paragraph>
            <DatePicker
              className={datePicker}
              dateFormat={"yyyy-MM-dd"}
              minDate={startDate}
              selected={endDate}
              filterDate={(d) => {
                return new Date() > d;
              }}
              onChange={(date) => setEndDate(date)}
            />
          </SecondaryContainer>
        </DatePickersContainer>
        <ButtonContainer>
          <Button onClick={handleClick} style={{ paddingTop: 5 }}>
            Ok
          </Button>
        </ButtonContainer>
      </MainContainer>
    </>
  );
};

export default Vaccinations;
