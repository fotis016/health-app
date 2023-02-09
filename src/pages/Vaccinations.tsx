import 'react-datepicker/dist/react-datepicker.css';

import {
  useState,
} from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import $ from 'jquery';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import {
  Button,
  ButtonContainer,
  MainContainer,
  Paragraph,
  ParagraphContainer,
  SecondaryContainer,
  GraphContainer
} from './VaccinationsStyles';

export const Vaccinations = () => {


    const [xAxis, setXAxis] = useState<string[]>([])
    const [yAxis, setYAxis] = useState<number[]>([])
    const vaccinationsPerDay: number[] = []
    const datesArray : string[] = []
    const [startDate,
        setStartDate] = useState < Date | null > (new Date())
    const [endDate,
        setEndDate] = useState < Date | null > (new Date())
    const data = { date_from: startDate?.toISOString().split('T')[0],
    date_to: endDate?.toISOString().split('T')[0]}
    var sortedData: any[]


    const options = {
      xAxis: {
        categories: xAxis
      },
      title: {
        text: 'Vaccinations chart'
      },
      series: [{
        name: 'Total Vaccinations',
        data: yAxis
      }]
    }

    const handleClick = () => {
      setXAxis([])
      setYAxis([])
     $.when($.ajax({
       url: 'https://data.gov.gr/api/v1/query/mdg_emvolio_weekly',
       data: data,
       dataType: 'json',
       headers: {
         "Authorization": "Token 7ed90049128c5ce939b1077baac37612e5e1dd63"
       },
       success: function(data) {
        sortedData = data.sort((a: any, b: any) => {
         return new Date(a.weekreferencedate).getTime() - new Date(b.weekreferencedate).getTime();
        })
        let i=0
        let flag = false
        sortedData.map((item: any) => {
        if(item.weekreferencedate !== datesArray[datesArray.length-1]){
          datesArray.push(item.weekreferencedate)
          if(flag === false){
            flag = true
            vaccinationsPerDay.push(item.totalvaccinations)
          }
          else{
            i++
            vaccinationsPerDay.push(item.totalvaccinations)
          }
        }
        else{
          vaccinationsPerDay[i] = vaccinationsPerDay[i] + item.totalvaccinations
        }})
        datesArray.map((date)=> {
          setXAxis((old) => [...old, moment(date).utc().format('DD-MM-YYYY')
        ])
        })
        vaccinationsPerDay.map((value)=> {
          setYAxis((old)=> [...old, value])
        })
       }
     }));
   };

    return (
       <>
        <ParagraphContainer>
         <Paragraph>With this service, you are able to view detailed statistics regarding the vaccination of
          the population of Greece.
         </Paragraph></ParagraphContainer>

        <MainContainer style={{paddingTop: 40}}>
         <SecondaryContainer>
            <Paragraph style={{paddingRight: 10}}>Please select start date:</Paragraph>
            <DatePicker
                dateFormat={"yyyy-MM-dd"}
                maxDate={endDate}
                selected={startDate}
                filterDate={d => {
                return new Date() > d;
            }}
                onChange={(date) => setStartDate(date)}/>
         </SecondaryContainer>
         <SecondaryContainer style={{paddingTop: 10, paddingBottom: 30}}>
            <Paragraph style={{paddingRight: 10}}>Please select end date:</Paragraph>
            <DatePicker
                dateFormat={"yyyy-MM-dd"}
                minDate={startDate}
                selected={endDate}
                filterDate={d => {
                return new Date() > d;
            }}
                onChange={(date) => setEndDate(date)}/>
         </SecondaryContainer>
         <ButtonContainer>
          <Button onClick={handleClick} style={{paddingTop: 5}}>Ok</Button>
         </ButtonContainer>
        </MainContainer>
        <GraphContainer>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
        </GraphContainer>
       </>
    )

}

export default Vaccinations;
