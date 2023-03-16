import './styles/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = () => (
  <div className="card_details_wrapper">
    <div className="arrow_wrapper">
      <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
    </div>
    <div>
      <p>Dallas</p>
      <small>20°F</small>
    </div>
  </div>
);

export default Card;
