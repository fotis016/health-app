import { useNavigate } from "react-router-dom";


export const AppointmentsPage = () => {
 const navigate = useNavigate();
 const newAppointment = () => {
  navigate('/newappointment');
 }
 return (
  <button onClick={newAppointment}>New appointment</button>
 )
}
