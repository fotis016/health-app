import axios from 'axios';
import { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { Scrollbar } from 'react-scrollbars-custom';
import {A, Button, ButtonContainer, CarouselContainer, Container, Paragraph, H1, ItemContainer, ItemText, ItemTitle, TableContainer } from './PharmDutiesStyles';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export const PharmDutiesPage = () => {

  const areas = [
    {label: "Herakleion", value: "herakleion"},
    {label: "Pireaus", value: "piraeus"}
  ]
  const [selectedArea, setSelectedArea] = useState<SingleValue<{ label: string; value: string; }>>()
  const [token, setToken] = useState('')
  const [dutiesData, setDutiesData] = useState([])
  const [clientHasEnteredData, setClientHasEnteredData] = useState(false)

  const handleChange = (option: SingleValue<{ label: string; value: string; }>) => {
    setSelectedArea(option);
  };
  const getToken =  () => {
    const data = {
      "email": "tottinos86@gmail.com",
      "password": "Fotis99!7"
  };

    fetch("https://cors-server-project.fly.dev/https://api.efhmeries.gr/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => setToken(data.access_token))
      .catch(error => console.error(error));
  }

  const getDuties = async () => {
    const headers = {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    };

    try {
      const response = await axios.get(`https://cors-server-project.fly.dev/https://api.efhmeries.gr/api/${selectedArea?.value}/duties`, {
        headers
      })
      setDutiesData(response.data)
      setClientHasEnteredData(true)
      console.log(dutiesData)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {getToken()
  }, [])
 return (
    <div className="container text-center">
      <Container>
        <H1>Pharmacy Duties</H1>
        <Paragraph>
          Please select the desired area to view the pharmacies on duty at the current time.
        </Paragraph>
        <Select options={areas} onChange={option => handleChange(option)}/>
        <ButtonContainer>
          <Button onClick={getDuties}>Ok</Button>
        </ButtonContainer>
     </Container>
{clientHasEnteredData && <TableContainer>
  <Scrollbar>
  <Table>
      <Thead>
        <Tr>
          <Th><ItemTitle>Region</ItemTitle></Th>
          <Th><ItemTitle>Pharmacy</ItemTitle></Th>
          <Th><ItemTitle>Address</ItemTitle></Th>
          <Th><ItemTitle>Phone</ItemTitle></Th>
          <Th><ItemTitle>Working Hours</ItemTitle></Th>
        </Tr>
      </Thead>
      <Tbody>
      {dutiesData.map((item: any) =>
        <Tr>
          <Td><ItemText>{item.perioxi}</ItemText></Td>
          <Td><ItemText>{item.brand}</ItemText></Td>
          <Td><ItemText><A target="_blank" href={'https://www.google.com/maps?q=' + item.address.split(" ").join("+") + "+" + item.perioxi}>{item.address}</A></ItemText></Td>
          <Td><ItemText>{item.phone}</ItemText></Td>
          <Td><ItemText>{item.orario}</ItemText></Td>
        </Tr>
      )}
      </Tbody>
    </Table>
    </Scrollbar>
    </TableContainer>}
   </div>
   )
}
export default PharmDutiesPage
