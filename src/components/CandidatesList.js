import { useState, useEffect } from "react";
import { getCandidates } from "../api/api";

export const CandidatesList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const candidates = await getCandidates();
        console.log(candidates.data);
        setCandidates(candidates.data);
      } catch (error) {
        console.log("Error fetching candidates:", error);
      }
    };
    fetchCandidates();
  }, []);

  return (
    <>
      <h2>Candidates</h2>
      <ul className="episodes">
        {candidates.map((candidate) => (
          <li key={candidate.documentId} className="episode">
            <h3>{candidate.Name}</h3>
            <p>{candidate.Resume}</p>
            <p>{candidate.Email}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
