import { useState, useEffect } from "react";
import { getVacancies } from "../api/api";

export const VacanciesList = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const vacancies = await getVacancies();
        console.log(vacancies.data);
        setVacancies(vacancies.data);
      } catch (error) {
        console.error("Error fetching vacancies:", error);
      }
    };
    fetchVacancies();
  }, []);

  return (
    <>
      <h2>Vacancies </h2>
      <ul className="episodes">
        {vacancies.map((vacancy) => (
          <li key={vacancy.documentId} className="episode">
            <h3>{vacancy.Title}</h3>
            <p>{vacancy.Description}</p>
            <p className="salary">
              <b>{vacancy.Salary} usd</b>
            </p>
            <p>{vacancy.Location}</p>
            <p>{vacancy.Requirements}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
