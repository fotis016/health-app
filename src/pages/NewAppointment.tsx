import { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { NewAppointmentContainer, Paragraph, FadingBackground, StyledModal } from './NewAppointmentStyles';
import DatePicker from 'react-datepicker';
import { database, addAppointment } from '../firebase';
import { DatabaseReference, ref } from "firebase/database";
import { useDatabaseSetMutation } from "@react-query-firebase/database";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { format } from "date-fns";

export const NewAppointmentPage = () => {
  //Modal hooks
  const [isFailedOpen, setIsFailedOpen] = useState(false);
  const [failedOpacity, setFailedOpacity] = useState(0);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [SuccessOpacity, setSuccessOpacity] = useState(0);


  //Modal Functions



 const [selectedDoctor, setSelectedDoctor] = useState<SingleValue<{ label: string; value: string; }>>()
 const [appointmentDate,
  setappointmentDate] = useState<Date | null>(
    setHours(setMinutes(new Date(), 0), 9))
 const doctors = [
  {label: 'Cardiologist', value: 'cardiologist'},
  {label: 'Dentist', value: 'dentist'},
  {label: 'Pathologist', value: 'pathologist'},
  {label: 'Radiologist', value: 'radiologist'},
  {label: 'Orthopedist', value: 'orthopedist'}
 ]
 const dbRef = ref(database, "Appointments");
 const mutation = useDatabaseSetMutation(dbRef);

 const handleChange = (option: SingleValue<{ label: string; value: string; }>) => {
  setSelectedDoctor(option);
};

const filterPassedTime = (time: string | number | Date) => {
  const currentDate = new Date();
  const selectedDate = new Date(time);
  return currentDate.getTime() < selectedDate.getTime();
};

const addAppointmentHandler = async (appointmentDate: Date | null, selectedDoctor: string | undefined) => {
  if((await addAppointment(appointmentDate?.toString(), selectedDoctor))){
    setIsFailedOpen(!isFailedOpen)
  }
}

 return(
  <NewAppointmentContainer>
   <Paragraph>Please select your desired doctor:</Paragraph>
   <Select options={doctors} onChange={option => handleChange(option)}/>
   <Paragraph>Please select date and time of appointment.</Paragraph>
   <DatePicker
    showTimeSelect
    timeIntervals={60}
    minTime={new Date(0, 0, 0, 8, 0, 0)}
    maxTime={new Date(0, 0, 0, 23, 0, 0)}
    filterTime={filterPassedTime}
    dateFormat={"dd/MM/yyyy, h:mm aa"}
    selected={appointmentDate}
    minDate={new Date()}
    onChange={(date) => setappointmentDate(date)}/>
    <button onClick={() => {addAppointmentHandler(appointmentDate, selectedDoctor?.value)}}>Ok</button>
    <StyledModal
        isOpen={isFailedOpen}
        onBackgroundClick={() => setIsFailedOpen(!isFailedOpen)}
        onEscapeKeydown={() => setIsFailedOpen(!isFailedOpen)}
      >
        <span>Unfortunately this appointment is not available.</span>
        <button onClick={() => setIsFailedOpen(!isFailedOpen)}>Ok</button>
      </StyledModal>
  </NewAppointmentContainer>

 )
}
