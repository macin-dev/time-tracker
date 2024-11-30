import { Link } from "react-router-dom";
import "./CardSubject.scss";

const CardSubject = ({ subject, startClass, endClass }) => {
  return (
    <Link to={`/subject/${subject} `} className="card-subject">
      <div className="card-subject-container">
        <span className="card-subject-container__logo">
          <img src="/src/assets/book.svg" alt="book icon" />
        </span>
        <span className="card-subject-container__name">{subject}</span>
      </div>
      <div className="card-subject-time">
        <div className="card-time card-subject-time__start">
          <span>
            <strong>Start:</strong> {startClass} am
          </span>
          <span>
            <strong>End:</strong> {endClass} am
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardSubject;
