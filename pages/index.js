import Navbar from "../components/Navbar";
import "../styles/main.scss";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="vertical-center buttonContainer">
        <h1>Welcome to Fosto</h1>
      </div>
    </div>
  );
}

export default Home;
