import CardSubject from "../../components/cardsubject/CardSubject";
import CardTotalHours from "../../components/cardworkedhours/CardTotalHours";
import CurrentPeriodTitle from "../../components/cardworkedhours/CurrentPeriodTitle";
import "./ClassroomPage.scss";

const ClasroomPage = () => {
  return (
    <section className="classroom">
      <CurrentPeriodTitle />
      <CardTotalHours />
      <h3>Subjects</h3>
      <CardSubject subject="Math" startClass="10:00" endClass="11:00" />
      <CardSubject subject="Science" startClass="10:00" endClass="11:00" />
    </section>
  );
};

export default ClasroomPage;
