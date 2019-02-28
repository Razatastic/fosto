import Navbar from "../components/Navbar";
import "../styles/main.scss";
import Map from "./Map";

function Home() {
  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <h1>Welcome to Fosto!</h1>
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-large">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Home;
