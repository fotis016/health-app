import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import { useEffect, useState } from "react";

import { css } from "@emotion/css";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Scrollbar } from "react-scrollbars-custom";
import Select, { SingleValue } from "react-select";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";

import {
  A,
  Button,
  ButtonContainer,
  Container,
  H1,
  ItemText,
  ItemTitle,
  Paragraph,
  TableContainer,
} from "./PharmDutiesStyles";
import colors from "../theme";

const pharmDutiesContainer = css`
  margin: 50px 90px;
  @media (max-width: 1000px) {
    margin: 10px;
  }
`;
const select = css`
  border-radius: 5px;
  color: black;
`;
const tableContainer = css`
  border-radius: 10px;
  @media (max-width: 1000px) {
    margin: 10px;
  }
`;
const tableStyle = css`
  padding: 20px 10px 20px 20px;
  color: white !important;
  @media (max-width: 1000px) {
    margin: 10px;
  }
`;
const thStyle = css`
  text-align: left;
`;

export const PharmDutiesPage = () => {
  const { t } = useTranslation(["translation"]);

  const areas = [
    { label: t("dutiesArea1"), value: "herakleion" },
    { label: t("dutiesArea2"), value: "piraeus" },
  ];
  const [selectedArea, setSelectedArea] =
    useState<SingleValue<{ label: string; value: string }>>();
  const [token, setToken] = useState("");
  const [dutiesData, setDutiesData] = useState([]);
  const [clientHasEnteredData, setClientHasEnteredData] = useState(false);

  const handleChange = (
    option: SingleValue<{ label: string; value: string }>
  ) => {
    setSelectedArea(option);
  };
  const getToken = () => {
    const data = {
      email: "tottinos86@gmail.com",
      password: "testP@ssword1",
    };

    fetch(
      "https://cors-server-project.fly.dev/https://api.efhmeries.gr/api/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => setToken(data.access_token))
      .catch((error) => console.error(error));
  };

  const getDuties = async () => {
    const headers = {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.get(
        `https://cors-server-project.fly.dev/https://api.efhmeries.gr/api/${selectedArea?.value}/duties`,
        {
          headers,
        }
      );
      setDutiesData(response.data);
      setClientHasEnteredData(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);
  return (
    <div className={pharmDutiesContainer}>
      <Container>
        <H1>{t("dutiesTitle")}</H1>
        <Paragraph>{t("dutiesDetails")}</Paragraph>
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              fontFamily: `"Open Sans", sans-serif`,
            }),
            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              fontFamily: `"Open Sans", sans-serif`,
            }),
            menuList: (baseStyles, state) => ({
              ...baseStyles,
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              fontFamily: `"Open Sans", sans-serif`,
            }),
          }}
          placeholder={t("dutiesPlaceholder")}
          options={areas}
          onChange={(option) => handleChange(option)}
        />
        <ButtonContainer>
          <Button onClick={getDuties}>Ok</Button>
        </ButtonContainer>
      </Container>
      {clientHasEnteredData && (
        <TableContainer className={tableContainer}>
          <Scrollbar>
            <Table className={tableStyle}>
              <Thead>
                <Tr>
                  <Th className={thStyle}>
                    <ItemTitle>{t("dutiesTableColumn1")}</ItemTitle>
                  </Th>
                  <Th className={thStyle}>
                    <ItemTitle>{t("dutiesTableColumn2")}</ItemTitle>
                  </Th>
                  <Th className={thStyle}>
                    <ItemTitle>{t("dutiesTableColumn3")}</ItemTitle>
                  </Th>
                  <Th className={thStyle}>
                    <ItemTitle>{t("dutiesTableColumn4")}</ItemTitle>
                  </Th>
                  <Th className={thStyle}>
                    <ItemTitle>{t("dutiesTableColumn5")}</ItemTitle>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {dutiesData.map((item: any) => (
                  <Tr>
                    <Td>
                      <ItemText>{item.perioxi}</ItemText>
                    </Td>
                    <Td>
                      <ItemText>{item.brand}</ItemText>
                    </Td>
                    <Td>
                      <ItemText>
                        <A
                          target="_blank"
                          href={
                            "https://www.google.com/maps?q=" +
                            item.address.split(" ").join("+") +
                            "+" +
                            item.perioxi
                          }
                        >
                          {item.address}
                        </A>
                      </ItemText>
                    </Td>
                    <Td>
                      <ItemText>{item.phone}</ItemText>
                    </Td>
                    <Td>
                      <ItemText>{item.orario}</ItemText>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Scrollbar>
        </TableContainer>
      )}
    </div>
  );
};
export default PharmDutiesPage;
