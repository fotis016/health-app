import axios from 'axios';
import { useEffect } from 'react';

export const PharmDutiesPage = () => {
  const getToken =  () => {
    const data = {
      "email": "tottinos86@gmail.com",
      "password": "Fotis99!7"
  };

    fetch("https://api.efhmeries.gr/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        host: "https://api.efhmeries.gr",
       "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  useEffect(() => {getToken()}, [])
 return (
     <div className="container text-center">
     <h1>Pharmacy Duties</h1>

     <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quasi
       debitis fuga deserunt, placeat qui optio totam perspiciatis error.
       Repudiandae, enim veniam. Dolorum officiis recusandae consequuntur
       veritatis magni aliquam itaque.
     </p>
     {/* <button onClick={getToken} >Test</button> */}
   </div>
   )
}
export default PharmDutiesPage
