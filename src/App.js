import "./App.css";
import { CandidatesList } from "./components/CandidatesList";
import { VacanciesList } from "./components/VacanciesList";

function App() {
  return (
    <div className="lists">
      <VacanciesList />
      <CandidatesList />
    </div>
  );
}

export default App;
