import React, {useState, useEffect} from "react";
import $ from 'jquery';
import { MainContainer, ParagraphContainer, Paragraph, SecondaryContainer, Button, ButtonContainer} from "./VaccinationsStyles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const Vaccinations = () => {
    const vaccinationsPerDay: number[] = []
    const [dates, setDates] = useState<string[]>([]);
    const [startDate,
        setStartDate] = useState < Date | null > (new Date())
    const [endDate,
        setEndDate] = useState < Date | null > (new Date())
    const data = { date_from: startDate?.toISOString().split('T')[0],
    date_to: endDate?.toISOString().split('T')[0]}
    var sortedData: any[]

    const handleClick = () => {
     $.when($.ajax({
       url: 'https://data.gov.gr/api/v1/query/mdg_emvolio_weekly',
       data: data,
       dataType: 'json',
       headers: {
         "Authorization": "Token 7ed90049128c5ce939b1077baac37612e5e1dd63"
       },
       success: function(data) {
        setDates([])
        sortedData = data.sort((a: any, b: any) => {
         return new Date(a.weekreferencedate).getTime() - new Date(b.weekreferencedate).getTime();
        })
        let i=0
        let flag = false
        sortedData.map((item: any) => {
        if(item.areaid === 701){
          setDates(dates => [...dates, item.weekreferencedate])
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
        for(i=0; i<vaccinationsPerDay.length;i++){
          console.log(dates[i])
          console.log(vaccinationsPerDay[i])
        }
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
       </>
    )

}

export default Vaccinations;
