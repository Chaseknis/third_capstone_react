import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './styles/nav.css';
import { faAngleLeft, faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';

const Nav = () => (

  <nav>
    <ul>
      <li className="back_button">
        <Link to="/">
          <FontAwesomeIcon icon={faAngleLeft} className="white p-r-5" />
        </Link>
        <p className="white">2015</p>
      </li>
      <li className="white">most views</li>
      <li>
        <FontAwesomeIcon icon={faMicrophone} className="white p-r-5" />
        <FontAwesomeIcon icon={faGear} className="white" />
      </li>
    </ul>

  </nav>
);

export default Nav;
