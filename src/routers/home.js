import Card from './card';
import './styles/home.css';

const Home = () => (

  <main>
    <div className="home_wrapper">
      <div className="header_wrapper p-r-10">
        <img className="image" alt="" />
        <h1>
          Weather App
        </h1>
      </div>
      <small className="p-r-10">Forecast by City</small>
      <div className="cards_wrapper">
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>

      </div>
    </div>
  </main>
);

export default Home;
