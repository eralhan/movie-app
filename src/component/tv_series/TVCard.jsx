import "./styles/tvCard.css";
import apiConfigs from "../../config/api";
import dateFormat from "../../utils/dateFormatter";

const TVCard = ({ tv }) => {
  return (
    <>
      <div className="tvCard">
        <div className="tvCard__image">
          <img
            src={`${apiConfigs.baseImgUrl}/${tv.poster_path}`}
            alt={tv.original_name}
          />
        </div>
        <div className="tvCard__content">
          <h2 className="tvCard__title">{tv.original_name}</h2>
          <p className="tvCard__subtitle">{dateFormat(tv.first_air_date)}</p>
          <p className="tvCard__overview">{tv.overview}</p>
        </div>
      </div>
    </>
  );
};

export default TVCard;
