import React, {useState} from "react";
import {DatePickerWrapperStyles, MainContainer, ParagraphContainer, Paragraph, SecondaryContainer} from "./VaccinationsStyles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const Vaccinations = () => {
    const [startDate,
        setStartDate] = useState < Date | null > (new Date());;
    const [endDate,
        setEndDate] = useState < Date | null > (new Date());;
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
                wrapperClassName='date_picker full-width'
                selected={startDate}
                filterDate={d => {
                return new Date() > d;
            }}
                onChange={(date) => setStartDate(date)}/>
         </SecondaryContainer>
         <SecondaryContainer style={{paddingTop: 10}}>
            <Paragraph style={{paddingRight: 10}}>Please select end date:</Paragraph>
            <DatePicker
                wrapperClassName='date_picker full-width'
                selected={endDate}
                filterDate={d => {
                return new Date() > d;
            }}
                onChange={(date) => setEndDate(date)}/>
         </SecondaryContainer>
        </MainContainer>
       </>
    )

}

export default Vaccinations;
